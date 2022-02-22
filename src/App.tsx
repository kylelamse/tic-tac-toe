import { ThemeProvider, Global } from "@emotion/react";
import theme from "styles/theme";
import globalStyles from "styles/globalStyles";
import NewGameMenu from "pages/NewGameMenu/NewGameMenu";
import Game from "pages/Game/Game";
import styled from "@emotion/styled";

const CurrentPage = styled.div`
    max-width: ${({ theme }) => theme.content.standard};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: ${(props) => props.theme.content.mobile};
    }
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <div className="current-page">
                    <CurrentPage>
                        <Global styles={globalStyles} />
                        <Game />
                        {/* <NewGameMenu /> */}
                    </CurrentPage>
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App;
