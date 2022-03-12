import { useCallback } from "react";
import { useResetRecoilState } from "recoil";
import oWinState from "state/atoms/oWinState";
import tieState from "state/atoms/tieState";
import xWinState from "state/atoms/xWinState";

const useResetWins = () => {
    const resetXWins = useResetRecoilState(xWinState);
    const resetOWins = useResetRecoilState(oWinState);
    const resetTies = useResetRecoilState(tieState);

    return useCallback(() => {
        resetXWins();
        resetOWins();
        resetTies();
    }, [resetXWins, resetOWins, resetTies]);
};

export default useResetWins;
