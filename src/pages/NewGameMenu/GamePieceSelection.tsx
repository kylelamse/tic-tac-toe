import styled from "@emotion/styled";

import Typograpy from "components/Typography";
import GamePieceSelectionSlider from "./GamePieceSelectionSlider";

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.semiDarkNavy};
    box-shadow: ${({ theme }) => theme.colors.semiDarkNavyDropShadow};
    border-radius: 1rem;
    padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    margin: 2rem 0 2rem 0;
`;

type Props = {};

const GamePieceSelection = (props: Props) => {
    return (
        <Container>
            <Typograpy variant="extrasmall" alignment="centered">
                Pick player 1's mark
            </Typograpy>
            <GamePieceSelectionSlider />
            <Typograpy variant="body" opacity="half" alignment="centered">
                Remember: X Goes First
            </Typograpy>
        </Container>
    );
};

export default GamePieceSelection;
