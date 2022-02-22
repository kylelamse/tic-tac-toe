import styled from "@emotion/styled";
import GamePiece from "./GamePiece";

const Container = styled.div<{ content: content }>`
    background-color: ${(props) => props.theme.colors.semiDarkNavy};
    max-width: 6em;
    max-height: 6em;
    border-radius: 0.625em;
    box-shadow: inset 0 -0.5em 0 ${(props) => props.theme.colors.semiDarkNavyDropShadow};
    padding: ${(props) =>
        props.content === "" ? "3em" : "1.5em 1.75em 3em 1.75em"};
`;

type content = "" | "X" | "O";
type Props = {
    content: content;
};

const GamePiecePlace = ({ content }: Props) => {
    return (
        <Container content={content}>
            {(content === "O" || content === "X") && (
                <GamePiece size="Large" type={content} />
            )}
        </Container>
    );
};

export default GamePiecePlace;
