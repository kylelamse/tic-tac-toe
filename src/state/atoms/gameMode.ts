import gameModes from "types/gameModes";
import { atom } from "recoil";

const gameMode = atom<gameModes>({
    key: "gameMode",
    default: "cpu",
});

export default gameMode;
