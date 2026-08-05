let notes = JSON.parse(localStorage.getItem("notes"))|| [];

function addNote() {
    const title = document.getElementById('titleInput').value.trim();
    const content = document.getElementById('contentInput').value.trim();

    if (title === "" || content === "") {
        return;
    }

    notes.push({ title, content, dateAdded: new Date().toLocaleDateString() });
    localStorage.setItem("notes", JSON.stringify(notes));
    document.getElementById('titleInput').value = '';
    document.getElementById('contentInput').value = '';
    updateNotesContainer();
}

function updateNotesContainer() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < notes.length; i++) {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.innerHTML = `
            <h3>${notes[i].title}</h3>
            <p>${notes[i].content}</p>
            <p>${notes[i].dateAdded}</p>

            <button onclick="editNote(${i})">
        Edit
    </button>

    <button onclick="deleteNote(${i})">
        Delete
    </button>
        `;
        container.appendChild(noteDiv);
    }
}
function editNote(i) {
    const newTitle = prompt("Enter new title:", notes[i].title);
    const newContent = prompt("Enter new content:", notes[i].content);

    if (newTitle !== null && newContent !== null) {
        notes[i].title = newTitle;
        notes[i].content = newContent;
        localStorage.setItem("notes", JSON.stringify(notes));
        updateNotesContainer();
    }
}

function deleteNote(i) {
    notes.splice(i, 1);

    localStorage.setItem("notes", JSON.stringify(notes));

    updateNotesContainer();
}