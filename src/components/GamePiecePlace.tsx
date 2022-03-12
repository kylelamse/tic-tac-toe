import styled from "@emotion/styled";
import useBreakpoint from "hooks/useBreakpoint";
import { useCallback } from "react";
import theme from "styles/theme";
import GamePiece from "./GamePiece";

const Container = styled.div<{ content: content; hoverContent: player }>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.semiDarkNavy};
    border-radius: 0.625em;
    box-shadow: inset 0 -0.5em 0 ${(props) => props.theme.colors.semiDarkNavyDropShadow};
    padding: 2.375em;
    ${({ content, hoverContent }) =>
        content === "" && getHoverStyles(hoverContent)};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 1.5em 1.75em 2em 1.75em;
    }
`;

const getHoverStyles = (player: player) => `
    svg {
        fill-opacity: 0;
    }   

    @media(hover: hover) {
        &:hover, svg:hover {
        cursor: pointer;
        fill-opacity: 0;
        stroke: ${colorMap[player]};
        stroke-width: 2;
    }
}`;

const colorMap = {
    X: theme.colors.lightBlue,
    O: theme.colors.lightYellow,
};

type player = "X" | "O";
type content = player | "";
type Props = {
    content: content;
    hoverContent: player;
    onPieceClick: (x: number, y: number) => void;
    x: number;
    y: number;
};

const GamePiecePlace = ({
    content,
    hoverContent,
    onPieceClick,
    x,
    y,
}: Props) => {
    const isMobile = useBreakpoint({ max: theme.breakpoints.mobile });
    const onClick = useCallback(() => {
        if (content === "") {
            onPieceClick(x, y);
        }
    }, [onPieceClick, content, x, y]);
    return (
        <Container
            content={content}
            hoverContent={hoverContent}
            onClick={onClick}
        >
            <GamePiece
                size={isMobile ? "Large" : "ExtraLarge"}
                type={content || hoverContent}
            />
        </Container>
    );
};

export default GamePiecePlace;
