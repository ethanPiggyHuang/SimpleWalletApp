import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { TransactionInfo } from 'web3';
import web3Api from '../utils/web3';
import { shortenText } from '../utils/common';
import { Template } from '../components/Template';

interface Props {
  transactionHashs: string[];
}

export const Transactions: React.FC<Props> = ({ transactionHashs }) => {
  const [transactionInfos, setTransactionInfos] = useState<{
    [key: string]: TransactionInfo;
  }>({});

  useEffect(() => {
    const fetchBalance = async () => {
      const response = await web3Api.getTransactions(transactionHashs);
      setTransactionInfos(response);
    };
    fetchBalance();
  }, [transactionHashs]);

  const renderProps = {
    title: 'Transactions',
    datas: transactionHashs.map((transactionHash, index) => {
      return {
        name: shortenText(transactionHash),
        value:
          transactionInfos[index.toString()]?.blockNumber?.toString() ?? '',
      };
    }),
    subtitles: ['TX Hash', 'Block'],
    subDatas: transactionHashs.map((_, index) => {
      return [
        {
          name: 'from: ',
          value: transactionInfos[index.toString()]?.from ?? '',
        },
        {
          name: 'to: ',
          value: transactionInfos[index.toString()]?.to ?? '',
        },
      ];
    }),
  };

  return (
    <Template props={renderProps} />
    // <Wrapper>
    //   <SectionTitle>Transactions</SectionTitle>
    //   {transactionHashs.map((transactionHash, index) => (
    //     <div key={transactionHash}>
    //       <InfoLine>
    //         <span>TX Hash</span>
    //         <span>{shortenText(transactionHash)}</span>
    //       </InfoLine>
    //       <InfoLine>
    //         <span>Block</span>
    //         <span>
    //           {transactionInfos[index.toString()]?.blockNumber
    //             ? Number(transactionInfos[index.toString()]?.blockNumber)
    //             : ''}
    //         </span>
    //       </InfoLine>
    //       <InfoLine>
    //         <span>From</span>
    //         <span>{transactionInfos[index.toString()]?.from}</span>
    //       </InfoLine>
    //       <InfoLine>
    //         <span>To</span>
    //         <span>{transactionInfos[index.toString()]?.to}</span>
    //       </InfoLine>
    //     </div>
    //   ))}
    // </Wrapper>
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
