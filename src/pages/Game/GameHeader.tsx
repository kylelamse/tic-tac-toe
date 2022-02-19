import TurnStatus from "components/TurnStatus";
import Logo from "components/Logo";
import React from "react";
import "./GameHeader.scss";
import RestartButton from "components/RestartButton";

type Props = {};

const GameHeader = (props: Props) => {
    return (
        <div className="game_header_container">
            <Logo />
            <div className="game_header_turn_status_container">
                <TurnStatus currentPlayer="X" />
            </div>
            <RestartButton />
        </div>
    );
};

export default GameHeader;
