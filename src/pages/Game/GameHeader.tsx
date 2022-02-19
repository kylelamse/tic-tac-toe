import TurnStatus from "components/TurnStatus";
import Logo from "components/Logo";
import React from "react";
import "./GameHeader.scss";
import RestartButton from "components/RestartButton";

type Props = {};

const GameHeader = (props: Props) => {
    return (
        <div className="game-header">
            <Logo />
            <TurnStatus currentPlayer="X" />
            <RestartButton />
        </div>
    );
};

export default GameHeader;
