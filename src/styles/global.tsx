import { css } from "@emotion/react";

export default css`
    html,
    body {
        font-family: "Outfit", sans-serif;
        background-color: colors.$dark_navy;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
