import Logo from "components/Logo";
import GamePieceSelection from "pages/NewGameMenu/GamePieceSelection";
import Button from "components/Button";

import "./NewGameMenu.scss";

type Props = {};

const NewGameMenu = (props: Props) => {
    return (
        <div className="new_game_menu_container">
            <Logo />
            <GamePieceSelection />
            <div className="new_game_menu_button_container">
                <Button color="light_yellow" size="large">
                    New Game (VS CPU)
                </Button>
                <Button color="light_blue" size="large">
                    New Game (VS Player)
                </Button>
            </div>
        </div>
    );
};

export default NewGameMenu;
