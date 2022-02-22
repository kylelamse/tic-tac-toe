import styled from "@emotion/styled";

import Logo from "components/Logo";
import GamePieceSelection from "pages/NewGameMenu/GamePieceSelection";
import Button from "components/Button";

const Container = styled.div`
    margin-top: 7.5rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

type Props = {};

const NewGameMenu = (props: Props) => {
    return (
        <Container>
            <Logo />
            <GamePieceSelection />
            <ButtonContainer>
                <Button color="light_yellow" size="large">
                    New Game (VS CPU)
                </Button>
                <Button color="light_blue" size="large">
                    New Game (VS Player)
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default NewGameMenu;
