import styled from "@emotion/styled";
import GamePiece from "components/GamePiece";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`;

type Props = {};

const Logo = (props: Props) => {
    return (
        <Container>
            <GamePiece type="X" size="Medium" />
            <GamePiece type="O" size="Medium" />
        </Container>
    );
};

export default Logo;
