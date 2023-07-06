import React, { useEffect, useState } from 'react';
import Moralis from 'moralis';


function TransactionList({ apiKey, address }) {
  const [tokenTransfers, setTokenTransfers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await Moralis.EvmApi.token.getWalletTokenTransfers({
          chain: '0x1',
          address: address
        });
        setTokenTransfers(response.result);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [apiKey, address]);

  if (loading) {
    return <div>Loading...</div>;
  }
//console.log(tokenTransfers)
return (
  <div className="App">
    {tokenTransfers.map((tx, index) => (
      <div key={index}>
        {tx._data.tokenName && <p>Token Name: {tx._data.tokenName}</p>}
        {tx._data.valueDecimal && <p>Value: {tx._data.valueDecimal}</p>}
        {tx._data.chain._chainlistData.name && <p>Chain: {tx._data.chain._chainlistData.name}</p>}
        {tx.transactionHash && <p>Transaction Hash: {tx.transactionHash}</p>}
        {tx.tokenSymbol && <p>Token Symbol: {tx.tokenSymbol}</p>}
        {tx._data.toAddressLabel && <p>Destination adress Label: {tx._data.toAddressLabel}</p>}
        {tx.fromAddress && <p>From: {tx.fromAddress._value}</p>}
        {tx.toAddress && <p>To: {tx.toAddress._value}</p>}
        {tx.possibleSpam && <p>Possible Spam: {tx.possibleSpam.toString()}</p>}
        {tx.blockTimestamp && <p>BlockTimestamp: {tx.blockTimestamp.toString()}</p>}
        {tx.valueDecimal && <p>Value: {tx.valueDecimal}</p>}
        {tx._data.tokenDecimals && <p>Token Decimals: {tx._data.tokenDecimals}</p>}
        {tx._data.tokenLogo && <p>Token Logo: {tx._data.tokenLogo}</p>}
        {tx._data.tokenSymbol && <p>Token Symbol: {tx._data.tokenSymbol}</p>}
        {tx._data.transactionIndex && <p>transactionIndex: {tx._data.transactionIndex}</p>}
        <hr />
      </div>
    ))}
  </div>
);

}

export default TransactionList;
