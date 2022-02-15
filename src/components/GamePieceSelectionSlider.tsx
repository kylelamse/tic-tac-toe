import GamePiece from "./GamePiece";

import "./GamePieceSelectionSlider.scss";

type Props = {};
const GamePieceSelectionSlider = (props: Props) => {
    return (
        <div className="game_piece_selection_slider_container">
            <GamePiece type="X" size="Medium" />
            <GamePiece type="O" size="Medium" />
        </div>
    );
};

export default GamePieceSelectionSlider;
