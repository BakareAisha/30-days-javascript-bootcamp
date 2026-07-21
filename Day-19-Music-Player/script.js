let music = {
    Title: "Die With A Smile",
    Artist: "Lady Gaga & Bruno Mars",
    Album: "Single",
    Duration: "4:11",


    play: function () {
        return "Now Playing..."
    },

    pause: function () {
        return "Music Paused";
    }
};

document.getElementById("container").innerHTML =
    `
<h1>🎵 Music Player</h1>
<p class="subtitle">Now Playing</p>
<div class="item">
<span>Title</span>
<span>${music.Title}</span>
</div>
<div class="item">
<span>Artist</span>
<span>${music.Artist}</span>
</div>
<div class="item">
<span>Album</span>
<span>${music.Album}</span>
</div>
<div class="item">
<span>Duration</span>
<span>${music.Duration}</span>
</div>
<div class="item">
<span>Play</span>
<span>${music.play()}</span>
</div>
<div class="item">
<span>Pause</span>
<span>${music.pause()}</span>
</div>
<p class="footer">
    Enjoy your favorite music anytime 
</p>
`