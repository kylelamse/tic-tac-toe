import board from "types/board";

const ROW_1 = 0;
const ROW_2 = 1;
const ROW_3 = 2;

const COLUMN_1 = 0;
const COLUMN_2 = 1;
const COLUMN_3 = 2;

const getWinningTuples = (pieces: board) => {
    if (
        pieces[ROW_1][COLUMN_1] === pieces[ROW_2][COLUMN_1] &&
        pieces[ROW_2][COLUMN_1] === pieces[ROW_3][COLUMN_1] &&
        (pieces[ROW_1][COLUMN_1] === "X" || pieces[ROW_1][COLUMN_1] === "O")
    ) {
        return [
            [ROW_1, COLUMN_1],
            [ROW_2, COLUMN_1],
            [ROW_3, COLUMN_1],
        ];
    }

    if (
        pieces[ROW_1][COLUMN_2] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_3][COLUMN_2] &&
        (pieces[ROW_1][COLUMN_2] === "X" || pieces[ROW_1][COLUMN_2] === "O")
    ) {
        return [
            [ROW_1, COLUMN_2],
            [ROW_2, COLUMN_2],
            [ROW_3, COLUMN_2],
        ];
    }

    if (
        pieces[ROW_1][COLUMN_3] === pieces[ROW_2][COLUMN_3] &&
        pieces[ROW_2][COLUMN_3] === pieces[ROW_3][COLUMN_3] &&
        (pieces[ROW_1][COLUMN_3] === "X" || pieces[ROW_1][COLUMN_3] === "O")
    ) {
        return [
            [ROW_1, COLUMN_3],
            [ROW_2, COLUMN_3],
            [ROW_3, COLUMN_3],
        ];
    }

    if (
        pieces[ROW_1][COLUMN_1] === pieces[ROW_1][COLUMN_2] &&
        pieces[ROW_1][COLUMN_2] === pieces[ROW_1][COLUMN_3] &&
        (pieces[ROW_1][COLUMN_3] === "X" || pieces[ROW_1][COLUMN_3] === "O")
    ) {
        return [
            [ROW_1, COLUMN_1],
            [ROW_1, COLUMN_2],
            [ROW_1, COLUMN_3],
        ];
    }

    if (
        pieces[ROW_2][COLUMN_1] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_2][COLUMN_3] &&
        (pieces[ROW_2][COLUMN_1] === "X" || pieces[ROW_2][COLUMN_1] === "O")
    ) {
        return [
            [ROW_2, COLUMN_1],
            [ROW_2, COLUMN_2],
            [ROW_2, COLUMN_3],
        ];
    }

    if (
        pieces[ROW_3][COLUMN_1] === pieces[ROW_3][COLUMN_2] &&
        pieces[ROW_3][COLUMN_2] === pieces[ROW_3][COLUMN_3] &&
        (pieces[ROW_3][COLUMN_1] === "X" || pieces[ROW_3][COLUMN_1] === "O")
    ) {
        return [
            [ROW_3, COLUMN_1],
            [ROW_3, COLUMN_2],
            [ROW_3, COLUMN_3],
        ];
    }

    if (
        pieces[ROW_1][COLUMN_1] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_3][COLUMN_3] &&
        (pieces[ROW_1][COLUMN_1] === "X" || pieces[ROW_1][COLUMN_1] === "O")
    ) {
        return [
            [ROW_1, COLUMN_1],
            [ROW_2, COLUMN_2],
            [ROW_3, COLUMN_3],
        ];
    }

    if (
        pieces[ROW_1][COLUMN_3] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_3][COLUMN_1] &&
        (pieces[ROW_1][COLUMN_3] === "X" || pieces[ROW_1][COLUMN_3] === "O")
    ) {
        return [
            [ROW_1, COLUMN_3],
            [ROW_2, COLUMN_2],
            [ROW_3, COLUMN_1],
        ];
    }
};

export default getWinningTuples;
