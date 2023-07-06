# Ethereum Wallet Balances Viewer

This project is a React component that fetches and displays the token balances for a specified Ethereum address.

## Component: WalletBalances

The `WalletBalances` component accepts two properties:

- `apiKey`: This should be your Moralis API key. 
- `address`: This is the Ethereum address for which you want to fetch and display the token balances.

This component uses the Moralis EvmApi to fetch the token balances for the specified Ethereum address. It then stores this information in the state using the `useState` React Hook.

The component also uses the `useEffect` React Hook to fetch the token balances when the component mounts, and whenever the `apiKey` or `address` properties change.

While the data is being fetched, the component displays a loading message. Once the data has been fetched, the component maps over the `balances` state variable and displays the following information for each token:

- Token Name
- Token Balance
- Whether the token is possibly spam
- Token Symbol
- Token Logo
- Token contract address
- Number of token decimals

To properly display the token balance, the component takes into account the number of decimals that each token has. It uses the `bignumber.js` library to handle large numbers accurately.

The `getBalanceWithDecimals` function is used to convert the balance (which is initially in the smallest unit of the token, such as wei for ETH) into a more readable format that takes into account the token's decimals.

This function uses the `bignumber.js` library to create a new BigNumber instance from the balance, then divides it by 10 to the power of the number of decimals.

## Usage

Here's an example of how you can use the `WalletBalances` component:

```jsx
<WalletBalances apiKey="your-moralis-api-key" address="0xYourEthereumAddress" />
```

Please replace "your-moralis-api-key" with your actual Moralis API key, and "0xYourEthereumAddress" with the Ethereum address that you want to check.

## Dependencies
This component relies on the following npm packages:

react: "^17.0.1",
moralis: "^0.0.15",
bignumber.js: "^9.0.0"