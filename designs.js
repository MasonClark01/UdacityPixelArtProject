function makeGrid(height, width) {
    const table = document.getElementById("pixelCanvas");
    let grid = '';

    for (let r = 0; r < height; r++) {
        grid += '<tr class="row-' + r + '">';
        for (let c = 0; c < width; c++) {
            grid += '<td class="cell" id="row-' + r + '_cell-' + c + '"></td>';
        }
        grid += '</tr>';
    }
    table.innerHTML = grid;

    addClickEventToCells();
}

function formSubmission() {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
}

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


document.getElementById('sizePicker').onsubmit = function () {
    formSubmission();
};

makeGrid(15, 15); 