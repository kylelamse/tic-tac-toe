import styled from "@emotion/styled";
import Button from "../Button";
import Typograpy from "../Typography";
import Winner from "../Winner";
import Modal from "./Modal";

const WinnerContainer = styled.div`
    margin: 1em 0 1.5em 0;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
`;

type Props = {};

const GameOver = (props: Props) => {
    return (
        <Modal>
            <Typograpy variant="body" alignment="centered">
                Oh no, you lost...
            </Typograpy>
            <WinnerContainer>
                <Winner winner="X" />
            </WinnerContainer>
            <ButtonsContainer>
                <Button color="silver" size="medium">
                    Quit
                </Button>
                <Button color="light_yellow" size="medium">
                    Next Round
                </Button>
            </ButtonsContainer>
        </Modal>
    );
};

export default GameOver;
