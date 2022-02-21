import styled from "@emotion/styled";
import GamePiece from "./GamePiece";
import Typograpy from "./Typography";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    background-color: ${(props) => props.theme.colors.semiDarkNavy};
    border-radius: 0.3125em;
    padding: 0.625em 1em 0.75em 1em;
    box-shadow: inset 0 -0.25em 0 ${(props) => props.theme.colors.semiDarkNavyDropShadow};
`;

type players = "X" | "O";
type Props = {
    currentPlayer: players;
};

const TurnStatus = ({ currentPlayer }: Props) => {
    return (
        <Container>
            <GamePiece type={currentPlayer} size="Small" color="silver" />
            <Typograpy variant="body">Turn</Typograpy>
        </Container>
    );
};

export default TurnStatus;
