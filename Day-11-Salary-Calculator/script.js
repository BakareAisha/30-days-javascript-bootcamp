function calculateSalary(hours, rate) {
    return hours * rate;
}
function showSalary(name, hours, rate) {

    let salary = calculateSalary(hours, rate);

    document.getElementById("container").innerHTML = `
        <h1>JP Morgan Corporation</h1>

        <div class="item">
            <span>Name</span>
            <span>${name}</span>
        </div>

        <div class="item">
            <span>Hours Worked</span>
            <span>${hours}</span>
        </div>

        <div class="item">
            <span>Hourly Rate</span>
            <span>₦${rate}</span>
        </div>

        <div class="total">
            <span>Salary</span>
            <span>₦${salary}</span>
        </div>
    `;
}
showSalary("Bakare Aishat", 40, 2500);