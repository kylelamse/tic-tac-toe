import { atom } from "recoil";

type players = "O" | "X";
const currentPlayer = atom<players>({
    key: "currentPlayer",
    default: "O",
});

export default currentPlayer;
