
export const getDividendYield = (type, lastDividend, fixedDividend, price, parValue) => {
    if (type === "Common") {
            return (lastDividend / price).toFixed(2);
    } else if (type === "Preferred") {
            return (fixedDividend * parValue / price).toFixed(2);
    }
    return null;
};

export const getPERatio = (dividendYield, price) => {
        return (price / dividendYield).toFixed(2);
};

export const getVWSPrice = (trades) => {
    let VWSPriceDividend = 0;
    let VSWPriceDivisor = 0;
    for (let trade of trades) {
        VWSPriceDividend += parseInt(trade.stockPrice) * parseInt(trade.stockQuantity);
        VSWPriceDivisor += parseInt(trade.stockQuantity); 
    }
    return (VWSPriceDividend / VSWPriceDivisor).toFixed(2);
}

export const getGeometricMean = (trades) =>{
    let geometricMean = 1;
    for (let trade of trades){
        geometricMean *= trade.stockPrice;
    }
    return Math.pow(geometricMean, 1 / trades.length).toFixed(2); 
}
