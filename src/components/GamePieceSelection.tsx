import Typograpy from "./Typography";

type Props = {};

const GamePieceSelection = (props: Props) => {
    return (
        <div className="game_piece_selection_container">
            <Typograpy variant="extrasmall">Pick player 1's mark</Typograpy>
            <Typograpy variant="body" opacity="half">
                Remember: X Goes First
            </Typograpy>
        </div>
    );
};

export default GamePieceSelection;
