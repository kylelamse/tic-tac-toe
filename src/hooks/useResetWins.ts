import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import oWinState from "state/atoms/oWinState";
import xWinState from "state/atoms/xWinState";

const useResetWins = () => {
    const resetXWins = useResetRecoilState(xWinState);
    const resetOWins = useResetRecoilState(oWinState);

    return useCallback(() => {
        resetXWins();
        resetOWins();
    }, [resetXWins, resetOWins]);
};

export default useResetWins;
