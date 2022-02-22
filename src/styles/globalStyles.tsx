import { css } from "@emotion/react";
import theme from "./theme";

export default css`
    html,
    body {
        font-family: "Outfit", sans-serif;
        background-color: ${theme.colors.darkNavy};
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
`;
