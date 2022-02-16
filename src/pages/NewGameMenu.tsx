import Logo from "components/Logo";
import GamePieceSelection from "components/GamePieceSelection";
import Button from "components/Button";

type Props = {};

const NewGameMenu = (props: Props) => {
    return (
        <>
            <Logo />
            <GamePieceSelection />
            <Button variant="primary">New Game (VS CPU)</Button>
            <Button variant="secondary">New Game (VS Player)</Button>
        </>
    );
};

export default NewGameMenu;
