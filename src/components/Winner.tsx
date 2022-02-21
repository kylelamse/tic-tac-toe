import styled from "@emotion/styled";
import GamePiece from "./GamePiece";
import Show from "./Show";
import Typograpy from "./Typography";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
`;

type winners = "X" | "O";
type Props = {
    winner: winners;
};

const Winner = ({ winner }: Props) => {
    return (
        <Container>
            <GamePiece size="Medium" type={winner} />
            <Show show={winner === "O"}>
                <Typograpy
                    variant="medium"
                    alignment="centered"
                    color="light_yellow"
                >
                    takes the round
                </Typograpy>
            </Show>
            <Show show={winner === "X"}>
                <Typograpy
                    variant="medium"
                    alignment="centered"
                    color="light_blue"
                >
                    takes the round
                </Typograpy>
            </Show>
        </Container>
    );
};

export default Winner;
