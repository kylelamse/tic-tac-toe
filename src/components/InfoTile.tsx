import styled from "@emotion/styled";
import { AppTheme } from "styles/theme";
import Typograpy from "./Typography";

const getBackgroundColor = (color: colors, theme: AppTheme) => {
    switch (color) {
        case "light_blue":
            return theme.colors.lightBlue;
        case "light_yellow":
            return theme.colors.lightYellow;
        case "silver":
            return theme.colors.silver;
    }
};

type InfoTileContainerProps = {
    color: colors;
};
const InfoTileContainer = styled.div<InfoTileContainerProps>`
    text-align: center;
    border-radius: 0.625em;
    padding: 0.75em;
    background-color: ${(props) =>
        getBackgroundColor(props.color, props.theme)};
`;

type colors = "light_blue" | "light_yellow" | "silver";
type Props = {
    label: string;
    value: number;
    color: colors;
};

const InfoTile = ({ label, value, color }: Props) => {
    return (
        <InfoTileContainer color={color}>
            <Typograpy variant="body" color="dark_navy">
                {label}
            </Typograpy>
            <Typograpy variant="medium" color="dark_navy">
                {value}
            </Typograpy>
        </InfoTileContainer>
    );
};

export default InfoTile;
