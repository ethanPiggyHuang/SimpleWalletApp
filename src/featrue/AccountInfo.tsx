import React, { useEffect, useRef, useState } from 'react';
import web3Api from '../utils/web3';
import { shortenText } from '../utils/common';
import { Template } from '../components/Template';

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

  const renderProps = {
    title: 'Account Info',
    datas: [
      {
        name: 'Account Address',
        value: shortenText(address),
        expandedValue: address,
      },
      { name: 'ETH Balance', value: ethBalance, unit: ' ETH' },
    ],
  };

  return <Template props={renderProps} />;
};
