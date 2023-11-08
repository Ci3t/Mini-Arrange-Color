const grid = document.getElementById("grid");
const eraser = document.getElementById("eraser");
const tools = document.getElementById("tools");
const whiteboard = document.getElementById("whiteboard");

const redSquare = document.getElementById("red");
const blueSquare = document.getElementById("blue");
const greenSquare = document.getElementById("green");

const redCounter = document.getElementById("red-counter");
const blueCounter = document.getElementById("blue-counter");
const greenCounter = document.getElementById("green-counter");

let currentColor = null;
const inventory = {
    red: 0,
    blue: 0,
    green: 0,
};
const arrayColors = ["red", "blue", "green"]
// Initialize the grid with random colors and update the inventory
for (let i = 0; i < 4 * 4; i++) {
    const gridItem = document.createElement("div");
    gridItem.className = "grid-item";
    grid.appendChild(gridItem);

    const randomColor = arrayColors[Math.floor(Math.random() * 3)];

    gridItem.style.backgroundColor = randomColor;

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
// eraser.addEventListener("click", (e) => {

//     currentColor = "eraser";

// });

// whiteboard.addEventListener("click", () => {
//     currentColor = "whiteboard";
// });


redSquare.addEventListener("click", (e) => {
    const clicked = e.target.id
    if (clicked === 'red') {
        removeHighLightColor(blueSquare)
        removeHighLightColor(greenSquare)
    }
    highLightColor(redSquare)

    if (inventory.red > 0) {
        currentColor = "red";
    }
});

blueSquare.addEventListener("click", (e) => {
    const clicked = e.target.id
    if (clicked === 'blue') {
        removeHighLightColor(redSquare)
        removeHighLightColor(greenSquare)
    }
    highLightColor(blueSquare)
    if (inventory.blue > 0) {
        currentColor = "blue";
    }
});

greenSquare.addEventListener("click", (e) => {
    const clicked = e.target.id

    if (clicked === 'green') {
        removeHighLightColor(redSquare)
        removeHighLightColor(blueSquare)
    }
    highLightColor(greenSquare)

    if (inventory.green > 0) {
        currentColor = "green";
    }

});

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