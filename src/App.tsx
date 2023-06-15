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
    margin: 0;
    padding: 0;
    color: #293845;
  }
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 22px;
  }
  h3 {
    font-size: 18px;
  }
  h1, h2, h3 {
    margin: 0;
    line-height: 1em;
    display: block;
    
    word-break: break-all;
    cursor: default;
  }
  
  #root {
    
    min-height: 100vh;
    position: relative;
    @media screen and (max-width: 736px ) and (min-width: 736px ) {
      h1 {
        font-size: 22px;
      }
      h2 {
        font-size: 18px;
      }
      h3 {
        font-size: 16px;
      }
    }
    @media screen and (max-width: 680px) {
      h1 {
        font-size: 20px;
      }
      h2 {
        font-size: 16px;
      }
      h3 {
        font-size: 14px;
      }
    }
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 18px;
      }
      h2 {
        font-size: 14px;
      }
      h3 {
        font-size: 12px;
      }
    }
  }
`;
