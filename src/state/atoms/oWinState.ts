import { atom } from "recoil";

const oWinState = atom<number>({
    key: "oWinState",
    default: 0,
});

export default oWinState;
