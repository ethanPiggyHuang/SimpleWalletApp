import React, { useEffect, useState } from 'react';
import web3Api from '../utils/web3';
import { Template } from '../components/Template';

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

  const renderProps = {
    title: 'Token Holdings',
    datas: tokenInfos.map((tokenInfo, index) => {
      return {
        name: `${tokenInfo.token} Balance`,
        value: `${balances[index] ?? ''} ${tokenInfo.token}`,
      };
    }),
  };

  return <Template props={renderProps} />;
};
