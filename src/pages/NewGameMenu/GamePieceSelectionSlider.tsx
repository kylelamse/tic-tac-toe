import styled from "@emotion/styled";

import { useState } from "react";
import GamePiece from "components/GamePiece";

const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.darkNavy};
    border-radius: 0.625rem;
    padding: 0.5rem;
    margin: 1.5rem 0 0.5rem 0;
`;

const SliderPieceContainer = styled.div<SelectionContainerProps>`
    flex: 1;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 0;
    ${({ selected, theme }) =>
        `${
            selected &&
            `background-color: ${theme.colors.silver}; border-radius: 0.625em`
        }`};
`;

type SelectionContainerProps = {
    type: player;
    selected: boolean;
    onClick: () => void;
};

const SelectionContainer = ({
    type,
    onClick,
    selected,
}: SelectionContainerProps) => {
    return (
        <SliderPieceContainer type={type} onClick={onClick} selected={selected}>
            <GamePiece
                type={type}
                size="Medium"
                color={selected ? "dark_navy" : "silver"}
                outline={selected}
            />
        </SliderPieceContainer>
    );
};

type player = "X" | "O";

type Props = {};
const GamePieceSelectionSlider = (props: Props) => {
    const [selected, setSelected] = useState<player>("O");

    const selectX = () => setSelected("X");
    const selectO = () => setSelected("O");

    return (
        <Container>
            <SelectionContainer
                type="X"
                onClick={selectX}
                selected={selected === "X"}
            />
            <SelectionContainer
                type="O"
                onClick={selectO}
                selected={selected === "O"}
            />
        </Container>
    );
};

export default GamePieceSelectionSlider;
