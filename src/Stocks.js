import React from 'react';
import { Table } from 'semantic-ui-react';
import stocksData from "./data/stocksData";
import StockRow from './StockRow';

const Stocks = () => {
    const renderRows = stocksData.map((stock, index)=>{
        return <StockRow key={index} stock={stock}/>
    })
    return (
        <div>
            <h1>Stocks Table</h1>
            <Table celled>
                <Table.Header>
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
                    {/* {stocksData.map((item, i) => {
                    return(<Table.Row key={i}>
                        <Table.Cell>{item.symbol}</Table.Cell>
                        <Table.Cell>{item.type}</Table.Cell>
                        <Table.Cell>{item.lastDividend}</Table.Cell>
                        <Table.Cell>{item.fixedDividend}</Table.Cell>
                        <Table.Cell>{item.parValue}</Table.Cell>
                        <Table.Cell>----</Table.Cell>
                        <Table.Cell>----</Table.Cell>
                        <Table.Cell>----</Table.Cell>
                        <Table.Cell>----</Table.Cell>
                        <Table.Cell>----</Table.Cell>
                        <Table.Cell>---</Table.Cell>
                        <Table.Cell>----</Table.Cell>
                    </Table.Row>
                    )})} */}
                </Table.Body>
  </Table>
        </div>
    )
}

export default Stocks;
