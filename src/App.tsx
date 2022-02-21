import { ThemeProvider } from "@emotion/react";
import theme from "styles/theme";

import "./App.scss";
import NewGameMenu from "pages/NewGameMenu/NewGameMenu";
import Game from "pages/Game/Game";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <main className="main-section">
                <div className="current-page">
                    <Game />
                    {/* <NewGameMenu /> */}
                </div>
            </main>
        </ThemeProvider>
    );
}

export default App;
