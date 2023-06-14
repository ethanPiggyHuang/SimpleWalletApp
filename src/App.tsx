import { AccountInfo } from './featrue/AccountInfo';
import styled, { createGlobalStyle } from 'styled-components';
import { Transactions } from './featrue/Transactions';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <AccountInfo />
      <Transactions />
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
