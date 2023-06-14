import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Web3 from 'web3';

export const AccountInfo: React.FC = () => {
  const title = 'Account Info';
  const address = '0x33b8287511ac7F003902e83D642Be4603afCd876';
  const [ethBalance, setEthBalance] = useState('');
  const web3 = new Web3(
    `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`
  );

  useEffect(() => {
    async function getBalance() {
      web3.eth.getBalance(address).then((response) => {
        const balanceInEther = web3.utils.fromWei(response, 'ether');
        setEthBalance(balanceInEther);
      });
    }
    getBalance();
  }, []);

  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
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
