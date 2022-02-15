import React from "react";
import "./Typography.scss";

type Props = {
    children: string;
    variant: "large" | "medium" | "small" | "extrasmall" | "body";
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

const Typograpy = ({ children, variant }: Props) => {
    const variantObject = variantMap[variant];
    const { type, className } = variantObject;

    return React.createElement(type, { className }, [children]);
};

export default Typograpy;
