import React from 'react';
import { Table } from 'semantic-ui-react'

const Stocks = ({stocks}) => {
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
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {stocks.map((item, i) => {
    return(<Table.Row>
        <Table.Cell>{item.symbol}</Table.Cell>
        <Table.Cell>{item.type}</Table.Cell>
        <Table.Cell>{item.lastDividend}</Table.Cell>
        <Table.Cell>{item.fixedDividend}</Table.Cell>
        <Table.Cell>{item.parValue}</Table.Cell>
      </Table.Row>
        )})}
    </Table.Body>
  </Table>
        </div>
    )
}

export default Stocks;
