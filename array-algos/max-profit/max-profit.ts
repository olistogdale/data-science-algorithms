/*
* Problem: Max Profit
* Description: Given a time-dependent array of prices, choose a price to buy at and a price in the future to sell that maximises your profit.
* Approach: Sliding window with running margin variable
* Best-case Time: O(n)
* Worst-case Time: O(n)
* Space: O(1) 
*/

function maxProfit(prices: number[]): number {
  let margin = 0;
  let low = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - low > margin) {
      margin = prices[i] - low;
    } else if (prices[i] < low) {
      low = prices[i];
    }
  }

  return margin;
};