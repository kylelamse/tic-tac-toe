import "./App.scss";
import Typography from "components/Typography";

function App() {
    return (
        <main>
            <section className="main-section">
                <Typography variant="large">Hello World!</Typography>
                <Typography variant="medium">Hello World!</Typography>
                <Typography variant="small">Hello World!</Typography>
                <Typography variant="extrasmall">Hello World!</Typography>
                <Typography variant="body">Hello World!</Typography>
            </section>
        </main>
    );
}

export default App;
