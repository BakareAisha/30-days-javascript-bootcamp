let studentName = "Bakare Aishat";

let math = 85;
let english = 72;
let biology = 90;
let chemistry = 80;
let physics = 88;

let totalScore = math + english + biology + chemistry + physics;
let average = totalScore / 5;
let percentage = (totalScore / 500) * 100;

document.getElementById("container").innerHTML = `
<h1>Student Grade Calculator</h1>

<h2>Student Information</h2>
<p>Name: ${studentName}</p>

<h2>Subject Scores</h2>
    <p>Math:${math}</p>
    <p>English:${english}</p>
    <p>Biology:${biology}</p>
    <p>Chemistry:${chemistry}</p>
    <p>Physics:${physics}</p>

<h2>Results</h2>
	<p>TotalScore: ${totalScore}</p>
	<p>Average: ${average}</p>
	<p>Percentage: ${percentage}%</p>
`;