import React from "react";
import Typography from "components/Typography";
import "./Button.scss";

type variants = "primary" | "secondary";
type Props = {
    children: React.ReactNode | string;
    variant?: variants;
};

const variantMap = {
    primary: "button_primary",
    secondary: "button_secondary",
};

const getClassName = (variant: variants) => {
    return variantMap[variant];
};

const Button = ({ children, variant = "primary" }: Props) => {
    return (
        <div className={getClassName(variant)}>
            <Typography variant="extrasmall" color="dark_navy">
                {children}
            </Typography>
        </div>
    );
};

export default Button;
