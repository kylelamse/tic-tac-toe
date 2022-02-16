import React from "react";
import "./Typography.scss";

type colors = "dark_navy";

type Props = {
    children: string;
    variant: "large" | "medium" | "small" | "extrasmall" | "body";
    opacity?: "half";
    color?: colors;
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

const getClassName = (className: string, opacity?: string, color?: colors) => {
    return `${className} typography_container ${
        (opacity === "half" && "typography_half_opacity") || ""
    }  ${(color && `typography_${color}`) || ""}`;
};

const Typograpy = ({ children, variant, opacity, color }: Props) => {
    const variantObject = variantMap[variant];
    const { type, className } = variantObject;

    return React.createElement(
        type,
        { className: getClassName(className, opacity, color) },
        [children]
    );
};

export default Typograpy;
