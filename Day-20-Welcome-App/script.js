function showName() {

    let name = document.getElementById("name").value;

    document.getElementById("container").innerHTML = `
        <h1> Welcome!</h1>
        <h2>Hello ${name}!</h2>
        <p>Have a wonderful day!</p>
    `;

}