import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Web3, { TransactionInfo } from 'web3';

export const Transactions: React.FC = () => {
  const title = 'Account Info';
  const transactionHashs =
    '0x1eb6aab282d701d3d2eeb762bd426df625767e68ebf9c00b484905be1343304e';
  const [transactionData, setTransactionData] =
    useState<TransactionInfo | null>(null);
  const web3 = new Web3(
    `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`
  );

  useEffect(() => {
    async function getData() {
      const response = await web3.eth.getTransaction(transactionHashs);

      console.log('response', response);
      console.log('blockNumber', response.blockNumber);
      console.log(response.blockNumber);
      let obj = response;
      setTransactionData(obj);
    }
    getData();
  }, []);

  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      <div>
        <InfoLine>
          <span>Transaction</span>
          <span>{transactionHashs}</span>
        </InfoLine>
        <InfoLine>
          <span>BlockNumber</span>
          <span>{transactionData && `${transactionData?.blockNumber}`}</span>
        </InfoLine>
        <InfoLine>
          <span>From</span>
          <span>{transactionData && `${transactionData?.from}`}</span>
        </InfoLine>
        <InfoLine>
          <span>To</span>
          <span>{transactionData && `${transactionData?.to}`}</span>
        </InfoLine>
      </div>
    </Wrapper>
  );
};

type WrapperProps = {};

const Wrapper = styled.div<WrapperProps>`
  margin: auto;
  width: 774px;
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
