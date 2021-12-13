import React from "react";
import './App.css';
import {  Header } from 'semantic-ui-react';
import stocksData from "./data/stocksData";
import Stocks from "./Stocks";

function App() {
  return (
    <div className="App">
     <Header size="large" textAlign='center' color="blue">
        <Header.Content content='Super Simple Stock Market' >
        </Header.Content>
      </Header>
      <Stocks stocks={stocksData}/>
    </div>
  );
}

export default App;
