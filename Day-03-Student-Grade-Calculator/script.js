let studentName = "Bakare Aishat";

let math = 85;
let english = 72;
let biology = 90;
let chemistry = 80;
let physics = 88;

let totalScore = math + english + biology + chemistry + physics;
let average = totalScore / 5;
let percentage = (totalScore / 500) * 100;
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}

let remark;
if (grade === "A") {
    remark = "Excellent performance";
} else if (grade === "B") {
    remark = "Very Good";
} else if (grade === "C") {
    remark = "Good";
} else if (grade === "D") {
    remark = "Needs Improvement";
} else {
    remark = "Failed";
}

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
	<p>Total Score: ${totalScore}</p>
	<p>Average: ${average}</p>
    <p>Grade: ${grade}</p>
    <p>Remark: ${remark}</p>
	<p>Percentage: ${percentage}%</p>
`;