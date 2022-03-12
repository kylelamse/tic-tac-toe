import { atom } from "recoil";

const xWinState = atom<number>({
    key: "xWinState",
    default: 0,
});

export default xWinState;
