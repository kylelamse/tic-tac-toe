import { atom } from "recoil";

const restartMenuState = atom<boolean>({
    key: "restartMenuState",
    default: false,
});

export default restartMenuState;
