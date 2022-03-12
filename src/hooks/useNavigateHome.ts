import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import page from "state/atoms/page";
import useResetGame from "./useResetGame";

const useNavigateHome = () => {
    const resetGame = useResetGame();
    const resetPage = useResetRecoilState(page);

    const navigateHome = useCallback(() => {
        resetGame();
        resetPage();
    }, [resetGame, resetPage]);
    return navigateHome;
};

export default useNavigateHome;
