function showExpenses() {
    let Food = 3500;
    let Transport = 1200;
    let Internet = 5000;
    let Electricity = 2500;
    let total = Food + Transport + Internet + Electricity;

    document.getElementById("container").innerHTML = `
   <h1> Daily Expense Summary</h1>
<p class="subtitle">Today's Expenses</p>
<hr>
<div class="item">
    <span> Food</span>
    <span>₦${Food}</span>
</div>
<div class="item">
    <span>Transport</span>
    <span>₦${Transport}</span>
</div>

<div class="item">
    <span> Internet</span>
    <span>₦${Internet}</span>
</div>

<div class="item">
    <span> Electricity</span>
    <span>₦${Electricity}</span>
</div>
<hr>
    <p class="total">
    <span>Total</span>
    <span>₦${total}</span>
    </p>

    <p class="footer">
     Budget calculated successfully.
</p>
    `
}

showExpenses()