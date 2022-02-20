import React from "react";
import "./InfoTile.scss";
import Typograpy from "./Typography";

type colors = "light_blue" | "light_yellow" | "silver";
type Props = {
    label: string;
    value: number;
    color: colors;
};

const classNames = {
    light_blue: "info_tile_light_blue",
    light_yellow: "info_tile_light_yellow",
    silver: "info_tile_silver",
};

const InfoTile = ({ label, value, color }: Props) => {
    const className = classNames[color] + " info_tile_container";

    console.log(color);

    return (
        <div className={className}>
            <Typograpy variant="body" color="dark_navy">
                {label}
            </Typograpy>
            <Typograpy variant="medium" color="dark_navy">
                {value}
            </Typograpy>
        </div>
    );
};

export default InfoTile;
