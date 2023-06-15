import React, { useEffect, useState } from 'react';
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

  return <Template props={renderProps} />;
};
