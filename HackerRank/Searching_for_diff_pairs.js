/*
Searching for difference arrays 

Strat:
- Sort the array
- Use two pointers to track num1 and num2 as we loop
- Make a var to track diff between num1 and num2 
    - If diff = target, increment count and check next num2
    - If diff is greater, new num1
    - If diff is less, new num2

*/

function pairs(k, arr) {

    let sortedArr = arr.sort((a,b) => a-b)
    let count = 0;
    let num1 = 0;
    let num2 = 1;

    while(num2 < sortedArr.length) {
        let diff = sortedArr[num2] - sortedArr[num1];
        if(diff === k) {
            count++;
            num2++;
        } else if(diff > k) {
            num1++;
        } else if(diff < k) {
            num2++;
        }
    }

    return count;

}
