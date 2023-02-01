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

//Generates a random RGB color.

function getRandomColor() {
    let r = (Math.floor(Math.random() * 255));
    let g = (Math.floor(Math.random() * 255));
    let b = (Math.floor(Math.random() * 255));
    let result = "rgb(" + r + ", " + g + ", " + b + ")";
    return result;
}

//Makes each mouse-pass over a square darken the color by ten percent.

function darkenColor(currentColor) {
    let numberString = currentColor.substr(4).slice(0, -1);
    let numberArray = numberString.split(", ");
    let x = parseInt(numberArray[0]);
    let y = parseInt(numberArray[1]);
    let z = parseInt(numberArray[2]);
    x = Math.floor(x - (0.1 * x));
    y = Math.floor(y - (0.1 * y));
    z = Math.floor(z - (0.1 * z));
    return `rgb(${x}, ${y}, ${z})`;
}

//Colors in boxes on the grid on mouseover

function draw() {
    let cells = container.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            if (cell.classList.contains("marked")) {
                let currentColor = cell.style.backgroundColor;
                let newColor = darkenColor(currentColor);
                cell.style.backgroundColor = newColor;
            }
            else if (cell.classList.contains("marked") === false) {
                cell.style.backgroundColor = getRandomColor();
                cell.classList.add("marked");
            }
        })
    })
}

createGrid(16);
draw();

//Prompts user for number of squares per side and ensures that input is valid.

function promptForNumber() {
    let newNumber = parseInt(prompt("How many squares per side?"));

    if ((newNumber < 10) || (newNumber > 100) || (isNaN(newNumber))) {
        do {
            newNumber = parseInt(prompt("Invalid input, pick a number between 10 and 100"));
        } while ((newNumber < 10) || (newNumber > 100) || (isNaN(newNumber)));
    }

    return newNumber;
}

//Erases and resets the etch-a-sketch with a specified number of squares per side

reset.addEventListener("click", () => {
    let squaresPerSide = promptForNumber();
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