import styled from "@emotion/styled";

import GamePiecePlace from "./GamePiecePlace";
import InfoTile from "./InfoTile";
import Logo from "./Logo";
import RestartButton from "./RestartButton";
import TurnStatus from "./TurnStatus";

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25em;
`;

type justifyTypes = "start" | "end" | "";
const justifySelf = (justify: justifyTypes = "") => {
    if (!justify) return null;

    return `justify-self: ${justify};`;
};

type HeaderItemProps = {
    justify?: justifyTypes;
};
const HeaderItem = styled.div<HeaderItemProps>`
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }

    ${(props) => justifySelf(props.justify)}
`;

type Props = {};

const Board = (props: Props) => {
    return (
        <BoardContainer>
            <HeaderItem justify="start">
                <Logo />
            </HeaderItem>
            <HeaderItem>
                <TurnStatus currentPlayer="X" />
            </HeaderItem>
            <HeaderItem justify="end">
                <RestartButton />
            </HeaderItem>
            <GamePiecePlace content="" />
            <GamePiecePlace content="X" />
            <GamePiecePlace content="O" />
            <GamePiecePlace content="X" />
            <GamePiecePlace content="O" />
            <GamePiecePlace content="X" />
            <GamePiecePlace content="" />
            <GamePiecePlace content="O" />
            <GamePiecePlace content="X" />
            <InfoTile label="X (P2)" value={14} color="light_blue" />
            <InfoTile label="Ties" value={14} color="silver" />
            <InfoTile label="O (P1)" value={11} color="light_yellow" />
        </BoardContainer>
    );
};

export default Board;
