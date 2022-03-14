import useWinningTuples from "hooks/useWinningTuples";
import { ReactNode, useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import currentPlayer from "state/atoms/currentPlayer";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import board from "types/board";
import players from "types/players";
import GamePiecePlace from "./GamePiecePlace";

const replaceItemAtIndex = (
    pieces: board,
    x: number,
    y: number,
    currentPlayer: players
) => {
    return pieces.map((row, xIter) =>
        row.map((content, yIter) => {
            if (x === xIter && y === yIter) {
                return currentPlayer;
            }
            return content;
        })
    );
};

const GamePieces = ({ pieces }: { pieces: board }) => {
    const [player, setPlayer] = useRecoilState(currentPlayer);
    const setGamePieces = useSetRecoilState(gamePiecePlacement);
    const winningTuples = useWinningTuples();

    const onPieceClick = useCallback(
        (x: number, y: number) => {
            setGamePieces((oldPieces) => {
                return replaceItemAtIndex(oldPieces, x, y, player);
            });

            if (player === "O") {
                setPlayer("X");
            }

            if (player === "X") {
                setPlayer("O");
            }
        },
        [player, setGamePieces, setPlayer]
    );

    return (
        <>
            {pieces.reduce<ReactNode[]>((previousValue, row, x) => {
                return [
                    ...previousValue,
                    ...row.map((content, y) => (
                        <GamePiecePlace
                            key={`${x}_${y}`}
                            content={content}
                            hoverContent={player}
                            onPieceClick={onPieceClick}
                            x={x}
                            y={y}
                            winningPlace={winningTuples?.some(
                                (row) => row[0] === x && row[1] === y
                            )}
                        />
                    )),
                ];
            }, [])}
        </>
    );
};

export default GamePieces;
