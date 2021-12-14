import React from "react";
import './App.css';
import {  Header } from 'semantic-ui-react';
import Stocks from "./Stocks";

const App = () => {
  return (
    <div className="App">
     <Header size="large" textAlign='center' color="blue">
        <Header.Content content='Super Simple Stock Market' >
        </Header.Content>
      </Header>
      <Stocks />
    </div>
  );
}

export default App;
