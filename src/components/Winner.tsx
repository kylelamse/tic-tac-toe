import React from "react";
import GamePiece from "./GamePiece";
import Show from "./Show";
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

            <Show show={winner === "O"}>
                <Typograpy
                    variant="medium"
                    alignment="centered"
                    color="light_yellow"
                >
                    takes the round
                </Typograpy>
            </Show>
            <Show show={winner === "X"}>
                <Typograpy
                    variant="medium"
                    alignment="centered"
                    color="light_yellow"
                >
                    takes the round
                </Typograpy>
            </Show>
        </div>
    );
};

export default Winner;
