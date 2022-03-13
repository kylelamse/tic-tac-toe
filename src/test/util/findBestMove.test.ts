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

test("sets itself up for a vertically", () => {
    const currentBoard: board = [
        ["X", "O", "O"],
        ["", "", "X"],
        ["", "", ""],
    ];

    const expected: board = [
        ["X", "O", "O"],
        ["X", "", "X"],
        ["", "", ""],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});

test("sets itself up for a win diagonally", () => {
    const currentBoard: board = [
        ["X", "O", ""],
        ["O", "", ""],
        ["", "", ""],
    ];

    const expected: board = [
        ["X", "O", ""],
        ["O", "X", ""],
        ["", "", ""],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});

test("sets itself up for a win horizontally", () => {
    const currentBoard: board = [
        ["O", "O", "X"],
        ["X", "", ""],
        ["", "", ""],
    ];

    const expected: board = [
        ["O", "O", "X"],
        ["X", "X", ""],
        ["", "", ""],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});

test("blocks the opponent vertically", () => {
    const currentBoard: board = [
        ["O", "X", "X"],
        ["O", "", ""],
        ["", "", ""],
    ];

    const expected: board = [
        ["O", "X", "X"],
        ["O", "", ""],
        ["X", "", ""],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});

test("blocks the opponent horizontally", () => {
    const currentBoard: board = [
        ["O", "O", ""],
        ["X", "", ""],
        ["X", "", ""],
    ];

    const expected: board = [
        ["O", "O", "X"],
        ["X", "", ""],
        ["X", "", ""],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});

test("blocks the opponent diagonally", () => {
    const currentBoard: board = [
        ["O", "X", ""],
        ["X", "O", ""],
        ["", "", ""],
    ];

    const expected: board = [
        ["O", "X", ""],
        ["X", "O", ""],
        ["", "", "X"],
    ];

    const nextCoords = findBestMove(currentBoard, "X", "O");
    currentBoard[nextCoords.i][nextCoords.j] = "X";
    console.log(printBoard(currentBoard));

    expect(currentBoard).toEqual(expected);
});
