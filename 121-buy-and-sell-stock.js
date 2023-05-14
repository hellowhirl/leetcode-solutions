// // 121. Best Time to Buy and Sell Stock
// function maxProfit(prices) {
//     var maxSell = 0;
//     var minBuyPrice = prices[0];
//     for (var i = 0; i < prices.length; i++) {
//         minBuyPrice = prices[i] < minBuyPrice ? prices[i] : minBuyPrice;
//         var diff = prices[i] - minBuyPrice;
//         maxSell = diff > maxSell ? diff : maxSell;
//     }
//     return maxSell;
// }
// ;
