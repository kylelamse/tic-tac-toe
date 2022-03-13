import players from "types/players";
import calculateGameStatus from "./calculateGameStatus";
import board from "types/board";

const WIN = 10;
const LOSS = -10;
const TIE = 0;

function minimax(
    board: board,
    depth: number,
    isMaximizer: boolean,
    currentPlayer: players,
    opponent: players,
    debug: boolean
) {
    if (calculateGameStatus(board) === currentPlayer) {
        return WIN;
    }

    if (calculateGameStatus(board) === opponent) {
        return LOSS;
    }

    if (calculateGameStatus(board) === "tie") {
        return TIE;
    }

    if (isMaximizer) {
        let best = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    board[i][j] = currentPlayer;
                    if (debug) {
                        console.log(printBoard(board));
                    }

                    best = Math.max(
                        best,
                        minimax(
                            board,
                            depth + 1,
                            false,
                            currentPlayer,
                            opponent,
                            debug
                        ) - depth
                    );

                    board[i][j] = "";
                }
            }
        }

        return best;
    }

    if (!isMaximizer) {
        let worst = 1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    board[i][j] = opponent;
                    if (debug) {
                        console.log(printBoard(board));
                    }

                    worst = Math.min(
                        worst,
                        minimax(
                            board,
                            depth + 1,
                            true,
                            currentPlayer,
                            opponent,
                            debug
                        ) + depth
                    );

                    board[i][j] = "";
                }
            }
        }
        return worst;
    }

    return TIE;
}

function findBestMove(
    board: board,
    player: players,
    opponent: players,
    debug: boolean
) {
    let bestMove = Number.NEGATIVE_INFINITY;
    let coords: { i: number; j: number } = { j: -1, i: -1 };

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "") {
                board[i][j] = player;
                const move = minimax(board, 0, false, player, opponent, debug);

                if (move > bestMove) {
                    if (debug) {
                        console.log(printBoard(board));
                    }
                    bestMove = move;
                    coords.i = i;
                    coords.j = j;
                }

                board[i][j] = "";
            }
        }
    }

    return coords;
}

function printBoard(board: board) {
    for (let i = 0; i < 3; i++) {
        console.log(board[i]);
    }
}

let currentBoard: board = [
    ["X", "O", "X"],
    ["O", "", "X"],
    ["", "O", ""],
];

let nextCoords = findBestMove(currentBoard, "X", "O", false);
currentBoard[nextCoords.i][nextCoords.j] = "X";
console.log(printBoard(currentBoard));

export default findBestMove;
