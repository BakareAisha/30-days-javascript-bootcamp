let users = [];

async function getUsers() {

    document.getElementById("container").innerHTML = `
        <p>Loading...</p>
    `;

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const data = await response.json();

        users = data;

        displayUsers(users);

    } catch (error) {
        document.getElementById("container").innerHTML =
            `<p>${error.message}</p>`;
    }
}
function displayUsers(data) {

    let output = "";

    if (data.length === 0) {
        document.getElementById("container").innerHTML = `
            <p>No users found</p>
        `;
        return;
    }

    for (let i = 0; i < data.length; i++) {

        output += `
        <div class="user">
            <h3>${data[i].name}</h3>
            <p>Email: ${data[i].email}</p>
            <p>Phone: ${data[i].phone}</p>
            <p>Website: ${data[i].website}</p>
            <p>Company: ${data[i].company.name}</p>
        </div>
        `;

    }

    document.getElementById("container").innerHTML = output;
}
getUsers();
function searchUsers(){

    let search = document.getElementById("userInput").value.toLowerCase();

    let filteredUsers = users.filter(function(user){

        return user.name.toLowerCase().includes(search);

    });

    displayUsers(filteredUsers);
}