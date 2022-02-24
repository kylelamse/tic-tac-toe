import styled from "@emotion/styled";
import useBreakpoint from "hooks/useBreakpoint";
import theme from "styles/theme";
import GamePiece from "./GamePiece";

const Container = styled.div<{ content: content }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.semiDarkNavy};
    border-radius: 0.625em;
    box-shadow: inset 0 -0.5em 0 ${(props) => props.theme.colors.semiDarkNavyDropShadow};
    padding: ${(props) =>
        props.content === "" ? "3em" : "1.5em 1.75em 2em 1.75em"};

    @media (min-width: ${(props) => props.theme.breakpoints.mobile}) {
        padding: ${(props) => (props.content === "" ? "2.375em" : "2.375em")};
    }
`;

type content = "" | "X" | "O";
type Props = {
    content: content;
};

const GamePiecePlace = ({ content }: Props) => {
    const isMobile = useBreakpoint({ max: theme.breakpoints.mobile });

    return (
        <Container content={content}>
            {(content === "O" || content === "X") && (
                <GamePiece
                    size={isMobile ? "Large" : "ExtraLarge"}
                    type={content}
                />
            )}
        </Container>
    );
};

export default GamePiecePlace;
