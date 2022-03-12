import styled from "@emotion/styled";

import Board from "components/Board";
import GameOver from "components/Modal/GameOver";
import React, { useMemo } from "react";
import GameHeader from "./GameHeader";
import RestartMenu from "components/Modal/RestartMenu";
import RoundTied from "components/Modal/RoundTied";
import { useRecoilValue } from "recoil";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import calculateGameStatus from "util/calculateGameStatus";
import Show from "components/Show";
import players from "types/players";

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
            {/* <RestartMenu /> */}
        </Container>
    );
};

export default Game;
