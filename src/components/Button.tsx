import React from "react";
import classNames from "classnames";
import Typography from "components/Typography";
import "./Button.scss";

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
        <div className={getClassName(color, size)}>
            <Typography variant="extrasmall" color="dark_navy">
                {children}
            </Typography>
        </div>
    );
};

export default Button;
