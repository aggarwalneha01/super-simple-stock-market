import React, {useState} from 'react'
import { Table, Input, Button, Label } from 'semantic-ui-react';

const StockRow =({stock, index}) => {
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [ priceError, setPriceError] = useState('');
    const [ quantityError, setQuantityError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!price){
            setPriceError("Please enter price");
        }
        else if(isNaN(price)){
            setPriceError("Please enter numeric value");
        }
        else{
            setPriceError('')
        }
        if(!quantity){
            setQuantityError("Please enter quantity");
        }
        else if(isNaN(quantity)){
            setQuantityError("Please enter numeric value");
        }
        else{
            setQuantityError('')
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
                <Table.Cell>Dividend</Table.Cell>
                <Table.Cell>PE</Table.Cell>
                <Table.Cell>GM</Table.Cell>
                <Table.Cell>VWS Price</Table.Cell>
                <Table.Cell>
                    <Input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} color="blue"/>
                    {quantityError &&<Label basic color='red' pointing> {quantityError}</Label>}
                </Table.Cell>
                <Table.Cell>
                <Button primary type="submit" onClick={handleSubmit} name="buy">Buy</Button>
                <Button primary type="submit" onClick={handleSubmit} name="sell">Sell</Button>
                </Table.Cell>
            </Table.Row>
    )
}

export default StockRow;
