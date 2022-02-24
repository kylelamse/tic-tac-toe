import styled from "@emotion/styled";

import Board from "components/Board";
import GameOver from "components/Modal/GameOver";
import React from "react";
import GameHeader from "./GameHeader";
import RestartMenu from "components/Modal/RestartMenu";
import RoundTied from "components/Modal/RoundTied";

const Container = styled.div`
    margin-top: 1.5em;
    display: flex;
    flex-direction: column;
    gap: 4em;
`;

type Props = {};

const Game = (props: Props) => {
    return (
        <Container>
            <GameHeader />
            <Board />
            {/* <RestartMenu /> */}
            {/* <GameOver /> */}
            <RoundTied />
        </Container>
    );
};

export default Game;
