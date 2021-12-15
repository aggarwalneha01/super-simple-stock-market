
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

export const getDateTime = () => {
    var date = new Date();
    var dateTime = date.toLocaleString();
    return dateTime;
}
