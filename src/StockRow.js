import React, {useState} from 'react'
import { Table, Input, Button, Label } from 'semantic-ui-react';
import { getDividendYield, getPERatio } from './helpers/get-values';
import moment from 'moment';

const StockRow =({stock, index, handleTrades}) => {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [priceError, setPriceError] = useState('');
    const [quantityError, setQuantityError] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!price || isNaN(price) ||!quantity ||isNaN(quantity)){
            if(!price || isNaN(price)){
                setPriceError("Please enter numeric price");
            }
            else{
                setQuantityError("Please enter numeric quantity");
            }
        }
        else{
            const stockSymbol = stock.symbol
            const stockPrice = price
            const stockQuantity = quantity
            const action = e.target.name
            const totalPrice = stockPrice * stockQuantity
            const tradeTime = moment(Date.now());  
            const DY = getDividendYield(stock.type, stock.lastDividend, stock.fixedDividend, price, stock.parValue)
            const PERatio = getPERatio(DY, price);

            const newTrade={stockSymbol,stockPrice, stockQuantity, action, totalPrice, tradeTime, DY, PERatio};
            handleTrades(newTrade);
            
        }
    }
    return (
            <Table.Row key={index}>
                <Table.Cell>{stock.symbol}</Table.Cell>
                <Table.Cell>{stock.type}</Table.Cell>
                <Table.Cell>{stock.lastDividend}</Table.Cell>
                <Table.Cell>{stock.fixedDividend}</Table.Cell>
                <Table.Cell>{stock.parValue}</Table.Cell>
                <Table.Cell> 
                    <Input type="text" value={price} onChange={(e) => setPrice(e.target.value)} color="blue"/>
                   {priceError &&<Label basic color='red' pointing> {priceError}</Label>}
                </Table.Cell>
                <Table.Cell>
                    <Input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} color="blue"/>
                    {quantityError &&<Label basic color='red' pointing> {quantityError}</Label>}
                </Table.Cell>
                <Table.Cell>
                <Button primary type="submit" onClick={handleSubmit} name="BUY">Buy</Button>
                <Button primary type="submit" onClick={handleSubmit} name="SELL">Sell</Button>
                </Table.Cell>
            </Table.Row>
    )
}

export default StockRow;
