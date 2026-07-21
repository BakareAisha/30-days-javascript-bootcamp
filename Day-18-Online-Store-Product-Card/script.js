let product = {
    name: "Wireless Headphones",
    brand: "Sony",
    price: 85000,
    stock: 15
};

product.price = 80000;
product.warranty="1 year";
product.rating = "5 star"
product.color = "Black";

document.getElementById("container").innerHTML = `
<h1>Slot stores</h1>
<p class="subtitle">Slot Store Card</p>

<div class="item">
    <span>Name</span>
    <span>${product.name}</span>
</div>

<div class="item">
    <span>Brand</span>
    <span>${product.brand}</span>
</div>

<div class="item">
    <span>price</span>
  <span>₦${product.price.toLocaleString()}</span>
</div>
<div class="item">
    <span>Stock</span>
    <span>${product.stock}</span>
</div>
<div class="item">
    <span>warranty</span>
    <span>${product.warranty}</span>
</div>

<div class="item">
    <span>Rating</span>
    <span>${product.rating}</span>
</div>
<div class="item">
    <span>Color</span>
    <span>${product.color}</span>
</div>

<p class="footer">
    Explore the latest product collection 
</p>
`;