import Logo from "components/Logo";
import GamePieceSelection from "components/GamePieceSelection";
import Button from "components/Button";

import "./NewGameMenu.scss";

type Props = {};

const NewGameMenu = (props: Props) => {
    return (
        <>
            <div className="new_game_menu_logo">
                <Logo />
            </div>
            <div className="new_game_menu_logo_game_piece_selection">
                <GamePieceSelection />
            </div>
            <div className="new_game_menu_logo_button_container">
                <Button variant="primary">New Game (VS CPU)</Button>
                <Button variant="secondary">New Game (VS Player)</Button>
            </div>
        </>
    );
};

export default NewGameMenu;
