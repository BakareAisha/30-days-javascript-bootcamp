let libraryBooks = [];

function submitBook() {
    let book = document.getElementById("bookRequest").value.trim();
    let author = document.getElementById("authorRequest").value.trim();

    if (book === "" || author === "") {
        return;
    }

    libraryBooks.push({
        title: book,
        author: author,
        status: "Not started",
        dateAdded: new Date().toLocaleDateString()
    });

    document.getElementById("bookRequest").value = "";
    document.getElementById("authorRequest").value = "";

    displayBooks();
}

function displayBooks() {
    let output = "";

    for (let i = 0; i < libraryBooks.length; i++) {
        let color = "";

        if (libraryBooks[i].status === "Not started") {
            color = "orange";
        } else if (libraryBooks[i].status === "In Progress") {
            color = "blue";
        } else {
            color = "green";
        }

        output += `
            <div class="item">
                <h3>Library Books ${i + 1}</h3>
                <p><strong>Title:</strong> ${libraryBooks[i].title}</p>
                <p><strong>Author:</strong> ${libraryBooks[i].author}</p>
                <div class="status" style="color: ${color};">
                    ${libraryBooks[i].status}
                </div>
                <p><strong>Date Added:</strong> ${libraryBooks[i].dateAdded}</p>
                <button onclick="completeOrder(${i})">Completed</button>
                <button onclick="bookInProgress(${i})">In progress</button>
                <button onclick="removeOrder(${i})" type="button">Remove</button>
            </div>
        `;
    }

    document.getElementById("bookList").innerHTML = `
        <p class="subtitle">Book List</p>
        ${output}
    `;
}

function bookInProgress(i) {
    libraryBooks[i].status = "In Progress";
    displayBooks();
}

function completeOrder(i) {
    libraryBooks[i].status = "Completed";
    displayBooks();
}

function removeOrder(i) {
    libraryBooks.splice(i, 1);
    displayBooks();
}