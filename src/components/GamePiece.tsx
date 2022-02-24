import xIcon from "assets/icon-x.svg";
import xIconSilver from "assets/icon-x-silver.svg";
import xIconDarkNavy from "assets/icon-x-dark-navy.svg";
import xIconOutline from "assets/icon-x-outline.svg";
import xIconOutlineSilver from "assets/icon-x-outline-silver.svg";

import oIcon from "assets/icon-o.svg";
import oIconSilver from "assets/icon-o-silver.svg";
import oIconDarkNavy from "assets/icon-o-dark-navy.svg";
import oIconOutline from "assets/icon-o-outline.svg";
import oIconOutlineSilver from "assets/icon-o-outline-silver.svg";
import styled from "@emotion/styled";

type sizes = "ExtraLarge" | "Large" | "Medium" | "Small";
type piece = "O" | "X";
type colors = "silver" | "dark_navy";
type Props = {
    size: sizes;
    type: piece;
    outline?: boolean;
    color?: colors;
};

const iconMap = {
    X: xIcon,
    X_outline: xIconOutline,
    X_silver: xIconSilver,
    X_dark_navy: xIconDarkNavy,
    X_outline_dark_navy: xIconDarkNavy,
    X_outline_silver: xIconOutlineSilver,
    O: oIcon,
    O_silver: oIconSilver,
    O_dark_navy: oIconDarkNavy,
    O_outline: oIconOutline,
    O_outline_silver: oIconOutlineSilver,
    O_outline_dark_navy: oIconDarkNavy,
};

const altMap = {
    O: "O Icon",
    X: "X Icon",
};

const getIcon = (type: piece, outline?: boolean, color?: colors) => {
    if (outline && color) {
        return iconMap[`${type}_outline_${color}`];
    }

    if (color && !outline) {
        return iconMap[`${type}_${color}`];
    }

    if (!color && outline) {
        return iconMap[`${type}_outline`];
    }

    return iconMap[type];
};

const getDimensions = (size: sizes) => {
    switch (size) {
        case "ExtraLarge":
            return "4em";
        case "Large":
            return "2.5em";
        case "Medium":
            return "2em";
        case "Small":
            return "1em";
    }
};

const GamePieceContainer = styled.img<{ size: sizes }>`
    user-select: none;
    max-width: ${(props) => getDimensions(props.size)};
    max-height: ${(props) => getDimensions(props.size)};
`;

const GamePiece = ({ type, size, outline, color }: Props) => {
    const icon = getIcon(type, outline, color);
    const alt = altMap[type];

    return <GamePieceContainer size={size} src={icon} alt={alt} />;
};

export default GamePiece;
