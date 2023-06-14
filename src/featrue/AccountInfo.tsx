import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import web3Api from '../utils/web3';

interface Props {
  address: string;
}

export const AccountInfo: React.FC<Props> = ({ address }) => {
  const [ethBalance, setEthBalance] = useState('');

  useEffect(() => {
    async function fetchBalance() {
      const response = await web3Api.getBalance(address);
      setEthBalance(response);
    }
    fetchBalance();
  }, [address]);

  return (
    <Wrapper>
      <SectionTitle>Account Info</SectionTitle>
      <div>
        <InfoLine>
          <span>Account Address</span>
          <span>{address}</span>
        </InfoLine>
        <InfoLine>
          <span>ETH Balance</span>
          <span>{`${ethBalance} ETH`}</span>
        </InfoLine>
      </div>
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
