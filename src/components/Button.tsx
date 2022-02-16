import React from "react";
import Typography from "components/Typography";
import "./Button.scss";

type Props = {
    children: string;
};

const Button = ({ children }: Props) => {
    return (
        <div className="button_secondary">
            <Typography variant="extrasmall" color="dark_navy">
                {children}
            </Typography>
        </div>
    );
};

export default Button;
