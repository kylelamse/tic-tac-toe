import { createPortal } from "react-dom";
import styled from "@emotion/styled";
import Button from "./Button";
import Typograpy from "./Typography";
import Winner from "./Winner";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Content = styled.div`
    background-color: ${(props) => props.theme.colors.semiDarkNavy};
    padding: 2.5em 0 3em 0;
`;

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
        <Container>
            <Content>
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
            </Content>
        </Container>
    );
};

export default () => createPortal(<GameOver />, document.body);
