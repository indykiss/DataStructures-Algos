


/*
Fruit Into Baskets

In a row of trees, the i-th tree produces fruit with type tree[i].

You start at any tree of your choice, then repeatedly perform the following steps:

Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

What is the total amount of fruit you can collect with this procedure?

 

Example 1:

Input: [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].


Basically: exactly Longest Substring with At Most K Distinct Characters
BUT INSTEAD OF K WE HAVE 2 BASKETS 

*/


/*
Strat: 
- Find the longest subarr within the tree that only uses 
2 nums. Return this length
- Var: maxLength, start, for loop w/ end, fruitFreq hash, 
uniqFruitCounter

1. Iterate and add fruit into hash if it's not there already.
If we add a new fruit, increment counter 
2. If counter > 2, ID the hash[tree[start]] and decrement 
count of occurences in hash. Once the hash is at zero, 
delete the key and decrement uniqFruit counter. 
Either way, increment start index. 
3. Update maxlength with math.max(maxlength, end-start+1)
4. Return maxlength
*/


// [1,2,3,2] => 3
var totalFruit = function(tree) {
    let maxLength = 0,
        start = 0,
        fruitFreq = {},
        hashKeysCount = 0;
    
    for(let end = 0; end < tree.length; end++) {
        // add fruit to hash + increment count of fruits in hash
        let rightChar = tree[end];       
        
        if(fruitFreq[rightChar]) {
            fruitFreq[rightChar]++;
        } else {
            fruitFreq[rightChar] = 1;
            hashKeysCount++;
        }         
                
        // remove 1st fruit from hash & reduce # of uniqFruits
        if(hashKeysCount > 2) {
            let leftChar = tree[start];
            fruitFreq[leftChar]--;
            
            if(fruitFreq[leftChar] === 0) {
                delete fruitFreq[leftChar];          
                hashKeysCount--;
            }
            start++;
        }   
        maxLength = Math.max(maxLength, end - start + 1); // prev max or update w/ curr window
    }
    return maxLength;
};

