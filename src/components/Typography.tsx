import React from "react";
import classNames from "classnames";
import "./Typography.scss";

type colors = "dark_navy";
type alignments = "centered";
type variants = "large" | "medium" | "small" | "extrasmall" | "body";
type opacities = "half";

type Props = {
    children: string;
    variant: variants;
    opacity?: opacities;
    color?: colors;
    alignment?: alignments;
};

const variantMap = {
    large: {
        type: "h1",
        className: "typography_large",
    },
    medium: {
        type: "h2",
        className: "typography_medium",
    },
    small: {
        type: "h3",
        className: "typography_small",
    },
    extrasmall: {
        type: "h4",
        className: "typography_extra_small",
    },
    body: {
        type: "p",
        className: "typography_body",
    },
};

const getClassName = (
    className: string,
    opacity?: opacities,
    color?: colors,
    alignment?: alignments
) => {
    return classNames({
        [className]: true,
        typography_container: true,
        typography_half_opacity: opacity === "half",
        typography_dark_navy: color === "dark_navy",
        typography_centered: alignment === "centered",
    });
};

const Typograpy = ({ children, variant, opacity, color, alignment }: Props) => {
    const variantObject = variantMap[variant];
    const { type, className } = variantObject;

    return React.createElement(
        type,
        { className: getClassName(className, opacity, color, alignment) },
        [children]
    );
};

export default Typograpy;
