let output = "";

for (let i= 1; i <= 10; i++) {
    output += `<div class="number">${i}</div>`;
}
document.getElementById("container").innerHTML=`
<h2> Number Counter </h2>
<p class="subtitle">Counting from 1 to 10</p>
${output}
`