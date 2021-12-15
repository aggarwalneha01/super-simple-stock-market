import React, {useState} from 'react'
import { Table, Input, Button, Label } from 'semantic-ui-react';
import { getDividendYield, getPERatio, getDateTime } from './helpers/get-values';

const StockRow =({stock, index, handleTrades}) => {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [priceError, setPriceError] = useState('');
    const [quantityError, setQuantityError] = useState('');
    const [dividendYield, setDividendYield] = useState('');
    const [PERatio, setPERatio] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!price || isNaN(price) ||!quantity ||isNaN(quantity)){
            if(!price || isNaN(price)){
                setPriceError("Please enter numeric price");
            }
            else{
                setQuantityError("Please enter numeric value");
            }
        }
        else{
            const stockSymbol = stock.symbol
            const stockPrice = price
            const stockQuantity = quantity
            const action = e.target.name
            const totalPrice = stockPrice * stockQuantity
            const tradeTime = getDateTime()

            const newTrade={stockSymbol,stockPrice, stockQuantity, action, totalPrice, tradeTime };
            handleTrades(newTrade);
            const DY = getDividendYield(stock.type, stock.lastDividend, stock.fixedDividend, price, stock.parValue)
            setDividendYield(DY);
            setPERatio(getPERatio(DY, price))
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
                <Table.Cell>{dividendYield}</Table.Cell>
                <Table.Cell>{PERatio}</Table.Cell>
                <Table.Cell>GM</Table.Cell>
                <Table.Cell>VWS Price</Table.Cell>
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
