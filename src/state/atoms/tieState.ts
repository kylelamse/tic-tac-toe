import { atom } from "recoil";

const tieState = atom<number>({
    key: "tieState",
    default: 0,
});

export default tieState;
