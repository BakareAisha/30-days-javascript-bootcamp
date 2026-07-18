function showBill(customer, JollofRice, chicken, Drink) {
  let total = JollofRice + chicken + Drink;

document.getElementById("container").innerHTML = `
<h1> Sunshine Restaurant</h1>
<p class="subtitle">Restaurant Bill</p>

<div class="item">
    <span>Customer</span>
    <span>${customer}</span>
</div>

<div class="item">
    <span> Jollof Rice</span>
    <span>₦${JollofRice}</span>
</div>

<div class="item">
    <span> Chicken</span>
    <span>₦${chicken}</span>
</div>

<div class="item">
    <span> Drink</span>
    <span>₦${Drink}</span>
</div>

<div class="total">
    <span>Total</span>
    <span>₦${total}</span>
</div>

<p class="footer"> Thank you for dining with us!</p>
`;
}

showBill("Aishat", 3500, 2500, 1000);