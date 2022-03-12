import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import page from "state/atoms/page";
import playerOneState from "state/atoms/playerOneState";
import useResetBoard from "./useResetBoard";
import useResetWins from "./useResetWins";

const useNavigateHome = () => {
    const resetGame = useResetBoard();
    const resetPage = useResetRecoilState(page);
    const resetPlayerOne = useResetRecoilState(playerOneState);
    const resetWins = useResetWins();

    const navigateHome = useCallback(() => {
        resetGame();
        resetPage();
        resetPlayerOne();
        resetWins();
    }, [resetGame, resetPage, resetPlayerOne, resetWins]);
    return navigateHome;
};

export default useNavigateHome;
