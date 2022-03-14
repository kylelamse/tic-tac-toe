import board from "types/board";
import getWinningTuples from "util/getWinningTuples";

test("it returns the right tuples for horizontal wins on the first row", () => {
    const board: board = [
        ["X", "", ""],
        ["X", "", ""],
        ["X", "", ""],
    ];

    const expected = [
        [0, 0],
        [1, 0],
        [2, 0],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for horizontal wins on the second row", () => {
    const board: board = [
        ["", "X", ""],
        ["", "X", ""],
        ["", "X", ""],
    ];

    const expected = [
        [0, 1],
        [1, 1],
        [2, 1],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for horizontal wins on the third row", () => {
    const board: board = [
        ["", "", "X"],
        ["", "", "X"],
        ["", "", "X"],
    ];

    const expected = [
        [0, 2],
        [1, 2],
        [2, 2],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for vertical wins on the first row", () => {
    const board: board = [
        ["X", "X", "X"],
        ["", "", ""],
        ["", "", ""],
    ];

    const expected = [
        [0, 0],
        [0, 1],
        [0, 2],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for vertical wins on the second row", () => {
    const board: board = [
        ["", "", ""],
        ["X", "X", "X"],
        ["", "", ""],
    ];

    const expected = [
        [1, 0],
        [1, 1],
        [1, 2],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for vertical wins on the third row", () => {
    const board: board = [
        ["", "", ""],
        ["", "", ""],
        ["X", "X", "X"],
    ];

    const expected = [
        [2, 0],
        [2, 1],
        [2, 2],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for diagonal wins from the top left corner", () => {
    const board: board = [
        ["X", "", ""],
        ["", "X", ""],
        ["", "", "X"],
    ];

    const expected = [
        [0, 0],
        [1, 1],
        [2, 2],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});

test("it returns the right tuples for diagonal wins from the top right corner", () => {
    const board: board = [
        ["", "", "X"],
        ["", "X", ""],
        ["X", "", ""],
    ];

    const expected = [
        [0, 2],
        [1, 1],
        [2, 0],
    ];
    const actual = getWinningTuples(board);

    expect(actual).toEqual(expected);
});
