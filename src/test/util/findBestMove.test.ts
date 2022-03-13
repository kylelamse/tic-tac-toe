import board from "types/board";
import findBestMove from "util/findBestMove";

function printBoard(board: board) {
    for (let i = 0; i < 3; i++) {
        console.log(board[i]);
    }
}

test("puts X in the first space if it is the first turn", () => {
    const currentBoard: board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    const expected: board = [
        ["X", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});

test("makes a winning move if possible", () => {
    const currentBoard: board = [
        ["X", "O", "X"],
        ["O", "", "X"],
        ["", "O", ""],
    ];

    const expected: board = [
        ["X", "O", "X"],
        ["O", "", "X"],
        ["", "O", "X"],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});
