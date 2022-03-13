import styled from "@emotion/styled";

import Board from "components/Board";
import GameOver from "components/Modal/GameOver";
import React, { useEffect, useMemo } from "react";
import GameHeader from "./GameHeader";
import RestartMenu from "components/Modal/RestartMenu";
import RoundTied from "components/Modal/RoundTied";
import { useRecoilValue, useSetRecoilState } from "recoil";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import calculateGameStatus from "util/calculateGameStatus";
import Show from "components/Show";
import players from "types/players";
import restartMenuState from "state/atoms/restartMenuState";
import oWinState from "state/atoms/oWinState";
import xWinState from "state/atoms/xWinState";
import tieState from "state/atoms/tieState";
import useCpuAi from "hooks/useCpuAi";

const Container = styled.div`
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 4em;
`;

type Props = {};

const Game = (props: Props) => {
    const gamePieces = useRecoilValue(gamePiecePlacement);
    const status = useMemo(() => calculateGameStatus(gamePieces), [gamePieces]);
    const setOWinCount = useSetRecoilState(oWinState);
    const setXWinCount = useSetRecoilState(xWinState);
    const setTieCount = useSetRecoilState(tieState);
    const isRestartMenuOpen = useRecoilValue(restartMenuState);

    useEffect(() => {
        if (status === "O") {
            setOWinCount((count) => count + 1);
        }

        if (status === "X") {
            setXWinCount((count) => count + 1);
        }

        if (status === "tie") {
            setTieCount((count) => count + 1);
        }
    }, [status, setOWinCount, setXWinCount, setTieCount]);

    useCpuAi();

    return (
        <Container>
            <GameHeader />
            <Board />
            <Show show={status === "tie"}>
                <RoundTied />
            </Show>
            <Show show={status === "O" || status === "X"}>
                <GameOver winner={status as players} />
            </Show>
            <Show show={isRestartMenuOpen}>
                <RestartMenu />
            </Show>
        </Container>
    );
};

export default Game;
