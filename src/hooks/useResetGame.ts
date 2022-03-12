import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import currentPlayer from "state/atoms/currentPlayer";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";

const useResetGame = () => {
    const resetBoard = useResetRecoilState(gamePiecePlacement);
    const resetCurrentPlayer = useResetRecoilState(currentPlayer);

    const resetGame = useCallback(() => {
        resetBoard();
        resetCurrentPlayer();
    }, [resetBoard, resetCurrentPlayer]);

    return resetGame;
};

export default useResetGame;
