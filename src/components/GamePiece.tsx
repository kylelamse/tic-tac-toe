import "./GamePiece.scss";

import xIcon from "assets/icon-x.svg";
import xIconOutline from "assets/icon-x-outline.svg";
import oIcon from "assets/icon-o.svg";
import oIconOutline from "assets/icon-o-outline.svg";

type piece = "O" | "X";
type Props = {
    size: "Large" | "Medium" | "Small";
    type: piece;
    outline?: boolean;
};

const sizeMap = {
    Large: "game_piece_large",
    Medium: "game_piece_medium",
    Small: "game_piece_small",
};

const iconMap = {
    X: xIcon,
    X_Outline: xIconOutline,
    O: oIcon,
    O_Outline: oIconOutline,
};

const altMap = {
    O: "O Icon",
    X: "X Icon",
};

const getIcon = (type: piece, outline?: boolean) => {
    if (outline) {
        return iconMap[`${type}_Outline`];
    }

    return iconMap[type];
};

const GamePiece = ({ type, size, outline }: Props) => {
    const className = sizeMap[size];
    const icon = getIcon(type, outline);
    const alt = altMap[type];

    return <img className={className} src={icon} alt={alt} />;
};

export default GamePiece;
