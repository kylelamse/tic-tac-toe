import "./GamePiece.scss";

import xIcon from "assets/icon-x.svg";
import oIcon from "assets/icon-o.svg";

type Props = {
    size: "Large" | "Medium" | "Small";
    type: "O" | "X";
};

const sizeMap = {
    Large: "game_piece_large",
    Medium: "game_piece_medium",
    Small: "game_piece_small",
};

const iconMap = {
    O: oIcon,
    X: xIcon,
};

const altMap = {
    O: "O Icon",
    X: "X Icon",
};

const GamePiece = ({ type, size }: Props) => {
    const className = sizeMap[size];
    const icon = iconMap[type];
    const alt = altMap[type];

    return <img className={className} src={icon} alt={alt} />;
};

export default GamePiece;
