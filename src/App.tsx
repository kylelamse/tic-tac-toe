import { ThemeProvider, Global } from "@emotion/react";
import theme from "styles/theme";
import globalStyles from "styles/globalStyles";
import NewGameMenu from "pages/NewGameMenu/NewGameMenu";
import Game from "pages/Game/Game";
import styled from "@emotion/styled";
import { RecoilRoot, useRecoilValue } from "recoil";
import Show from "components/Show";
import page from "state/atoms/page";
import CurrentPage from "pages/CurrentPage";

const Container = styled.div`
    max-width: ${({ theme }) => theme.content.standard};
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        max-width: ${(props) => props.theme.content.mobile};
    }
`;

function App() {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <main>
                    <Global styles={globalStyles} />
                    <Container>
                        <CurrentPage />
                    </Container>
                </main>
            </ThemeProvider>
        </RecoilRoot>
    );
}

export default App;
