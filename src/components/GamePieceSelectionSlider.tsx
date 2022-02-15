import { useState } from "react";
import GamePiece from "./GamePiece";

import "./GamePieceSelectionSlider.scss";

type players = "X" | "O";

type Props = {};
const GamePieceSelectionSlider = (props: Props) => {
    const [selected, setSelected] = useState<players>("O");

    const selectX = () => setSelected("X");
    const selectO = () => setSelected("O");

    return (
        <div className="game_piece_selection_slider_container">
            <div
                onClick={selectX}
                className={`game_piece_selection_slider_piece_container ${
                    selected === "X" && "game_piece_selection_slider_selected"
                }`}
            >
                <GamePiece type="X" size="Medium" />
            </div>
            <div
                onClick={selectO}
                className={`game_piece_selection_slider_piece_container ${
                    selected === "O" && "game_piece_selection_slider_selected"
                }`}
            >
                <GamePiece type="O" size="Medium" />
            </div>
        </div>
    );
};

export default GamePieceSelectionSlider;
