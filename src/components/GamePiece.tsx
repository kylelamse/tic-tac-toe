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

const Icon = ({ icon }: { icon: piece }) => {
    if (icon === "O") {
        return <O />;
    }

    if (icon === "X") {
        return <X />;
    }

    return null;
};

const O = () => (
    <svg
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
            fill="#F2B137"
        />
    </svg>
);

const X = () => (
    <svg
        viewBox="0 0 64 64"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M15.002 1.147 32 18.145 48.998 1.147a3 3 0 0 1 4.243 0l9.612 9.612a3 3 0 0 1 0 4.243L45.855 32l16.998 16.998a3 3 0 0 1 0 4.243l-9.612 9.612a3 3 0 0 1-4.243 0L32 45.855 15.002 62.853a3 3 0 0 1-4.243 0L1.147 53.24a3 3 0 0 1 0-4.243L18.145 32 1.147 15.002a3 3 0 0 1 0-4.243l9.612-9.612a3 3 0 0 1 4.243 0Z"
            fill="#31C3BD"
            fill-rule="evenodd"
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

const IconContainer = styled.div<Props>`
    max-width: ${({ size }) => getDimensions(size)};
    max-height: ${({ size }) => getDimensions(size)};
`;

const GamePiece = ({ type, size, outline, color }: Props) => {
    return (
        <IconContainer size={size} type={type}>
            <Icon icon={type} />
        </IconContainer>
    );
};

export default GamePiece;
