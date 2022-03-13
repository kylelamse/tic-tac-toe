import { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import currentPlayer from "state/atoms/currentPlayer";
import gameMode from "state/atoms/gameMode";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import playerOneState from "state/atoms/playerOneState";
import calculateGameStatus from "util/calculateGameStatus";
import findBestMove from "util/findBestMove";

function useCpuAi() {
    const mode = useRecoilValue(gameMode);
    const [player, setPlayer] = useRecoilState(currentPlayer);
    const playerOne = useRecoilValue(playerOneState);
    const [board, setBoard] = useRecoilState(gamePiecePlacement);
    const status = useMemo(() => calculateGameStatus(board), [board]);

    useEffect(() => {
        const cpu = playerOne === "X" ? "O" : "X";
        if (mode === "cpu" && player === cpu && status === "in progress") {
            const newBoard = board.map((rows) => rows.map((row) => row));
            const bestMove = findBestMove(newBoard, cpu, playerOne);
            newBoard[bestMove.i][bestMove.j] = cpu;
            setBoard(newBoard);
            setPlayer(playerOne);
        }
    }, [mode, player, playerOne, board, setBoard, setPlayer, status]);
}

export default useCpuAi;
