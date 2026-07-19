let output =""

let groceries = [
    "Rice",
    "Bread",
    "Milk"
];
groceries.push("Butter");
groceries.push("Ketchup")
groceries.pop();


for (let i = 0; i < groceries.length; i++) {
    output += `
    <div class="item">
        <span>${i + 1}</span>
        <span>${groceries[i]}</span>
    </div>
    `;
}

document.getElementById("container").innerHTML = `
<h1>Grocery List Manager</h1>
<p class="subtitle">Items to Buy</p>

${output}
`;