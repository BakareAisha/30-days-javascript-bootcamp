let groceries = [
    "Rice",
    "Bread",
    "Milk",
    "Eggs",
    "Sugar",
    "Butter",
];
document.getElementById("container").innerHTML = `
<h1> Grocery Shopping List</h1>
<p class="subtitle">Items to Buy</p>

<div class="item">
    <span>1</span>
    <span>${groceries[0]}</span>
</div>

<div class="item">
    <span>2</span>
    <span>${groceries[1]}</span>
</div>

<div class="item">
    <span>3</span>
    <span>${groceries[2]}</span>
</div>

<div class="item">
    <span>4</span>
    <span>${groceries[3]}</span>
</div>

<div class="item">
    <span>5</span>
    <span>${groceries[4]}</span>
</div>

<div class="item">
    <span>6</span>
    <span>${groceries[5]}</span>
</div>

<p class="footer">
Happy Shopping!
</p>
`;