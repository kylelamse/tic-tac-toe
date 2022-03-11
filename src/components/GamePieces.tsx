import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import currentPlayer from "state/atoms/currentPlayer";
import board from "types/board";
import GamePiecePlace from "./GamePiecePlace";

const GamePieces = ({ pieces }: { pieces: board }) => {
    const player = useRecoilValue(currentPlayer);
    return (
        <>
            {pieces.reduce<ReactNode[]>((previousValue, currentValue) => {
                return [
                    ...previousValue,
                    ...currentValue.map((content) => (
                        <GamePiecePlace
                            content={content}
                            hoverContent={player}
                        />
                    )),
                ];
            }, [])}
        </>
    );
};

export default GamePieces;
