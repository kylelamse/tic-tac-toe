import Board from "components/Board";
import GameOver from "components/GameOver";
import React from "react";
import "./Game.scss";
import GameHeader from "./GameHeader";

type Props = {};

const Game = (props: Props) => {
    return (
        <div className="game-container">
            <GameHeader />
            <Board />
            <GameOver />
        </div>
    );
};

export default Game;
