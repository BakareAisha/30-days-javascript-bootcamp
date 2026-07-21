let phone = {
    brand: "Apple",
    model: "iPhone 16",
    color: "Black",
    storage: "256GB",
    price: 1800000
};

document.getElementById("container").innerHTML = `
<h1> Phone Showcase</h1>
<p class="subtitle">Latest Smartphone Details</p>

<div class="phone-icon">📱</div>

<div class="item">
    <span>Brand</span>
    <span>${phone.brand}</span>
</div>

<div class="item">
    <span>Model</span>
    <span>${phone.model}</span>
</div>

<div class="item">
    <span>Color</span>
    <span>${phone.color}</span>
</div>

<div class="item">
    <span>Storage</span>
    <span>${phone.storage}</span>
</div>

<div class="price">
    <span>Price</span>
    <span>₦${phone.price}</span>
</div>

<p class="footer">
    Explore the latest smartphone collection 
</p>
`;