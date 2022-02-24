import styled from "@emotion/styled";
import Button from "components/Button";
import Typograpy from "components/Typography";
import ButtonContainer from "./ButtonContainer";
import Modal from "./Modal";

const Spacer = styled.div`
    height: 1.5em;
`;

type Props = {};

const RestartMenu = (props: Props) => {
    return (
        <Modal>
            <Typograpy variant="medium" alignment="centered">
                Restart Game?
            </Typograpy>
            <Spacer />
            <ButtonContainer>
                <Button color="silver" size="medium">
                    No, Cancel
                </Button>
                <Button color="light_yellow" size="medium">
                    Yes, Restart
                </Button>
            </ButtonContainer>
        </Modal>
    );
};

export default RestartMenu;
