import board from "types/board";
import { atom } from "recoil";

const gamePiecePlacement = atom<board>({
    key: "gamePiecePlacement",
    default: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ],
});

export default gamePiecePlacement;
