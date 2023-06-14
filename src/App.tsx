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
    font-family: 'Familjen Grotesk', sans-serif;
    font-weight: 400;
    color: #293845;
    margin: 0;
    padding: 0;
  }
  h1 {
    margin:0;
    font-size: 26px;
    line-height: 1em;
    display: block;
  }
  h2 {
    margin:0;
    font-size: 22px;
    line-height: 1em;
    display: block;
  }
  h3 {
    margin:0;
    font-size: 18px;
    line-height: 1em;
    display: block;
  }
  
  #root {
    
    min-height: 100vh;
    position: relative;
    @media screen and (max-width: 991px) {
    }
  }
`;
