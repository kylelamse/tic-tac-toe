import styled from "@emotion/styled";
import useResetGame from "hooks/useResetGame";
import { useRecoilValue } from "recoil";
import playerOneState from "state/atoms/playerOneState";
import players from "types/players";
import Button from "../Button";
import Typograpy from "../Typography";
import Winner from "../Winner";
import ButtonContainer from "./ButtonContainer";
import Modal from "./Modal";

const WinnerContainer = styled.div`
    margin: 1em 0 1.5em 0;
`;

type Props = {
    winner: players;
};

const getVerbiage = (playerOne: players, winner: players) => {
    if (playerOne === winner) {
        return "You won!";
    }

    if (playerOne !== winner) {
        return "Oh no, you lost...";
    }
};

const GameOver = ({ winner }: Props) => {
    const playerOne = useRecoilValue(playerOneState);
    const resetGame = useResetGame();

    return (
        <Modal>
            <Typograpy variant="body" alignment="centered">
                {getVerbiage(playerOne, winner)}
            </Typograpy>
            <WinnerContainer>
                <Winner winner={winner} />
            </WinnerContainer>
            <ButtonContainer>
                <Button color="silver" size="medium">
                    Quit
                </Button>
                <Button color="light_yellow" size="medium" onClick={resetGame}>
                    Next Round
                </Button>
            </ButtonContainer>
        </Modal>
    );
};

export default GameOver;
