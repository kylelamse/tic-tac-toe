import Show from "components/Show";
import React from "react";
import { useRecoilValue } from "recoil";
import page from "state/atoms/page";
import Game from "./Game/Game";
import NewGameMenu from "./NewGameMenu/NewGameMenu";

type Props = {};

const CurrentPage = (props: Props) => {
    const currentPage = useRecoilValue(page);
    return (
        <>
            <Show show={currentPage === "new-game"}>
                <NewGameMenu />
            </Show>
            <Show show={currentPage === "game"}>
                <Game />
            </Show>
        </>
    );
};

export default CurrentPage;
