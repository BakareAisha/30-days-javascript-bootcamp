let output =""
for (let week = 1; week <= 4; week++) {
    output += `<div class="week">📅 Week ${week}</div>`;
    for (let day = 1; day <= 7; day++) {
       output += `<div class="day">Day ${day}</div>`;
        
    }
}


document.getElementById("container").innerHTML = `
<h1>Monthly Calendar</h1>
<p class="subtitle">Displaying 4 weeks with 7 days each</p>
<hr>
${output}
`;