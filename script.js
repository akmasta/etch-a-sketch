const gridContainer = document.getElementById("container");
const gridSize = 16;

for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        gridContainer.appendChild(squareDiv);
    };
};
