import Typograpy from "./Typography";
import GamePieceSelectionSlider from "./GamePieceSelectionSlider";

import "./GamePieceSelection.scss";

type Props = {};

const GamePieceSelection = (props: Props) => {
    return (
        <div className="game_piece_selection_container">
            <Typograpy variant="extrasmall">Pick player 1's mark</Typograpy>
            <GamePieceSelectionSlider />
            <Typograpy variant="body" opacity="half">
                Remember: X Goes First
            </Typograpy>
        </div>
    );
};

export default GamePieceSelection;
