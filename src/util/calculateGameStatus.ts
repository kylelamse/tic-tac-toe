import board from "types/board";

const ROW_1 = 0;
const ROW_2 = 1;
const ROW_3 = 2;

const COLUMN_1 = 0;
const COLUMN_2 = 1;
const COLUMN_3 = 2;

type status = "X" | "O" | "" | "tie" | "in progress";

const calculateGameStatus = (pieces: board): status => {
    if (
        pieces[ROW_1][COLUMN_1] === pieces[ROW_2][COLUMN_1] &&
        pieces[ROW_2][COLUMN_1] === pieces[ROW_3][COLUMN_1] &&
        (pieces[ROW_1][COLUMN_1] === "X" || pieces[ROW_1][COLUMN_1] === "O")
    ) {
        return pieces[ROW_1][COLUMN_1];
    }

    if (
        pieces[ROW_1][COLUMN_2] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_3][COLUMN_2] &&
        (pieces[ROW_1][COLUMN_2] === "X" || pieces[ROW_1][COLUMN_2] === "O")
    ) {
        return pieces[ROW_1][COLUMN_2];
    }

    if (
        pieces[ROW_1][COLUMN_3] === pieces[ROW_2][COLUMN_3] &&
        pieces[ROW_2][COLUMN_3] === pieces[ROW_3][COLUMN_3] &&
        (pieces[ROW_1][COLUMN_3] === "X" || pieces[ROW_1][COLUMN_3] === "O")
    ) {
        return pieces[ROW_1][COLUMN_3];
    }

    if (
        pieces[ROW_1][COLUMN_1] === pieces[ROW_1][COLUMN_2] &&
        pieces[ROW_1][COLUMN_2] === pieces[ROW_1][COLUMN_3] &&
        (pieces[ROW_1][COLUMN_3] === "X" || pieces[ROW_1][COLUMN_3] === "O")
    ) {
        return pieces[ROW_1][COLUMN_1];
    }

    if (
        pieces[ROW_2][COLUMN_1] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_2][COLUMN_3] &&
        (pieces[ROW_2][COLUMN_1] === "X" || pieces[ROW_2][COLUMN_1] === "O")
    ) {
        return pieces[ROW_2][COLUMN_1];
    }

    if (
        pieces[ROW_3][COLUMN_1] === pieces[ROW_3][COLUMN_2] &&
        pieces[ROW_3][COLUMN_2] === pieces[ROW_3][COLUMN_3] &&
        (pieces[ROW_3][COLUMN_1] === "X" || pieces[ROW_3][COLUMN_1] === "O")
    ) {
        return pieces[ROW_3][COLUMN_1];
    }

    if (
        pieces[ROW_1][COLUMN_1] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_3][COLUMN_3] &&
        (pieces[ROW_1][COLUMN_1] === "X" || pieces[ROW_1][COLUMN_1] === "O")
    ) {
        return pieces[ROW_1][COLUMN_1];
    }

    if (
        pieces[ROW_1][COLUMN_3] === pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_2] === pieces[ROW_3][COLUMN_1] &&
        (pieces[ROW_1][COLUMN_3] === "X" || pieces[ROW_1][COLUMN_3] === "O")
    ) {
        return pieces[ROW_1][COLUMN_3];
    }

    if (
        pieces[ROW_1][COLUMN_1] &&
        pieces[ROW_1][COLUMN_2] &&
        pieces[ROW_1][COLUMN_3] &&
        pieces[ROW_2][COLUMN_1] &&
        pieces[ROW_2][COLUMN_2] &&
        pieces[ROW_2][COLUMN_3] &&
        pieces[ROW_3][COLUMN_1] &&
        pieces[ROW_3][COLUMN_2] &&
        pieces[ROW_3][COLUMN_3]
    ) {
        return "tie";
    }

    return "in progress";
};

export default calculateGameStatus;
