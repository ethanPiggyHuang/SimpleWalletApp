import styled from 'styled-components';
import { AccountInfo } from './AccountInfo';
import { Transactions } from './Transactions';
import { TokenHoldings } from './TokenHoldings';

export const Main: React.FC = () => {
  return (
    <Wrapper>
      <AccountInfo />
      <Transactions />
      <TokenHoldings />
    </Wrapper>
  );
};

type WrapperProps = {};

const Wrapper = styled.div<WrapperProps>`
  margin: auto;
  width: 774px;
  border: 1px solid black;
`;
