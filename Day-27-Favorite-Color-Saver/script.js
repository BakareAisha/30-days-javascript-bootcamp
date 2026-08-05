
let colors = JSON.parse(localStorage.getItem("colors") || "[]");

function saveColor() {
    const color = document.getElementById('colorInput').value.trim();
    if (color === "") {
        return;
    }

    colors.push(color);
    localStorage.setItem("colors", JSON.stringify(colors));
    document.getElementById('colorInput').value = '';
    updateSavedColors();
}

function updateSavedColors() { 
    
    const container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < colors.length; i++) {

        const colorDiv = document.createElement('div');

        colorDiv.className = "color-text";

        colorDiv.innerHTML = `
            <p>${colors[i]}</p>
        `;

        container.appendChild(colorDiv);
    }
}