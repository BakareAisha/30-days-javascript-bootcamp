let orders = [
    "Jollof Rice",
    "Chicken",
    "Soft Drink"
];
orders.push("Ice-cream")
orders.pop()
orders.unshift("Grilled Fish") //Vip order already added
orders.shift() //The kitchen immediately prepares the VIP order so its being removed

function showOrders(){
    let output =""
    for (let i = 0; i < orders.length; i++) {
   output +=`
   <div class="item">
        <span>${i + 1}</span>
        <span>${orders[i]}</span>
    </div>
   `      
    }
}
showOrders()
document.getElementById("container").innerHTML=
`
<h1> Restaurant Order Manager</h1>
<p class="subtitle">Current Waiting Orders</p>
${output}
`