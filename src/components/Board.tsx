import styled from "@emotion/styled";
import { ReactNode } from "react";
import { useRecoilValue } from "recoil";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import board from "types/board";

import GamePiecePlace from "./GamePiecePlace";
import InfoTile from "./InfoTile";
import Logo from "./Logo";
import RestartButton from "./RestartButton";
import TurnStatus from "./TurnStatus";

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25em;
    align-items: center;
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
    ${(props) => justifySelf(props.justify)}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

const renderGamePieces = (pieces: board) => {
    return pieces.reduce<ReactNode[]>((previousValue, currentValue) => {
        return [
            ...previousValue,
            ...currentValue.map((content) => (
                <GamePiecePlace content={content} />
            )),
        ];
    }, [] as ReactNode[]);
};

type Props = {};

const Board = (props: Props) => {
    const gamePieces = useRecoilValue(gamePiecePlacement);

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
            {renderGamePieces(gamePieces)}
            <InfoTile label="X (P2)" value={14} color="light_blue" />
            <InfoTile label="Ties" value={14} color="silver" />
            <InfoTile label="O (P1)" value={11} color="light_yellow" />
        </BoardContainer>
    );
};

export default Board;
