// Grab our grid container node
const gridContainer = document.querySelector('.grid-container');

// Create our grid layout on page load
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.className = "square square-" + i + "-" + j;
        gridContainer.append(div);
    }
}