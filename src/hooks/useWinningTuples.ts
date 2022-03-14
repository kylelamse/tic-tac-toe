import { useRecoilValue } from "recoil";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import useGameStatus from "./useGameStatus";
import getWinningTuples from "util/getWinningTuples";

const useWinningTuples = () => {
    const status = useGameStatus();
    const board = useRecoilValue(gamePiecePlacement);
    if (status === "X" || status === "O") {
        return getWinningTuples(board);
    }
};

export default useWinningTuples;
