import pages from "types/pages";
import { atom } from "recoil";

const page = atom<pages>({
    key: "page",
    default: "game",
});

export default page;
