import styled from "@emotion/styled";
import React from "react";
import { createPortal } from "react-dom";

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
    background-color: ${(props) => props.theme.colors.semiDarkNavy};
    padding: 2.5em 0 3em 0;
`;

type Props = {
    children: React.ReactNode;
};

const Modal = ({ children }: Props) => {
    return createPortal(
        <Container>
            <Content>{children}</Content>
        </Container>,
        document.body
    );
};

export default Modal;
