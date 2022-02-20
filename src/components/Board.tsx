import React from "react";
import GamePiecePlace from "./GamePiecePlace";
import "./Board.scss";
import InfoTile from "./InfoTile";

type Props = {};

const Board = (props: Props) => {
    return (
        <div className="board_container">
            <GamePiecePlace content="" />
            <GamePiecePlace content="X" />
            <GamePiecePlace content="O" />
            <GamePiecePlace content="X" />
            <GamePiecePlace content="O" />
            <GamePiecePlace content="X" />
            <GamePiecePlace content="" />
            <GamePiecePlace content="O" />
            <GamePiecePlace content="X" />
            <InfoTile label="X (P2)" value={14} color="light_blue" />
            <InfoTile label="Ties" value={14} color="silver" />
            <InfoTile label="O (P1)" value={11} color="light_yellow" />
        </div>
    );
};

export default Board;
