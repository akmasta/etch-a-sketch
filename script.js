const gridContainer = document.getElementById("container");
const gridSize = 5;

gridContainer.innerHTML = "";

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        gridContainer.appendChild(squareDiv);
    };
};

document.documentElement.style.setProperty('--grid-size', gridSize);