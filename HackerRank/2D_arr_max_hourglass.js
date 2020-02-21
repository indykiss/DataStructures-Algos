/* 
2D Array- Maximum hourglass

Strategy:
- Loop through length of an hourglass (3)
- Add the values in an hrglass to get sum
    - Do this by hand to get a good grasp on what to do 
- Track sums in an arr
- Return highest num 

Input.
2D arr: 
1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0      => Hourglass sum is 7 
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass to be the 1s above. 
There are 16 hourglasses in arr. 
An hour glass sum is the sum of the values within an hourglass. 

Calculate the hourglass sum for every hourglass and print the max sum. 
*/

function hourglassSum(arr) {
    let sums = [];
    for(let row = 0; row <= 3; row++) {
        for(let col = 0; col <= 3; col++) {
            let sum = 0;
            sum = arr[row][col] + arr[row][col+1] + arr[row][col+2] 
                + arr[row+1][col+1] 
                + arr[row+2][col] + arr[row+2][col+1] + arr[row+2][col+2]
            sums.push(sum);
        }
    }
    return Math.max(...sums)
}
