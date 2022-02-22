const theme = {
    colors: {
        lightBlue: "hsl(178, 60%, 48%)",
        lightBlueHover: "hsl(178, 75%, 65%)",
        lightBlueDropShadow: "hsl(178, 78%, 31%)",
        lightYellow: "hsl(39, 88%, 58%)",
        lightYellowHover: "hsl(39, 100%, 69%)",
        lightYellowDropShadow: "hsl(39, 83%, 44%)",
        darkNavy: "hsl(202, 32%, 15%)",
        semiDarkNavy: "hsl(199, 35%, 19%)",
        semiDarkNavyDropShadow: "hsl(201, 45%, 11%)",
        silver: "hsl(198, 23%, 72%)",
        silverHover: "hsl(197, 33%, 89%)",
        silverDropShadow: "hsl(199, 17%, 51%)",
    },
    font: {
        mediumWeight: 500,
        boldWeight: 700,
        large: "2.5rem",
        medium: "1.5rem",
        small: "1.25rem",
        extraSmall: "1rem",
        body: "0.875rem",
    },
};

export type AppTheme = typeof theme;

export default theme;
