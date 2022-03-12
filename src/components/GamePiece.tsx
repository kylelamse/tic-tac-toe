import styled from "@emotion/styled";
import theme from "styles/theme";

type sizes = "ExtraLarge" | "Large" | "Medium" | "Small";
type piece = "O" | "X";
type colors = "silver" | "dark_navy" | "light_yellow" | "light_blue";

type Props = {
    size: sizes;
} & IconProps;

type IconProps = {
    type: piece;
    outline?: boolean;
    color?: colors;
};

const Icon = ({ type, outline, color }: IconProps) => {
    if (type === "O") {
        return <O type={type} outline={outline} color={color} />;
    }

    if (type === "X") {
        return <X type={type} outline={outline} color={color} />;
    }

    return null;
};

const getColor = (color: colors) => {
    switch (color) {
        case "dark_navy":
            return theme.colors.darkNavy;
        case "light_blue":
            return theme.colors.lightBlue;
        case "light_yellow":
            return theme.colors.lightYellow;
        case "silver":
            return theme.colors.silver;
    }
};

const O = ({ color = "light_yellow" }: IconProps) => (
    <svg
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
            fill={getColor(color)}
        />
    </svg>
);

const X = ({ color = "light_blue" }: IconProps) => (
    <svg
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
            fill={getColor(color)}
            fillRule="evenodd"
        />
    </svg>
);

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

const IconContainer = styled.div<{
    size: sizes;
    color: colors;
}>`
    max-width: ${({ size }) => getDimensions(size)};
    max-height: ${({ size }) => getDimensions(size)};
`;

const defaultColorMap: { [type in piece]: colors } = {
    X: "light_blue",
    O: "light_yellow",
};

const GamePiece = ({ type, size, outline, color }: Props) => {
    return (
        <IconContainer
            size={size}
            color={color ? color : defaultColorMap[type]}
        >
            <Icon type={type} outline={outline} color={color} />
        </IconContainer>
    );
};

export default GamePiece;
