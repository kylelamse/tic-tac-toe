import { atom } from "recoil";

type players = "O" | "X";
const selectedPlayer = atom<players>({
    key: "selectedPlayer",
    default: "O",
});

export default selectedPlayer;
