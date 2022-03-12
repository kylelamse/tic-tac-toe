import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import page from "state/atoms/page";
import playerOneState from "state/atoms/playerOneState";
import useResetGame from "./useResetGame";

const useNavigateHome = () => {
    const resetGame = useResetGame();
    const resetPage = useResetRecoilState(page);
    const resetPlayerOne = useResetRecoilState(playerOneState);

    const navigateHome = useCallback(() => {
        resetGame();
        resetPage();
        resetPlayerOne();
    }, [resetGame, resetPage, resetPlayerOne]);
    return navigateHome;
};

export default useNavigateHome;
