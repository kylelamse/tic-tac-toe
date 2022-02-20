import { createPortal } from "react-dom";
import Button from "./Button";
import "./GameOver.scss";
import Typograpy from "./Typography";
import Winner from "./Winner";

type Props = {};

const GameOver = (props: Props) => {
    return (
        <div className="game_over_container">
            <div className="game_over_content">
                <Typograpy variant="body" alignment="centered">
                    Oh no, you lost...
                </Typograpy>
                <div className="game_over_winner_container">
                    <Winner winner="X" />
                </div>
                <div className="game_over_buttons_container">
                    <Button color="silver" size="medium">
                        Quit
                    </Button>
                    <Button color="light_yellow" size="medium">
                        Next Round
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default () => createPortal(<GameOver />, document.body);
