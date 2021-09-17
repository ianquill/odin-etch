const mainContainer = document.querySelector(".main-container");
const columns = document.querySelectorAll(".column");

let firstLoad = true;
let randomColorMode = false;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
        console.log('removed grid');
    }
};


function buildGrid(size) {

    if (firstLoad === false) {
        removeAllChildNodes(mainContainer);
    }

    for (let i = 0; i < size; i++) {

        const col = document.createElement('div');
        col.classList.add('column');
        mainContainer.appendChild(col);

        for (let i = 0; i < size; i++) {
            const div = document.createElement('div');
            div.classList.add('pixel');
            col.appendChild(div);

        }
    }
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((div) => {
        div.addEventListener('mouseover', colorPixel);
    });

    firstLoad = false;
}

buildGrid(16);

function getRandomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let string = "#" + randomColor;
    return string;
}

function colorPixel(pixel) {
    if (randomColorMode) {
        this.style.backgroundColor = getRandomColor();
    } else {
        this.style.backgroundColor = "#6b6b6b";
    }
    this.classList.add("colored");
    this.classList.add("blank");
}

function clearGrid() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((div) => {
        div.style.backgroundColor = "#000000";
        div.classList.remove("colored");
        div.classList.add('blank');
        
    });
};

// buttons

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', clearGrid);

const sizeButton = document.querySelectorAll('.grid-size');
sizeButton.forEach((button) => {
    button.addEventListener('click', () => {
        buildGrid(button.id);
        console.log("button id is "+button.id);
    });
    
});

const randomButton = document.querySelector(".random-color")
randomButton.addEventListener('click', () => {
    randomColorMode = !randomColorMode;
})