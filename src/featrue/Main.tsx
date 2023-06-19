import styled from 'styled-components';
import { AccountInfo } from './AccountInfo';
import { Transactions } from './Transactions';
import { TokenHoldings } from './TokenHoldings';

export const Main: React.FC = () => {
  const address = process.env.REACT_APP_ETHEREUM_ADDRESS ?? '';
  const transactionHashs = [
    process.env.REACT_APP_TRANSACTION_HASH_1 ?? '',
    process.env.REACT_APP_TRANSACTION_HASH_2 ?? '',
  ];
  const tokenInfos = [
    {
      token: 'USDC',
      contractAddress: process.env.REACT_APP_USDC_CONTRACT_ADDRESS ?? '',
    },
    {
      token: 'USDT',
      contractAddress: process.env.REACT_APP_USDT_CONTRACT_ADDRESS ?? '',
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

const Wrapper = styled.div`
  margin: auto;
  width: 774px;
  padding: 5px 0 112px;
  @media screen and (max-width: 874px) and (min-width: 500px) {
    width: 100vw;
    padding: 5px 50px 112px;
  }
  @media screen and (max-width: 500px) {
    width: 100vw;
    padding: 5px 20px 112px;
  }
`;
