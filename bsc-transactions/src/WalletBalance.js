import React, { useEffect, useState } from 'react';
import Moralis from 'moralis';
import BN from 'bignumber.js'; // Big Number library to handle large numbers precisely



function WalletBalances({ apiKey, address }) {
    const [balances, setBalances] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalances = async () => {
      try {
        const response = await Moralis.EvmApi.token.getWalletTokenBalances({
          chain: '0x1',
          address: address
        });
        setBalances(response.raw);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchBalances();
  }, [apiKey, address]);

  if (loading) {
    return <div>Loading...</div>;
  }
//console.log(balances)
const getBalanceWithDecimals = (balance, decimals) => {
    return new BN(balance).dividedBy(new BN(10).pow(decimals)).toString();
};
return (
    <div>
        {balances.map((balance, index) => (
            <div key={index}>
                <p>Token Name: {balance.name}</p>
                <p>Token Balance: {getBalanceWithDecimals(balance.balance, balance.decimals)}</p>
                <p>Possible Spam: {balance.possible_spam}</p>
                <p>Symbol: {balance.symbol}</p>
                <p>Logo: {balance.logo}</p>
                <p>Token address: {balance.token_address}</p>
                <p>Decimals: {balance.decimals}</p>
                <hr/>
            </div>
        ))}
    </div>
);

}

export default WalletBalances;
