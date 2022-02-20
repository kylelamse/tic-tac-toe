import React from "react";
import GamePiece from "./GamePiece";
import "./GamePiecePlace.scss";

type content = "" | "X" | "O";
type Props = {
    content: content;
};

const classMap = {
    "": "game_piece_place_empty",
    X: "game_piece_place_filled",
    O: "game_piece_place_filled",
};

const GamePiecePlace = ({ content }: Props) => {
    const className = classMap[content];
    return (
        <div className={className}>
            {(content === "O" || content === "X") && (
                <GamePiece size="Large" type={content} />
            )}
        </div>
    );
};

export default GamePiecePlace;
