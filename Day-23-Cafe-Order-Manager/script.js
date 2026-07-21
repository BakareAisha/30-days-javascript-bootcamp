let cafeOrders = [];


function submitOrder() {
    let drinkName = document.getElementById("orderRequest").value.trim();
    if (drinkName === "") {
        return;
    }
    cafeOrders.push({
        drinkName: drinkName,
        size: "medium",
        dateAdded: new Date().toLocaleDateString(),
        status: "order Placed"
    });
    document.getElementById("orderRequest").value = "";

    displayOrders();
}
function displayOrders() {
    let output = "";
    for (let i = 0; i < cafeOrders.length; i++) {
        output += `
      <div class="item">
        <h3>Cafe Orders ${i + 1}</h3>
        <p><strong>Drink:</strong> ${cafeOrders[i].drinkName}</p>
        <p><strong>Size:</strong> ${cafeOrders[i].size}</p>
        <p><strong>Date Added:</strong> ${cafeOrders[i].dateAdded}</p>
        <div class="status">
         ${cafeOrders[i].status}
        </div>
        <button onclick="removeOrder(${i})" type="button">Remove</button>
     </div>
      `;
    }
    document.getElementById("orderList").innerHTML = `
    <p class="subtitle">Cafe One</p>
    ${output}
    `;
}


function removeOrder(i) {
    cafeOrders.splice(i,1)
    displayOrders()
}