console.log("Hello World");

const mainContainer = document.querySelector(".main-container");
const columns = document.querySelectorAll(".column");


let firstLoad = true;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
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
    
    firstLoad = false;
}

buildGrid(16);

const grid = document.querySelectorAll('.pixel');

function colorPixel(pixel) {
    this.classList.add("colored");
}

function clearGrid() {
    grid.forEach((div) => {
        div.classList.remove("colored");
        
    });
};

const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', clearGrid);

const sizeButton = document.querySelectorAll('.grid-size');
sizeButton.forEach((button) => {
    button.addEventListener('click', () => {
        buildGrid(button.id);
        console.log("button id is ");
    });
    
});


const pixels = document.querySelectorAll(".pixel");
pixels.forEach((div) => {

    div.addEventListener('mouseover', colorPixel);

});

