
export const getDividendYield = (type, lastDividend, fixedDividend, price, parValue) => {
    if (type === "Common") {
            return lastDividend / price;
    } else if (type === "Preferred") {
            return fixedDividend * parValue / price;
    }
    return null;
};

export const getPERatio = (dividendYield, price) => {
        return price / dividendYield;
};

export const getVWSPrice = (trades) => {
    let VWSPriceDividend = 0;
    let VSWPriceDivisor = 0;
    for (let trade of trades) {
        VWSPriceDividend += parseInt(trade.stockPrice) * parseInt(trade.stockQuantity);
        VSWPriceDivisor += parseInt(trade.stockQuantity); 
    }
    return VWSPriceDividend / VSWPriceDivisor;
}
