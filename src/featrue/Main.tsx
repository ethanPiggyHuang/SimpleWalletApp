import styled from 'styled-components';
import { AccountInfo } from './AccountInfo';
import { Transactions } from './Transactions';
import { TokenHoldings } from './TokenHoldings';

export const Main: React.FC = () => {
  const address = '0x33b8287511ac7F003902e83D642Be4603afCd876';
  const transactionHashs = [
    '0x1eb6aab282d701d3d2eeb762bd426df625767e68ebf9c00b484905be1343304e',
    '0xf134054861dccf1f211e6fd92808475b2fb290489a4e41bc008260d8cc58b9f9',
  ];
  const tokenInfos = [
    {
      token: 'USDC',
      contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    },
    {
      token: 'USDT',
      contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
  ];

  return (
    <Wrapper>
      <AccountInfo address={address} />
      <Transactions transactionHashs={transactionHashs} />
      <TokenHoldings address={address} tokenInfos={tokenInfos} />
    </Wrapper>
  );
};

type WrapperProps = {};

const Wrapper = styled.div<WrapperProps>`
  margin: auto;
  width: 774px;
  padding: 5px 0 112px;
`;
