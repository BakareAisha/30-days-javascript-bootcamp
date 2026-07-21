let travelList = [];


function addDestination() {
    let destination = document.getElementById("location").value.trim();
    if (destination === "") {
        return;
    }
    travelList.push({
        location: destination,
        dateAdded: new Date().toLocaleDateString(),
        status: "Planned"
    });
    document.getElementById("location").value = "";
    let output = "";
    for (let i = 0; i < travelList.length; i++) {
        output += `
      <div class="item">
        <h3>🌍 Destination ${i + 1}</h3>

        <p><strong>Location:</strong> ${travelList[i].location}</p>

        <p><strong>Date Added:</strong> ${travelList[i].dateAdded}</p>

        <div class="status">
        ✈️ ${travelList[i].status}
        </div>
     </div>
      `;
    }
    document.getElementById("container").innerHTML = `
    <p class="subtitle">My Travel Wishlist</p>
    ${output}
`;
}