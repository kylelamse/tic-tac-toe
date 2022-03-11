import styled from "@emotion/styled";

import TurnStatus from "components/TurnStatus";
import Logo from "components/Logo";
import RestartButton from "components/RestartButton";
import { useRecoilValue } from "recoil";
import currentPlayer from "state/atoms/currentPlayer";

const GameHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`;

const GameHeaderStatusContainer = styled.div`
    margin: 0 74px 0 46px;
`;

type Props = {};

const GameHeader = (props: Props) => {
    const player = useRecoilValue(currentPlayer);
    return (
        <GameHeaderContainer>
            <Logo />
            <GameHeaderStatusContainer>
                <TurnStatus currentPlayer={player} />
            </GameHeaderStatusContainer>
            <RestartButton />
        </GameHeaderContainer>
    );
};

export default GameHeader;
