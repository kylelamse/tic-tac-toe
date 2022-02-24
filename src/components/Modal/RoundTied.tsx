import styled from "@emotion/styled";
import Button from "components/Button";
import Typograpy from "components/Typography";
import React from "react";
import ButtonContainer from "./ButtonContainer";
import Modal from "./Modal";

const Spacer = styled.div`
    height: 1.5em;
`;

type Props = {};

const RoundTied = (props: Props) => {
    return (
        <Modal>
            <Typograpy variant="medium" alignment="centered">
                Round Tied
            </Typograpy>
            <Spacer />
            <ButtonContainer>
                <Button color="silver" size="medium">
                    Quit
                </Button>
                <Button color="light_yellow" size="medium">
                    Next Round
                </Button>
            </ButtonContainer>
        </Modal>
    );
};

export default RoundTied;
