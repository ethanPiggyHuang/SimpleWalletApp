import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import web3Api from '../utils/web3';

interface Props {
  address: string;
  tokenInfos: { token: string; contractAddress: string }[];
}

export const TokenHoldings: React.FC<Props> = ({ address, tokenInfos }) => {
  const [balances, setBalances] = useState<string[]>([]);

  useEffect(() => {
    const fetchTokenHoldings = async () => {
      const contractAddresses = tokenInfos.map(
        (tokenInfo) => tokenInfo.contractAddress
      );
      const tokenBalances = await web3Api.getTokenHoldings(
        address,
        contractAddresses
      );
      setBalances(tokenBalances);
    };
    fetchTokenHoldings();
  }, [address, tokenInfos]);

  return (
    <Wrapper>
      <SectionTitle>Token Holdings</SectionTitle>
      {tokenInfos.map((tokenInfo, index) => (
        <div key={tokenInfo.token}>
          <InfoLine>
            <span>{`${tokenInfo.token} Balance`}</span>
            <span>
              {balances[index] && `${balances[index]} ${tokenInfo.token}`}
            </span>
          </InfoLine>
        </div>
      ))}
    </Wrapper>
  );
};

type WrapperProps = {};

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  border: 1px solid black;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  text-align: left;
`;

const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
