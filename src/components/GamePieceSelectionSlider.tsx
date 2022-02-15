import { useState } from "react";
import GamePiece from "./GamePiece";

import "./GamePieceSelectionSlider.scss";

interface SelectionContainerProps {
    type: player;
    selected: player;
    onClick: () => void;
}

const SelectionContainer = ({
    type,
    onClick,
    selected,
}: SelectionContainerProps) => {
    return (
        <div
            onClick={onClick}
            className={`game_piece_selection_slider_piece_container ${
                selected === type && "game_piece_selection_slider_selected"
            }`}
        >
            <GamePiece type={type} size="Medium" />
        </div>
    );
};

type player = "X" | "O";

type Props = {};
const GamePieceSelectionSlider = (props: Props) => {
    const [selected, setSelected] = useState<player>("O");

    const selectX = () => setSelected("X");
    const selectO = () => setSelected("O");

    return (
        <div className="game_piece_selection_slider_container">
            <SelectionContainer
                type="X"
                onClick={selectX}
                selected={selected}
            />
            <SelectionContainer
                type="O"
                onClick={selectO}
                selected={selected}
            />
        </div>
    );
};

export default GamePieceSelectionSlider;
