import React from "react";
import GamePiece from "./GamePiece";
import Typograpy from "./Typography";
import "./Winner.scss";

type winners = "X" | "O";
type Props = {
    winner: winners;
};

const Winner = ({ winner }: Props) => {
    return (
        <div className="winner_container">
            <GamePiece size="Medium" type={winner} />
            <Typograpy
                variant="medium"
                alignment="centered"
                color={
                    (winner === "O" && "light_yellow") ||
                    (winner === "X" && "light_blue") ||
                    undefined
                }
            >
                takes the round
            </Typograpy>
        </div>
    );
};

export default Winner;
