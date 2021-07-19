// Grab our grid container node
const gridContainer = document.querySelector('.grid-container');

// Create our grid layout on page load. 16x16 intial size
generateGrid(16);

// Add event listeners to squares to change color
const squares = document.querySelectorAll('.square');
squares.forEach(item => {
    item.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = randomColor();
    });
});

// Add event listener to button and check for user input for new grid
const resetBtn = document.querySelector('.etch-bottom-btn');
resetBtn.addEventListener('click', () => {
    let answer = prompt('Enter new grid size (1-100)');

    if(answer != null) {
        while(true) {
            if(!(answer > 0 && answer <= 100)) {
                answer = prompt('Not a valid option. Enter new grid size (1-100)');
            } else {
                break;
            }
        }

        // Destroy grid and generate new grid
        // TODO
    }
});

/**
 * Function to generate a grid
 * @param {number} n Specified number to generate a n x n grid
 */
function generateGrid(n) {
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.className = 'square';
            gridContainer.append(div);
        }
    }
}

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