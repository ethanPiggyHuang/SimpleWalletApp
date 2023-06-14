import styled, { createGlobalStyle } from 'styled-components';
import { Main } from './featrue/Main';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Main />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
  }
  
  #root {
    min-height: 100vh;
    position: relative;
    @media screen and (max-width: 991px) {
    }
  }
`;
