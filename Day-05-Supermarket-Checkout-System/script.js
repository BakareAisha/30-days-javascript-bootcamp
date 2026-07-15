let customerName = "Bakare Aishat";

let rice = 8500;
let bread = 1800;
let milk = 2500;
let eggs = 3200;

let totalBill = rice + bread + milk + eggs;
let vat = totalBill * 0.075;
let total = totalBill + vat;

let discount = 0;
let discountMessage;
if (totalBill >= 20000) {
    discountMessage = "You qualify for a 10% discount."
} else if (totalBill <= 15000) {
    discountMessage = "You qualify for a 5% discount."
} else {
    discountMessage= "No discount"
}

let paymentMethod = 2;
let message;
switch (paymentMethod) {
    case 1:
        message = "Cash";
        break;
    case 2:
        message = "Transfer"
        break;
    case 3:
        message = "Card"
        break;
    case 4:
        message = "POS"
        break;
    default:
        message = "wrong Payment Method"
        break;
}


document.getElementById("container").innerHTML = `
<h1>SUPERMART Receipt</h1>

<p><strong>Customer</strong><span>${customerName}</span></p>

<h2>Items</h2>

<p><span>Rice</span><span>₦${rice}</span></p>
<p><span>Bread</span><span>₦${bread}</span></p>
<p><span>Milk</span><span>₦${milk}</span></p>
<p><span>Eggs</span><span>₦${eggs}</span></p>

<h2>Summary</h2>

<p><span>Subtotal</span><span>₦${totalBill}</span></p>
<p><span>VAT</span><span>₦${vat}</span></p>
<p><span>Discount</span><span>${discountMessage}</span></p>

<p class="total">
    <span>Total</span>
    <span>₦${total}</span>
</p>

<p><strong>Payment</strong><span>${message}</span></p>

<p class="thank-you">
    Thank you for shopping with us!
</p>
`;
