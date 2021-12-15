import React from 'react';
import { Table } from 'semantic-ui-react';
import stocksData from "./data/stocksData";
import StockRow from './StockRow';

const Stocks = ({handleTrades}) => {
    const renderRows = stocksData.map((stock, index)=>{
        return <StockRow key={index} stock={stock} handleTrades={handleTrades}/>
    })
    return (
        <div>
            <h1>Stocks Table</h1>
            <Table celled striped color="blue">
                <Table.Header color="blue">
                    <Table.Row>
                        <Table.HeaderCell>Stock Symbol</Table.HeaderCell>
                        <Table.HeaderCell>Type</Table.HeaderCell>
                        <Table.HeaderCell>Last Dividend</Table.HeaderCell>
                        <Table.HeaderCell>Fixed Dividend</Table.HeaderCell>
                        <Table.HeaderCell>Par Value</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>Dividend Yield</Table.HeaderCell>
                        <Table.HeaderCell>P/E Ratio</Table.HeaderCell>
                        <Table.HeaderCell>Geometric Mean</Table.HeaderCell>
                        <Table.HeaderCell>Volume Weighted Stock Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                        <Table.HeaderCell>Buy/Sell</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {renderRows}
                </Table.Body>
  </Table>
        </div>
    )
}

export default Stocks;
