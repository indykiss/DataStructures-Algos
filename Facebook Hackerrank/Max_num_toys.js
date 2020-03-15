/*
A parent wants to buy toys for their kids. They have a budget, but want to buy the maximum number of toys possible.

Given an array of toy prices and the parent's budget, return how many toys the parent can buy. 
*/

function maximumToys(prices, k) {
    let toys = 0;
    const sortedArr = prices.sort((a,b) => a-b);
    let amountLeft = k; 
     
    for(let i = 0; i < sortedArr.length; i++) {
        if(sortedArr[i] <= amountLeft) {
            toys++;
            amountLeft = amountLeft - sortedArr[i];
        }
    }
    return toys;
}
