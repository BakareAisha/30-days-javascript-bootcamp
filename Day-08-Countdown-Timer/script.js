let output = "";

let number = 10;

while (number >= 1) {
    output += `<div class="number">${number}</div>`;
    number--;
}

document.getElementById("container").innerHTML = `
<h1>Countdown Timer</h1>
<p class="subtitle">Counting down from 10 to 1</p>
${output}
<hr>
<div class="finished">Time's Up!</div>
`;