import { ReactNode } from "react";
import board from "types/board";
import GamePiecePlace from "./GamePiecePlace";

const GamePieces = ({ pieces }: { pieces: board }) => {
    return (
        <>
            {pieces.reduce<ReactNode[]>((previousValue, currentValue) => {
                return [
                    ...previousValue,
                    ...currentValue.map((content) => (
                        <GamePiecePlace content={content} />
                    )),
                ];
            }, [])}
        </>
    );
};

export default GamePieces;
