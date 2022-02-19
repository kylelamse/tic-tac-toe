import "./App.scss";
import NewGameMenu from "pages/NewGameMenu/NewGameMenu";
import Game from "pages/Game/Game";

function App() {
    return (
        <main className="main-section">
            <div className="current-page">
                <Game />
                {/* <NewGameMenu /> */}
            </div>
        </main>
    );
}

export default App;
