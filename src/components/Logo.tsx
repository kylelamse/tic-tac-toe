import "./Logo.scss";
import GamePiece from "components/GamePiece";

type Props = {};

const Logo = (props: Props) => {
    return (
        <div className="logo_container">
            <GamePiece type="X" size="Medium" />
            <GamePiece type="O" size="Medium" />
        </div>
    );
};

export default Logo;
