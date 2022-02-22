import React from "react";
import styled from "@emotion/styled";
import classNames from "classnames";
import Typography from "components/Typography";
import { AppTheme } from "styles/theme";

const backgroundColor = (color: colors, theme: AppTheme) => {
    let themeColor;
    switch (color) {
        case "light_blue":
            themeColor = theme.colors.lightBlue;
            break;
        case "light_yellow":
            themeColor = theme.colors.lightYellow;
            break;
        case "silver":
            themeColor = theme.colors.silver;
            break;
    }

    return `background-color: ${themeColor}`;
};

const boxShadow = (color: colors, yOffset: string, theme: AppTheme) => {
    let themeColor;
    switch (color) {
        case "light_blue":
            themeColor = theme.colors.lightBlueDropShadow;
            break;
        case "light_yellow":
            themeColor = theme.colors.lightYellowDropShadow;
            break;
        case "silver":
            themeColor = theme.colors.silverDropShadow;
            break;
    }

    return `box-shadow: inset 0 ${yOffset} 0 ${themeColor}`;
};

const paddingMap = {
    large: "0.875em 0 1.375em 0",
    medium: "0.9375em 1em 1.0625em 1.0625em",
};
const padding = (size: sizes) => {
    return `padding: ${paddingMap[size]}`;
};

const borderRadiusMap = {
    large: "1em",
    medium: ".75em",
};
const borderRadius = (size: sizes) => {
    return `border-radius: ${borderRadiusMap[size]}`;
};

type ButtonContainerProps = {
    color: colors;
    size: sizes;
};
const ButtonContainer = styled.div<ButtonContainerProps>`
    ${(props) => backgroundColor(props.color, props.theme)};
    ${(props) => boxShadow(props.color, "-0.5em", props.theme)};
    ${(props) => padding(props.size)};
    ${(props) => borderRadius(props.size)};
    text-align: center;
`;

type colors = "light_yellow" | "light_blue" | "silver";
type sizes = "large" | "medium";
type Props = {
    children: React.ReactNode | string;
    color: colors;
    size: sizes;
};

const getClassName = (color: colors, size: sizes) => {
    return classNames({
        button_light_yellow_large: color === "light_yellow" && size === "large",
        button_light_blue_large: color === "light_blue" && size === "large",
        button_silver_large: color === "silver" && size === "large",
        button_light_yellow_medium:
            color === "light_yellow" && size === "medium",
        button_light_blue_medium: color === "light_blue" && size === "medium",
        button_silver_medium: color === "silver" && size === "medium",
    });
};

const Button = ({ children, color, size }: Props) => {
    return (
        <ButtonContainer color={color} size={size}>
            <Typography variant="extrasmall" color="dark_navy">
                {children}
            </Typography>
        </ButtonContainer>
    );
};

export default Button;
