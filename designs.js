function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';
    //loop over each row and then each cell
    for (let r = 0; r < height; r++) {
        grid += '<tr class="row-' + r + '">';
        for (let c = 0; c < width; c++) {
            grid += '<td class="cell" id="row-' + r + '_cell-' + c + '"></td>';
        }
        grid += '</tr>';
    }
    //make the table represent the grid created by our inputs
    table.innerHTML = grid;
    //after the grid has been made, make the cells clickable
    addClickEventToCells();
}

//get the values for height and width, then call the makeGrid function
function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

//add the click event to all cells and return color for selection
function addClickEventToCells() {
    const colorPicker = document.getElementById("colorPicker");
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (event) {
            let cellClicked = event.target;
            cellClicked.style.backgroundColor = colorPicker.value;
        });
    }
}

//calls the form submission function after the sizePicker has been submitted
document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};
//make the grid that is displayed at the start
makeGrid(15, 15);
