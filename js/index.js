// Grab grid container node
let gridContainer = document.querySelector('.grid-container');

// Create our grid layout on page load. 16x16 intial size
generateGrid(16);

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
        cleanGrid();
        generateGrid(answer);
    }
});

/**
 * Function to remove all child nodes from grid-container
 */
function cleanGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

/**
 * Function to generate a grid
 * @param {number} n Specified number to generate a n x n grid
 */
function generateGrid(n) {
    for(let i = 0; i < n*n; i++) {
        // Create square divs and add event listener
        const squareDiv = document.createElement('div');
        squareDiv.className = 'square';
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = randomColor();
        });
        gridContainer.append(squareDiv);

        // Make sure squares are sized properly
        document.documentElement.style.setProperty(
            '--square-size', 
            gridContainer.clientWidth / n + "px"
        );
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