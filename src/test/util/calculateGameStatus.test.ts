import board from "types/board";
import calculateGameStatus from "util/calculateGameStatus";

test("returns X as winner for the first column", () => {
    const expected = "X";
    const tiles: board = [
        ["X", "", ""],
        ["X", "", ""],
        ["X", "", ""],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the second column", () => {
    const expected = "X";
    const tiles: board = [
        ["", "X", ""],
        ["", "X", ""],
        ["", "X", ""],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the third column", () => {
    const expected = "X";
    const tiles: board = [
        ["", "", "X"],
        ["", "", "X"],
        ["", "", "X"],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the first row", () => {
    const expected = "X";
    const tiles: board = [
        ["X", "X", "X"],
        ["", "", ""],
        ["", "", ""],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the second row", () => {
    const expected = "X";
    const tiles: board = [
        ["", "", ""],
        ["X", "X", "X"],
        ["", "", ""],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the third row", () => {
    const expected = "X";
    const tiles: board = [
        ["", "", ""],
        ["", "", ""],
        ["X", "X", "X"],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the top left diagonal", () => {
    const expected = "X";
    const tiles: board = [
        ["X", "", ""],
        ["", "X", ""],
        ["", "", "X"],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns X as winner for the top right diagonal", () => {
    const expected = "X";
    const tiles: board = [
        ["", "", "X"],
        ["", "X", ""],
        ["X", "", ""],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});

test("returns tie when the board is full and there is no winner", () => {
    const expected = "tie";
    const tiles: board = [
        ["O", "X", "X"],
        ["X", "O", "O"],
        ["X", "O", "X"],
    ];
    const actual = calculateGameStatus(tiles);

    expect(actual).toEqual(expected);
});
