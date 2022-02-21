import styled from "@emotion/styled";
import RestartIcon from "./RestartIcon";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 2.5em;
    max-height: 2.5em;
    background-color: colors.$silver;
    border-radius: 0.25em;
    box-shadow: inset 0 -0.25em 0 #6b8997;
    padding: 1em;
`;

type Props = {};

const RestartButton = (props: Props) => {
    return (
        <Container>
            <RestartIcon />
        </Container>
    );
};

export default RestartButton;
