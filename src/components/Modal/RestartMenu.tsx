import styled from "@emotion/styled";
import Button from "components/Button";
import Typograpy from "components/Typography";
import useNavigateHome from "hooks/useNavigateHome";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import restartMenuState from "state/atoms/restartMenuState";
import ButtonContainer from "./ButtonContainer";
import Modal from "./Modal";

const Spacer = styled.div`
    height: 1.5em;
`;

type Props = {};

const RestartMenu = (props: Props) => {
    const navigateHome = useNavigateHome();
    const setIsRestartMenuOpen = useSetRecoilState(restartMenuState);

    const onCloseClick = useCallback(() => {
        setIsRestartMenuOpen(false);
    }, [setIsRestartMenuOpen]);

    const onRestartClick = useCallback(() => {
        navigateHome();
        setIsRestartMenuOpen(false);
    }, [navigateHome, setIsRestartMenuOpen]);

    return (
        <Modal>
            <Typograpy variant="medium" alignment="centered">
                Restart Game?
            </Typograpy>
            <Spacer />
            <ButtonContainer>
                <Button color="silver" size="medium" onClick={onCloseClick}>
                    No, Cancel
                </Button>
                <Button
                    color="light_yellow"
                    size="medium"
                    onClick={onRestartClick}
                >
                    Yes, Restart
                </Button>
            </ButtonContainer>
        </Modal>
    );
};

export default RestartMenu;
