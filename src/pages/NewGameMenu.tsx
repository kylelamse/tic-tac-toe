import Logo from "components/Logo";
import GamePieceSelection from "components/GamePieceSelection";

type Props = {};

const NewGameMenu = (props: Props) => {
    return (
        <>
            <Logo />
            <GamePieceSelection />
        </>
    );
};

export default NewGameMenu;
