import { ThemeProvider, Global } from "@emotion/react";
import theme from "styles/theme";
import globalStyles from "styles/globalStyles";
import styled from "@emotion/styled";
import { RecoilRoot } from "recoil";
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
