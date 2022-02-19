import Typograpy from "components/Typography";
import GamePieceSelectionSlider from "./GamePieceSelectionSlider";

import "./GamePieceSelection.scss";

type Props = {};

const GamePieceSelection = (props: Props) => {
    return (
        <div className="game_piece_selection_container">
            <Typograpy variant="extrasmall" alignment="centered">
                Pick player 1's mark
            </Typograpy>
            <GamePieceSelectionSlider />
            <Typograpy variant="body" opacity="half" alignment="centered">
                Remember: X Goes First
            </Typograpy>
        </div>
    );
};

export default GamePieceSelection;
