import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Moralis from 'moralis';
const root = document.getElementById('root');

//const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImJmMjNlYjY3LTQ0OTgtNDMwZC1iYTdlLTBiMTNkYWQ4ZDcxMCIsIm9yZ0lkIjoiMzM3MjA2IiwidXNlcklkIjoiMzQ2Njg0IiwidHlwZUlkIjoiYmE5YTQzZTgtMTMxYS00YzQzLWJhZjktZDZiMWI2ZTVlMTA5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODUwMDMxOTAsImV4cCI6NDg0MDc2MzE5MH0.daE_O0fd4329Zhkr2yjeLPb50sWOG9tDJNnQbW9z85c";  // Replace with your actual API key
Moralis.start({
  apiKey:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImJmMjNlYjY3LTQ0OTgtNDMwZC1iYTdlLTBiMTNkYWQ4ZDcxMCIsIm9yZ0lkIjoiMzM3MjA2IiwidXNlcklkIjoiMzQ2Njg0IiwidHlwZUlkIjoiYmE5YTQzZTgtMTMxYS00YzQzLWJhZjktZDZiMWI2ZTVlMTA5IiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE2ODUwMDMxOTAsImV4cCI6NDg0MDc2MzE5MH0.daE_O0fd4329Zhkr2yjeLPb50sWOG9tDJNnQbW9z85c"
});
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
