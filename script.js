let whiteSquares = [
    "A8", "B8", "C8", "D8", "E8", "F8", "G8", "H8",
    "A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7",
    "A6", "B6", "C6", "D6", "E6", "F6", "G6", "H6",
    "A5", "B5", "C5", "D5", "E5", "F5", "G5", "H5",
    "A4", "B4", "C4", "D4", "E4", "F4", "G4", "H4",
    "A3", "B3", "C3", "D3", "E3", "F3", "G3", "H3",
    "A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2",
    "A1", "B1", "C1", "D1", "E1", "F1", "G1", "H1",
];

let blackSquares = [
    "H1", "G1", "F1", "E1", "D1", "C1", "B1", "A1",
    "H2", "G2", "F2", "E2", "D2", "C2", "B2", "A2",
    "H3", "G3", "F3", "E3", "D3", "C3", "B3", "A3",
    "H4", "G4", "F4", "E4", "D4", "C4", "B4", "A4",
    "H5", "G5", "F5", "E5", "D5", "C5", "B5", "A5",
    "H6", "G6", "F6", "E6", "D6", "C6", "B6", "A6",
    "H7", "G7", "F7", "E7", "D7", "C7", "B7", "A7",
    "H8", "G8", "F8", "E8", "D8", "C8", "B8", "A8",
];

let sName = document.getElementById("square");
let board = document.querySelector(".Board");
let isWhiteBoard = true;
let squares = whiteSquares;

function setSquareColor() {
    board.className = isWhiteBoard ? "Board white-board" : "Board black-board";

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = board.rows[row].cells[col];
            const newRow = isWhiteBoard ? row : 7 - row;
            const newCol = isWhiteBoard ? col : 7 - col;

            cell.innerHTML = squares[newRow * 8 + newCol];

            if ((row + col) % 2 === 0) {
                cell.style.backgroundColor = "#eee";
                cell.style.color = "#000";
            } else {
                cell.style.backgroundColor = "#333";
                cell.style.color = "#fff";
            }
        }
    }
}

function generate() {
    let i = Math.floor(Math.random() * squares.length);
    sName.innerHTML = squares[i];
    console.log();
}

function checkColor() {
    let value = sName.innerHTML;
    let first = value.charCodeAt(0) - 64;
    let second = value[1];

    if ((first % 2 === 0 && second % 2 === 0) || (first % 2 !== 0 && second % 2 !== 0))
        return "black";
    else return "white";
}

function fRouter() {
    document.addEventListener('click', function (event) {
        let curr_color = checkColor();
        let curr_button_color = null;

        if (event.target.tagName === 'BUTTON') {
            curr_button_color = event.target.id;
            console.log(`Button with id ${event.target.id} was clicked`);
        }

        if (curr_color === curr_button_color) {
            generate()
        }
    })
}

generate();

document.getElementById("black").addEventListener("click", fRouter);
document.getElementById("white").addEventListener("click", fRouter);

document.getElementById("switch").addEventListener("click", function () {
    isWhiteBoard = !isWhiteBoard;
    document.getElementById("side").innerHTML = isWhiteBoard ? "Black" : "White";
    setSquareColor();
});

setSquareColor();