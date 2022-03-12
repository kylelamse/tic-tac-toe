import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import currentPlayer from "state/atoms/currentPlayer";
import gameMode from "state/atoms/gameMode";
import gamePiecePlacement from "state/atoms/gamePiecePlacement";
import oWinState from "state/atoms/oWinState";
import playerOneState from "state/atoms/playerOneState";
import xWinState from "state/atoms/xWinState";
import gameModes from "types/gameModes";
import players from "types/players";

import GamePieces from "./GamePieces";
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

const getXLabel = (playerOne: players, gameMode: gameModes) => {
    if (gameMode === "cpu" && playerOne === "X") {
        return "X (You)";
    }

    if (gameMode === "cpu" && playerOne === "O") {
        return "X (CPU)";
    }

    if (gameMode === "player" && playerOne === "X") {
        return "X (P1)";
    }

    if (gameMode === "player" && playerOne === "O") {
        return "X (P2)";
    }

    return "";
};

const getOLabel = (playerOne: players, gameMode: gameModes) => {
    if (gameMode === "cpu" && playerOne === "O") {
        return "O (You)";
    }

    if (gameMode === "cpu" && playerOne === "X") {
        return "O (CPU)";
    }

    if (gameMode === "player" && playerOne === "O") {
        return "O (P1)";
    }

    if (gameMode === "player" && playerOne === "X") {
        return "O (P2)";
    }

    return "";
};

type Props = {};

const Board = (props: Props) => {
    const gamePieces = useRecoilValue(gamePiecePlacement);
    const player = useRecoilValue(currentPlayer);
    const playerOne = useRecoilValue(playerOneState);
    const mode = useRecoilValue(gameMode);
    const oWinCount = useRecoilValue(oWinState);
    const xWinCount = useRecoilValue(xWinState);

    return (
        <BoardContainer>
            <HeaderItem justify="start">
                <Logo />
            </HeaderItem>
            <HeaderItem>
                <TurnStatus currentPlayer={player} />
            </HeaderItem>
            <HeaderItem justify="end">
                <RestartButton />
            </HeaderItem>
            <GamePieces pieces={gamePieces} />
            <InfoTile
                label={getXLabel(playerOne, mode)}
                value={xWinCount}
                color="light_blue"
            />
            <InfoTile label="Ties" value={14} color="silver" />
            <InfoTile
                label={getOLabel(playerOne, mode)}
                value={oWinCount}
                color="light_yellow"
            />
        </BoardContainer>
    );
};

export default Board;
