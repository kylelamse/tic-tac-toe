import React from "react";
import icon from "assets/icon-restart.svg";
import "./RestartIcon.scss";

type Props = {};

const RestartIcon = (props: Props) => {
    return <img className="restart_icon" src={icon} alt="Restart Icon" />;
};

export default RestartIcon;
