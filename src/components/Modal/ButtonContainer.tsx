import styled from "@emotion/styled";
import React from "react";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
`;

type Props = {
    children: React.ReactNode;
};

const ButtonContainer = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

export default ButtonContainer;
