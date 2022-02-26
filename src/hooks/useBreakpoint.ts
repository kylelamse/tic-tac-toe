import { useEffect, useState } from "react";

type Breakpoint = {
    min?: string;
    max?: string;
};

export default function useBreakpoint({ min = "", max = "" }: Breakpoint) {
    const [match, setMatch] = useState(false);

    useEffect(() => {
        let query = "";
        if (min && max) {
            query = `(max-width: ${max}) and (min-width: ${min})`;
        } else if (min) {
            query = `(min-width: ${min})`;
        } else if (max) {
            query = `(max-width: ${max})`;
        }

        if (query) {
            const mediaQueryList = window.matchMedia(query);

            mediaQueryList.addEventListener("change", (event) => {
                setMatch(event.matches);
            });
        }
    });

    return match;
}
