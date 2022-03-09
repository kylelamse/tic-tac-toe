import board from "types/board";
import { atom } from "recoil";

const gamePiecePlacement = atom<board>({
    key: "gamePiecePlacement",
    default: [
        ["", "X", "O"],
        ["X", "O", "X"],
        ["", "O", "X"],
    ],
});

export default gamePiecePlacement;
