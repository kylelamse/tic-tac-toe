import styled from "@emotion/styled";

import GamePiecePlace from "./GamePiecePlace";
import InfoTile from "./InfoTile";

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.25em;
`;

type Props = {};

const Board = (props: Props) => {
    return (
        <BoardContainer>
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
