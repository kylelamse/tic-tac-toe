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
    opponent: players
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

                    best = Math.max(
                        best,
                        minimax(
                            board,
                            depth + 1,
                            false,
                            currentPlayer,
                            opponent
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

                    worst = Math.min(
                        worst,
                        minimax(
                            board,
                            depth + 1,
                            true,
                            currentPlayer,
                            opponent
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

function findBestMove(board: board, player: players, opponent: players) {
    let bestMove = Number.NEGATIVE_INFINITY;
    let coords: { i: number; j: number } = { j: -1, i: -1 };

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "") {
                board[i][j] = player;
                const move = minimax(board, 0, false, player, opponent);

                if (move > bestMove) {
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

export default findBestMove;
