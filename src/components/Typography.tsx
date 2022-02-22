import React from "react";
import styled from "@emotion/styled";

import { AppTheme } from "styles/theme";

type elements = "h1" | "h2" | "h3" | "h4" | "p";
type colors = "dark_navy" | "light_yellow" | "light_blue";
type alignments = "centered";
type variants = "large" | "medium" | "small" | "extrasmall" | "body";
type opacities = "half";

type Props = {
    children: React.ReactNode;
    variant: variants;
    opacity?: opacities;
    color?: colors;
    alignment?: alignments;
};

type VariantMap = {
    [key in variants]: elements;
};

const variantMap: VariantMap = {
    large: "h1",
    medium: "h2",
    small: "h3",
    extrasmall: "h4",
    body: "p",
};

const getFontSize = (variant: variants, theme: AppTheme) => {
    switch (variant) {
        case "large":
            return theme.font.large;
        case "medium":
            return theme.font.medium;
        case "small":
            return theme.font.small;
        case "extrasmall":
            return theme.font.extraSmall;
        case "body":
            return theme.font.body;
    }
};

const getFontWeight = (variant: variants, theme: AppTheme) => {
    switch (variant) {
        case "large":
        case "medium":
        case "small":
        case "extrasmall":
            return theme.font.boldWeight;
        case "body":
            return theme.font.mediumWeight;
    }
};

const getFontColor = (theme: AppTheme, color?: colors) => {
    switch (color) {
        case "dark_navy":
            return theme.colors.darkNavy;
        case "light_blue":
            return theme.colors.lightBlue;
        case "light_yellow":
            return theme.colors.lightYellow;
        default:
            return theme.colors.silver;
    }
};

const Typograpy = ({ variant, ...rest }: Props) => {
    const type = variantMap[variant];
    const Component = styled[type]<Props>`
        color: ${(props) => getFontColor(props.theme, props.color)};
        font-size: ${(props) => getFontSize(props.variant, props.theme)};
        font-weight: ${(props) => getFontWeight(props.variant, props.theme)};
        text-transform: uppercase;
        user-select: none;
        ${(props) => props.opacity === "half" && "opacity: 0.5;"}
        ${(props) => props.alignment === "centered" && "text-align: center;"}
    `;

    return <Component variant={variant} {...rest} />;
};

export default Typograpy;
