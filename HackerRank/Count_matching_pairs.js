/*
Given an array of ints, determine how many pairs of matching ints there are. 

Strategy:
Time: Must loop no matter what so best case time is O(n), try to make this worst case
Space:?

Option 1:
- Loop
- Create a hash that tracks # of times a number has been seen
- Add the even #s in hash values (loop?)
- % by 2 to get the number of pairs

Option 2: 
Another strat (maybe more efficient space/time): 
- Count pairs as we loop
- Keep track of unpaired #s in stacks
- Once paired, pop off from unpaired

Option 3:
- Sort the arr
- Loop, if the next number is the same as ele
- Increment count and skip the next num
*/

// Sample input: [10, 10, 1, 2, 1]
    // Answer: 2
// Complete the numberPairs function below.
function numberPairs(n, ar) {
    let pairs = 0;
    ar = ar.sort();

    for(let i =0; i < ar.length; i++) {
        if(ar[i] === ar[i+1]) {
            pairs += 1;
            i = i + 1;
        }
    }
    return pairs;
}
// Using sort is very slow though ^


// function numberPairsAttempt(n, ar) {
//     let pairs = 0;
//     let unpaired = new Set();
//     for(let i = 0; i < n; i++) {
//         // If selected ele is a match, increment pair and pop off
//         if(unpaired.has(ar[i])) {
//             pairs += 1
//             unpaired.delete(ar[i]);
//         }
//         unpaired.add(ar[i]);
//     }
//     return pairs;
// }
