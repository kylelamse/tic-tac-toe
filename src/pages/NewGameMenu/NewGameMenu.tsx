import styled from "@emotion/styled";

import Logo from "components/Logo";
import GamePieceSelection from "pages/NewGameMenu/GamePieceSelection";
import Button from "components/Button";
import { useSetRecoilState } from "recoil";
import gameMode from "state/atoms/gameMode";
import { useCallback } from "react";
import page from "state/atoms/page";

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
    const setMode = useSetRecoilState(gameMode);
    const setPage = useSetRecoilState(page);

    const onCPUClick = useCallback(() => {
        setMode("cpu");
        setPage("game");
    }, [setMode, setPage]);

    const onPlayerClick = useCallback(() => {
        setMode("player");
        setPage("game");
    }, [setMode, setPage]);

    return (
        <Container>
            <Logo />
            <GamePieceSelection />
            <ButtonContainer>
                <Button color="light_yellow" size="large" onClick={onCPUClick}>
                    New Game (VS CPU)
                </Button>
                <Button color="light_blue" size="large" onClick={onPlayerClick}>
                    New Game (VS Player)
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default NewGameMenu;
