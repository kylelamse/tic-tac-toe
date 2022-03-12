import styled from "@emotion/styled";
import useNavigateHome from "hooks/useNavigateHome";
import useResetBoard from "hooks/useResetBoard";
import { useRecoilValue } from "recoil";
import gameMode from "state/atoms/gameMode";
import playerOneState from "state/atoms/playerOneState";
import gameModes from "types/gameModes";
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

const getVerbiage = (playerOne: players, winner: players, mode: gameModes) => {
    if (playerOne === winner && mode === "cpu") {
        return "You won!";
    }

    if (playerOne !== winner && mode === "cpu") {
        return "Oh no, you lost...";
    }

    if (playerOne === winner && mode === "player") {
        return "Player 1 wins!";
    }

    if (playerOne !== winner && mode === "player") {
        return "Player 2 wins!";
    }

    return "";
};

const GameOver = ({ winner }: Props) => {
    const playerOne = useRecoilValue(playerOneState);
    const mode = useRecoilValue(gameMode);
    const resetGame = useResetBoard();
    const navigateHome = useNavigateHome();

    return (
        <Modal>
            <Typograpy variant="body" alignment="centered">
                {getVerbiage(playerOne, winner, mode)}
            </Typograpy>
            <WinnerContainer>
                <Winner winner={winner} />
            </WinnerContainer>
            <ButtonContainer>
                <Button color="silver" size="medium" onClick={navigateHome}>
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
