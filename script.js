const container = document.querySelector("#container");

//Creates a 16x16 grid

function createGrid() {
    for (let i=0; i<16; i++) {
        let row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row");
        for (let j=0; j<16; j++) {
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

createGrid();
draw();