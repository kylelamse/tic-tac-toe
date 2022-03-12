import { atom } from "recoil";

type players = "O" | "X";
const playerOneState = atom<players>({
    key: "playerOneState",
    default: "O",
});

export default playerOneState;
