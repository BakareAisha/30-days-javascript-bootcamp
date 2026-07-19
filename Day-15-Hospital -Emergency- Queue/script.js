let output =""
let patients = [
    "John",
    "Mary",
    "Sarah"
];
patients.unshift("Emergency Patient");
// patients.shift(); //Removes the first item which is the emergency patient


for (let i = 0; i< patients.length; i++) {
   output +=`
   <div class="item">
        <span>${i + 1}</span>
        <span>${patients[i]}</span>
    </div>
   `
}
document.getElementById("container").innerHTML = `
<h1> Hospital Emergency Queue</h1>
<p class="subtitle">Current Waiting Patients</p>

${output}
`;