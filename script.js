const gridContainer = document.getElementById("container");
let gridSize = 16;

// Create the first default 16 by 16 grid.

function createGrid() {
    gridContainer.innerHTML = "";
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const squareDiv = document.createElement("div");
            squareDiv.classList.add("square");
            gridContainer.appendChild(squareDiv);
        };
    };

    const square = document.querySelectorAll(".square");

    square.forEach(square => {
        square.addEventListener("mousemove", () => {
            const bgColor = random_bg_color();
            square.style.backgroundColor = bgColor;
        });
    });

    document.documentElement.style.setProperty('--grid-size', gridSize);
};

createGrid();

// Restart game and choose new grid size.

const button = document.querySelector("button");

button.addEventListener("click", () => {
   let newValue = prompt("Select size of the grid (max. 100):");
   
   newValue = Number(newValue);

   if (isNaN(newValue) || newValue < 1 || newValue > 100) {
        alert("Invalid! Please enter a number between 1 and 100.")
     } else {
        gridSize = newValue;
        createGrid();
   };
});

// Randomize background color.

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return `rgb(${x}, ${y}, ${z})`;
}