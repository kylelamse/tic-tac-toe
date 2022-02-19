import React from "react";
import "./RestartButton.scss";
import RestartIcon from "./RestartIcon";

type Props = {};

const RestartButton = (props: Props) => {
    return (
        <div className="restart_button_container">
            <RestartIcon />
        </div>
    );
};

export default RestartButton;
