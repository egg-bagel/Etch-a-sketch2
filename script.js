const container = document.querySelector("#container");
const reset = document.querySelector("#reset");

//Creates a grid with a specified number of squares

function createGrid(numberOfSquares) {
    for (let i=0; i<numberOfSquares; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row");
        for (let j=0; j<numberOfSquares; j++) {
            let cell = document.createElement("div");
            row.appendChild(cell);
            cell.classList.add("cell");
        }
    }
}

//Colors in boxes on the grid on mouseover

function draw() {
    let cells = container.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })
    })
}

createGrid(16);
draw();

//Erases and resets the etch-a-sketch with a specified number of squares per side

reset.addEventListener("click", () => {
    let squaresPerSide = prompt("How many squares per side?");
    let cells = container.querySelectorAll(".cell");
    let rows = container.querySelectorAll(".row");
    rows.forEach(row => {
        cells.forEach(cell => {
            cell.remove();
        })
        row.remove();
    })
    createGrid(squaresPerSide);
    draw();
})