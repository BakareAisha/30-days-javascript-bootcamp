let playlist = [];

function addSong() {
    const title = document.getElementById('musicInput').value.trim();
    const artist = document.getElementById('artistInput').value.trim();
    if (title === "" || artist === "") {
        return;
    }

    const song = {
        title: title,
        artist: artist,
        status: "Ready to Play",
        dateAdded: new Date().toLocaleDateString()
    };

    playlist.push(song);
    document.getElementById('musicInput').value = '';
    document.getElementById('artistInput').value = '';
    updatePlaylist();
}
function updatePlaylist() {
    searchSongs();
}

function searchSongs() {
    let search = document.getElementById("searchMusic").value;
    output = "";
    search = search.toLowerCase();
    for (let i = 0; i < playlist.length; i++) {
        if (playlist[i].title.toLowerCase().includes(search) || 
        playlist[i].artist.toLowerCase().includes(search)) {
            output += `
            <div class="song">
            <h3> ${playlist[i].title}</h3>
            <p> Artist: ${playlist[i].artist}</p>
            <p>Added: ${playlist[i].dateAdded}</p>
            <div class="status">
            ${playlist[i].status}
            <button onclick="removeSongs(${i})" type="button">Remove</button>
    </div>
</div>
`;
        }
    }
    document.getElementById('container').innerHTML = output;
}
function removeSongs(i) {
    playlist.splice(i, 1);
    updatePlaylist();
}