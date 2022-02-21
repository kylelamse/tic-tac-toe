import styled from "@emotion/styled";

import Board from "components/Board";
import GameOver from "components/GameOver";
import React from "react";
import GameHeader from "./GameHeader";

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
            {/* <GameOver /> */}
        </Container>
    );
};

export default Game;
