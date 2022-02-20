import React from "react";
import GamePiece from "./GamePiece";
import Typograpy from "./Typography";
import "./Winner.scss";

type Props = {};

const Winner = (props: Props) => {
    return (
        <div className="winner_container">
            <GamePiece size="Medium" type="O" />
            <Typograpy
                variant="medium"
                alignment="centered"
                color="light_yellow"
            >
                takes the round
            </Typograpy>
        </div>
    );
};

export default Winner;
