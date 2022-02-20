import React from "react";

type Props = {
    show: boolean;
    children: React.ReactNode;
};

const Show = ({ show, children }: Props) => {
    return <>{show ? children : ""}</>;
};

export default Show;
