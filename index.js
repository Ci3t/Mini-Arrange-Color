const grid = document.getElementById("grid");
const eraser = document.getElementById("eraser");
const tools = document.getElementById("tools");
const whiteboard = document.getElementById("whiteboard");

const redSquare = document.getElementById("red");
const blueSquare = document.getElementById("blue");
const greenSquare = document.getElementById("green");
const inv = document.getElementById("inv");

const redCounter = document.getElementById("red-counter");
const blueCounter = document.getElementById("blue-counter");
const greenCounter = document.getElementById("green-counter");

let currentColor = null;
const inventory = {
    red: 0,
    blue: 0,
    green: 0,
};


// const arrayColors = ["red", "blue", "green"]
// // Initialize the grid with random colors and update the inventory
// for (let i = 0; i < 4 * 4; i++) {
//     const gridItem = document.createElement("div");
//     gridItem.className = "grid-item";
//     grid.appendChild(gridItem);

//     const randomColor = arrayColors[Math.floor(Math.random() * 3)];

//     gridItem.style.backgroundColor = randomColor;

// }

const arrayColors = ["red", "blue", "green"];
const numRows = 5; // Number of rows
const numCols = 12; // Number of columns

const gridSize = 100; // New size for each square in pixels

function gridSizeStyle(numCols, numRows, gridSize) {
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${numCols}, ${gridSize}px)`;
    grid.style.gridTemplateRows = `repeat(${numRows}, ${gridSize}px)`;
}
function createDynamicGrid(numRows, numCols, gridSize, arrayColors) {
    const gridData = [];

    gridSizeStyle(numCols, numRows, gridSize)

    for (let i = 0; i < numRows; i++) {
        // const row = [];
        for (let j = 0; j < numCols; j++) {
            const gridItem = document.createElement("div");
            gridItem.className = "grid-item";
            gridItem.id = `${i}-${j}`
            grid.appendChild(gridItem);
            // const randomColor = arrayColors[Math.floor(Math.random() * arrayColors.length)];
            // gridItem.style.backgroundColor = randomColor;

            // row.push(randomColor);
            gridData.push(gridItem);
        }
    }
    return gridData;
}
const gridData = createDynamicGrid(numRows, numCols, gridSize, arrayColors);

function createGridColors() {

    for (let g = 0; g < gridData.length; g++) {

        let [i, j] = gridData[g].getAttribute("id").split("-")
        drawRed(Number(i), Number(j), Number(g))
        drawBlue(Number(i), Number(j), Number(g))
        drawGreen(Number(i), Number(j), Number(g))

    }
}

createGridColors()

function drawRed(i, j, g) {

    if (i === 0 && j >= 0) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "red"
    }
    if (i === 4 && j <= 11) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "red"
    }
    if (i >= 0 && j === 0) {
        gridData[g].style.backgroundColor = "red"

    }
    if (i >= 0 && j === 11) {
        gridData[g].style.backgroundColor = "red"

    }
}
function drawBlue(i, j, g) {

    if (i > 0 && i < 4 && j > 0 && j < 4) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "blue"
    }
    if (i === 2 && j === 2) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "green"
    }

    if (i > 0 && i < 4 && j > 4 && j < 8) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "blue"
    }
    if (i === 2 && j === 6) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "green"
    }

}
function drawGreen(i, j, g) {


    if (i > 0 && i < 4 && j > 7 && j < 11) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "green"
    }
    if (i === 2 && j === 9) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "yellow"
    }
    if (i > 0 && i < 4 && j === 4) {
        // gridData[g].classList.add("red")
        gridData[g].style.backgroundColor = "yellow"
    }

}

redSquare.style.backgroundColor = "red";
blueSquare.style.backgroundColor = "blue";
greenSquare.style.backgroundColor = "green";

function updateCounters() {
    redCounter.textContent = inventory.red;
    blueCounter.textContent = inventory.blue;
    greenCounter.textContent = inventory.green;
}

function highLightColor(color) {
    color.style.border = "yellow"
    color.style.borderStyle = "solid"
    color.style.borderWidth = "2px"
}
function removeHighLightColor(color) {
    color.style.border = "#ccc"
    color.style.borderStyle = "solid"
    color.style.borderWidth = "1px"
}


tools.addEventListener("click", (e) => {
    const target = e.target.id

    target === "eraser" ? currentColor = "eraser" : currentColor = "whiteboard";

});

// ! inv event listner

// inv.addEventListener("click", (e) => {
//     const target = e.target.id

//     if (target === "red") {
//         highLightColor(redSquare)
//         removeHighLightColor(blueSquare)
//         removeHighLightColor(greenSquare)
//         if (inventory.red > 0) {
//             currentColor = "red";
//         }
//     }
//     if (target === "green") {
//         highLightColor(greenSquare)
//         removeHighLightColor(blueSquare)
//         removeHighLightColor(redSquare)
//         if (inventory.green > 0) {
//             currentColor = "green";
//         }
//     }
//     if (target === "blue") {
//         highLightColor(blueSquare)
//         removeHighLightColor(redSquare)
//         removeHighLightColor(greenSquare)
//         if (inventory.blue > 0) {
//             currentColor = "blue";
//         }
//     }
// })
function selectColor(target, colorSquare, inventoryColor) {
    removeHighLightColor(redSquare);
    removeHighLightColor(greenSquare);
    removeHighLightColor(blueSquare);
    highLightColor(colorSquare);

    if (inventoryColor > 0) {
        currentColor = target;
    }
}
inv.addEventListener("click", (e) => {
    const target = e.target.id;

    if (target === "red") {
        selectColor("red", redSquare, inventory.red);
    } else if (target === "green") {
        selectColor("green", greenSquare, inventory.green);
    } else if (target === "blue") {
        selectColor("blue", blueSquare, inventory.blue);
    }
});

// redSquare.addEventListener("click", (e) => {
//     const clicked = e.target.id
//     if (clicked === 'red') {
//         removeHighLightColor(blueSquare)
//         removeHighLightColor(greenSquare)
//     }
//     highLightColor(redSquare)

//     if (inventory.red > 0) {
//         currentColor = "red";
//     }
// });

// blueSquare.addEventListener("click", (e) => {
//     const clicked = e.target.id
//     if (clicked === 'blue') {
//         removeHighLightColor(redSquare)
//         removeHighLightColor(greenSquare)
//     }
//     highLightColor(blueSquare)
//     if (inventory.blue > 0) {
//         currentColor = "blue";
//     }
// });

// greenSquare.addEventListener("click", (e) => {
//     const clicked = e.target.id

//     if (clicked === 'green') {
//         removeHighLightColor(redSquare)
//         removeHighLightColor(blueSquare)
//     }
//     highLightColor(greenSquare)

//     if (inventory.green > 0) {
//         currentColor = "green";
//     }

// });

grid.addEventListener("click", (event) => {
    const gridItem = event.target;
    if (currentColor === "eraser") {
        const itemColor = gridItem.style.backgroundColor;
        if (itemColor === "blue" || itemColor === "green") {
            gridItem.style.backgroundColor = "white";
            if (itemColor === "blue") {
                inventory.blue++;
            } else if (itemColor === "green") {
                inventory.green++;
            }
            updateCounters();
        }
    } else if (currentColor === "whiteboard") {
        const itemColor = gridItem.style.backgroundColor;
        if (itemColor === "red") {
            gridItem.style.backgroundColor = "white";
            inventory.red++;
            updateCounters();
        }
    } else if (currentColor) {
        const itemColor = gridItem.style.backgroundColor;
        if (itemColor === "white") {
            if (inventory[currentColor] > 0) {
                gridItem.style.backgroundColor = currentColor;
                inventory[currentColor]--;
                updateCounters();
            }
        }
    }
});


redSquare.addEventListener("click", () => {
    if (inventory.red > 0) {
        currentColor = "red";
    }
});

blueSquare.addEventListener("click", () => {
    if (inventory.blue > 0) {
        currentColor = "blue";
    }
});

greenSquare.addEventListener("click", () => {
    if (inventory.green > 0) {
        currentColor = "green";
    }
});

updateCounters();


