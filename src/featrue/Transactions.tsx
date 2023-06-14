import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import Web3, { TransactionInfo } from 'web3';

export const Transactions: React.FC = () => {
  const title = 'Transactions';
  const transactionHashs = [
    '0x1eb6aab282d701d3d2eeb762bd426df625767e68ebf9c00b484905be1343304e',
    '0xf134054861dccf1f211e6fd92808475b2fb290489a4e41bc008260d8cc58b9f9',
  ];
  const web3 = new Web3(
    `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`
  );
  const [data, setData] = useState<{ [key: string]: TransactionInfo }>({});

  useEffect(() => {
    async function getData() {
      const promise1 = web3.eth.getTransaction(transactionHashs[0]);
      const promise2 = web3.eth.getTransaction(transactionHashs[1]);

      Promise.allSettled([promise1, promise2]).then((results) => {
        results.forEach((result, index) => {
          console.log(index, result.status);
          if (result.status === 'fulfilled') {
            const object = {} as { [index: string]: TransactionInfo };
            object[`${index}`] = result.value;
            setData((prev) => {
              return { ...prev, ...object };
            });
          }
        });
      });
    }
    getData();
  }, []);

  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      {transactionHashs.map((transactionHash, index) => (
        <div key={transactionHash}>
          <InfoLine>
            <span>TX Hash</span>
            <span>{transactionHash}</span>
          </InfoLine>
          <InfoLine>
            <span>Block</span>
            <span>
              {data[index.toString()]?.blockNumber
                ? Number(data[index.toString()]?.blockNumber)
                : ''}
            </span>
          </InfoLine>
          <InfoLine>
            <span>From</span>
            <span>{data[index.toString()]?.from}</span>
          </InfoLine>
          <InfoLine>
            <span>To</span>
            <span>{data[index.toString()]?.to}</span>
          </InfoLine>
        </div>
      ))}
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
