import styled from "@emotion/styled";
import { useRecoilState } from "recoil";

import GamePiece from "components/GamePiece";
import playerOneState from "state/atoms/playerOneState";
import { useCallback } from "react";

const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.darkNavy};
    border-radius: 0.625rem;
    padding: 0.5rem;
    margin: 1.5rem 0 0.5rem 0;
`;

const SliderPieceContainer = styled.div<SelectionContainerProps>`
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.5rem 0;
    border-radius: 0.625em;

    ${({ selected, theme }) =>
        `${selected && `background-color: ${theme.colors.silver};`}`};

    :hover {
        ${({ selected, theme }) =>
            `${
                !selected && `background-color: ${theme.colors.darkNavyHover};`
            }`};
    }
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
    const [selected, setSelected] = useRecoilState(playerOneState);

    const selectX = useCallback(() => {
        setSelected("X");
    }, [setSelected]);

    const selectO = useCallback(() => {
        setSelected("O");
    }, [setSelected]);

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
