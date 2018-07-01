/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let sum = 0
    let len = prices.length
    for (let i = 0; i < len - 1; i++) {
        if (prices[i + 1] - prices[i] > 0) {
            sum += prices[i + 1] - prices[i]
        }
    }
    return sum
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]))