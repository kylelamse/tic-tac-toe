import TurnStatus from "components/TurnStatus";
import Logo from "components/Logo";
import React from "react";
import "./GameHeader.scss";

type Props = {};

const GameHeader = (props: Props) => {
    return (
        <div className="game-header">
            <Logo />
            <TurnStatus currentPlayer="X" />
            <Logo />
        </div>
    );
};

export default GameHeader;
