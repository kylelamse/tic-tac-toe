import React from "react";
import "./Game.scss";
import GameHeader from "./GameHeader";

type Props = {};

const Game = (props: Props) => {
    return (
        <div className="game-container">
            <GameHeader />
        </div>
    );
};

export default Game;
