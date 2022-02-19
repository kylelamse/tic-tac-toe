import React from "react";
import GamePiece from "./GamePiece";
import "./TurnStatus.scss";
import Typograpy from "./Typography";

type players = "X" | "O";
type Props = {
    currentPlayer: players;
};

const TurnStatus = ({ currentPlayer }: Props) => {
    return (
        <div className="turn_status">
            <GamePiece type={currentPlayer} size="Small" color="silver" />
            <Typograpy variant="body">Turn</Typograpy>
        </div>
    );
};

export default TurnStatus;
