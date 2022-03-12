import styled from "@emotion/styled";
import useResetGame from "hooks/useResetGame";
import { useCallback } from "react";
import { useSetRecoilState } from "recoil";
import restartMenuState from "state/atoms/restartMenuState";
import RestartIcon from "./RestartIcon";

type ContainerProps = {
    onClick: () => void;
};
const Container = styled.div<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.silver};
    box-shadow: inset 0 -0.25em 0 #6b8997;
    border-radius: 0.625em;
    padding: 1.125em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 0.5em 0.75em;
        border-radius: 0.25em;
    }

    :hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.silverHover};
    }
`;

type Props = {};

const RestartButton = (props: Props) => {
    const setRestartMenu = useSetRecoilState(restartMenuState);

    const openRestartMenu = useCallback(() => {
        setRestartMenu(true);
    }, [setRestartMenu]);

    return (
        <Container onClick={openRestartMenu}>
            <RestartIcon />
        </Container>
    );
};

export default RestartButton;
