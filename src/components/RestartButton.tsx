import styled from "@emotion/styled";
import RestartIcon from "./RestartIcon";

const Container = styled.div`
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
