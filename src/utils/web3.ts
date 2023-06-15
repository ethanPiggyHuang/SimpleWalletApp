import Web3, { TransactionInfo } from 'web3';
import { contractABI } from './contractABI';
import { addDecimalPoint } from './common';

const web3 = new Web3(
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_APIKEY}`
);

const web3Api = {
  async getBalance(address: string) {
    const balanceInWei = await web3.eth.getBalance(address);
    return web3.utils.fromWei(balanceInWei, 'ether');
  },
  async getTransactions(transactionHashs: string[]) {
    let returnDatas = {} as { [index: string]: TransactionInfo };
    const promises = transactionHashs.map((transactionHash) =>
      web3.eth.getTransaction(transactionHash)
    );
    await Promise.allSettled(promises).then((results) => {
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          returnDatas[index.toString()] = result.value;
        }
      });
    });
    return returnDatas;
  },
  async getTokenHoldings(address: string, contractAddresses: string[]) {
    let returnDatas: string[] = [];
    const promises = contractAddresses.map(async (contractAddress) => {
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const balanceRaw = (await contract.methods
        // @ts-ignore
        .balanceOf(address)
        .call()) as bigint;
      const decimal = (await contract.methods.decimals().call()) as bigint;
      const balance = balanceRaw ? addDecimalPoint(balanceRaw, decimal) : '';
      return balance;
    });
    await Promise.allSettled(promises).then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          returnDatas.push(result.value);
        }
      });
    });
    return returnDatas;
  },
};

export default web3Api;
