import React from 'react';
import { Table, Container } from 'semantic-ui-react';
import moment from 'moment';
import { getVWSPrice, getGeometricMean } from './helpers/get-values';

const Trades = ({trades}) =>{
    const renderTradeRows = trades.map((trade, i) => { 
        const now = moment(Date.now()); 
        const diff = now.diff(trades.tradeTime, 'minutes');
        const filteredTrades = trades.filter(tra =>{ return tra.stockSymbol===trade.stockSymbol && diff<=15});
        const VWSPrice = getVWSPrice(filteredTrades);
        const geometricMean = getGeometricMean(trades);
       return (
            <Table.Row key={i}>
                    <Table.Cell>{moment(trade.tradeTime).format("MMMM Do YYYY, h:mm:ss")}</Table.Cell>
                    <Table.Cell>{trade.stockSymbol}</Table.Cell>
                    <Table.Cell>{trade.action}</Table.Cell>
                    <Table.Cell>{trade.stockPrice}</Table.Cell>
                    <Table.Cell>{trade.stockQuantity}</Table.Cell>
                    <Table.Cell>{trade.totalPrice}</Table.Cell>
                    <Table.Cell>{trade.DY}</Table.Cell>
                    <Table.Cell>{trade.PERatio}</Table.Cell>
                    <Table.Cell>{VWSPrice}</Table.Cell>
                    <Table.Cell>{geometricMean}</Table.Cell>
            </Table.Row>)}
         )
    return (
        <div>
            {(trades.length > 0) && (
            <Container>
                <h1>Trades Table</h1>
                <Table celled striped color="blue">
                    <Table.Header color="blue">
                        <Table.Row>
                            <Table.HeaderCell>Trade Date Time</Table.HeaderCell>
                            <Table.HeaderCell>Stock Symbol</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Quantity</Table.HeaderCell>
                            <Table.HeaderCell>Total Price</Table.HeaderCell>
                            <Table.HeaderCell>Dividend Yield</Table.HeaderCell>
                            <Table.HeaderCell>PE Ratio</Table.HeaderCell>
                            <Table.HeaderCell>Volume Weighted Stock Price</Table.HeaderCell>
                            <Table.HeaderCell>Geometric Mean</Table.HeaderCell>
                            
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {renderTradeRows}
                    </Table.Body>
                </Table>
            </Container>
            )}
        </div>
    )
}

export default Trades;
