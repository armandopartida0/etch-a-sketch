// Grab our grid container node
const gridContainer = document.querySelector('.grid-container');

// Create our grid layout on page load
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        div.className = 'square';
        gridContainer.append(div);
    }
}

// Add event listeners to squares to change color
const squares = document.querySelectorAll('.square');
squares.forEach(item => {
    item.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = randomColor();
    });
});

/**
 * Helper function to return a random color
 * @returns A random color in rgb(r, g, b) format
 */
function randomColor() {
    // 0 - 255
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}