import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Web3 from 'web3';
import { contractABI } from '../utils/contractABI';

export const TokenHoldings: React.FC = () => {
  const title = 'Token Holdings';
  const address = '0x33b8287511ac7F003902e83D642Be4603afCd876';
  const usdcContractAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
  const usdtContractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
  const [balances, setBalances] = useState<string[]>([]);
  const web3 = new Web3(
    `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`
  );

  useEffect(() => {
    async function getData() {
      const usdcContract = new web3.eth.Contract(
        contractABI,
        usdcContractAddress
      );
      const usdtContract = new web3.eth.Contract(
        contractABI,
        usdtContractAddress
      );

      // @ts-ignore
      const usdcBalance = await usdcContract.methods.balanceOf(address).call();
      // @ts-ignore
      const usdtBalance = await usdtContract.methods.balanceOf(address).call();
      const contractDecimals = await usdcContract.methods.decimals().call();

      const usdcBalanceString = usdcBalance?.toString();
      if (usdcBalanceString) {
        const balanceArray = Array.from(usdcBalanceString);
        balanceArray.splice(
          balanceArray.length - Number(contractDecimals),
          0,
          '.'
        );
        const usdcBalanceDecimaled = balanceArray.join('');
        setBalances((prev) => [...prev, usdcBalanceDecimaled]);
      }

      const usdtBalanceString = usdtBalance?.toString();
      if (usdtBalanceString) {
        const balanceArray = Array.from(usdtBalanceString);
        balanceArray.splice(
          balanceArray.length - Number(contractDecimals),
          0,
          '.'
        );
        const usdtBalanceDecimaled = balanceArray.join('');
        setBalances((prev) => [...prev, usdtBalanceDecimaled]);
      }
    }
    getData();
  }, []);

  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      <div>
        <InfoLine>
          <span>USDC Balance</span>
          <span>{balances.length !== 0 && `${balances[0]} USDC`}</span>
        </InfoLine>
      </div>
      <div>
        <InfoLine>
          <span>USDT Balance</span>
          <span>{balances.length !== 0 && `${balances[1]} USDT`}</span>
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
