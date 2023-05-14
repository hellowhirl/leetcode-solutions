// 121. Best Time to Buy and Sell Stock

function maxProfit(prices: number[]): number {
    let maxSell = 0
    let minBuyPrice = prices[0]

    for (let i = 0; i < prices.length; i++) {
        minBuyPrice = prices[i] < minBuyPrice ? prices[i] : minBuyPrice
        const diff = prices[i] - minBuyPrice
        maxSell = diff > maxSell ? diff : maxSell
    }

    return maxSell
};

