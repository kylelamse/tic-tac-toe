import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import calculateGameStatus from "util/calculateGameStatus";

const useGameStatus = () => {
    const gamePieces = useRecoilValue(gamePiecePlacement);
    const status = useMemo(() => calculateGameStatus(gamePieces), [gamePieces]);
    return status;
};

export default useGameStatus;
