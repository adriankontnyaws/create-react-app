import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';

import logo from './logo.svg';
import './App.css';

function App() {

  const [coins, updateCoins] = useState([]);

  async function callApi() {
    try {
      const coinsData = await API.get('REST', '/coins')
      console.log(coinsData);
      updateCoins(coinsData.results)
    } catch (error) {
      console.log('error: ', error);
    }
  }

  useEffect(() => {
    callApi();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {
          coins.map(o => <div>{o}</div>)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test React 010
        </a>
      </header>
    </div>
  );
}

export default App;
