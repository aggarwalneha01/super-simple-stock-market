import React, {useState} from "react";
import './App.css';
import {  Header } from 'semantic-ui-react';
import Stocks from "./Stocks";
import Trades from "./Trades"

const App = () => {
  const [trades, setTrades]=useState([]);

  const handleTrades = (trade) => {
    setTrades([
      ...trades, 
      trade
    ])
  };
  return (
    <div className="App">
     <Header size="large" textAlign='center' color="blue">
        <Header.Content content='Super Simple Stock Market' >
        </Header.Content>
      </Header>
      <Stocks  handleTrades={handleTrades}/>
      <Trades trades={trades}/>
    </div>
  );
}

export default App;
