


/*
Combination Sum

Given an array of distinct integers candidates and a target, 
return a list of all unique combinations of candidates where 
the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited
number of times. Two combinations are unique if the frequency 
of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that 
sum up to target is less than 150 combinations for the given input.


Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]


Strategy: Brute force
- ID all the possible subarrs within the candidates 
    - O(n^2): Nested loop:  outer loop loops thru nums in arr
        - inner: subsets that has been seen. subsets = [[candidates[0]]]
- Iterate thru the subsets and check the sum within the subarr. If === target, 
add subarr to res arr


*/

/*
Strategy: Recursive:
- Var: res []
- Rec: (sum, arr, idx)
    - base case: 
        - if sum === target, res.push(arr)
        - if sum > target, return; 
    - recursive action:
        - For loop that loops thru candidates.length 
            - updates sum based on sum + currNum 
            - updates arr, push currNum into arr 
            - HERE is the recursive where we 
            recurse(updatedSum, updatedArr, idx)

*/

var combinationSum = function(candidates, target) {
    let res = []; 
    
    recurseFinder(sum = 0, arr = [], idx = 0); 
    
    return res;
    
    function recurseFinder(sum, arr, idx) {
        // base 
        if(sum === target) res.push(arr); 
        if(sum > target) return; 
        
        // recursive action, call every 
        // possible subArr
        for(let i = idx; i < candidates.length; i++) {
            let updatedSum = sum + candidates[i]; 
            let updatedArr = [...arr, candidates[i]]; 
            
            recurseFinder(updatedSum, updatedArr, i);
        }
    }
} 


// Nov practice 30 mins 
var combinationSu = function(candidates, target) {
    let res = []; 
    
    recurse(sum = 0, arr = [], idx = 0); 
    
    return res; 
    
    function recurse(sum, arr, idx) {
        // base case 
        if(sum === target) res.push(arr); 
        if(sum > target) return; 
        
        // recursive action
        for(let i = idx; i < candidates.length; i++) {
            let updatedSum = sum + candidates[i];
            
            let updatedArr = [...arr, candidates[i]];
            
            recurse(updatedSum, updatedArr, i);
        }  
    } 
} 



// Correct and intuitive. Do again. 20 mins, looked
// at correct solution 
var combinationSu = function(candidates, target) {
    let res = [];
    
    function helper(sum, arr, idx) {
        // base cases
        if(sum > target) return; 
        if(sum === target) res.push(arr);
        
        // recursive action
        for(let i = idx; i < candidates.length; i++) {
            let updatedSum = sum + candidates[i];
            let updatedArr = [...arr, candidates[i]]
            
            helper(updatedSum, updatedArr, i);
        }
    }
            
    helper(0, [], 0);
            
    return res;
} 





// VERY wrong but I tried brute force. 30 mins. 
var combinationSu = function(candidates, target) {
    
    let subsets = [[candidates[0]]],
        res = [];
    
    
    for(let num of candidates) {
        for(let set of subsets) {
            subsets.push([...set, num]);   
        }
    }
    
    for(let arr of subsets) {
        let sum = 0;  // arr.reduce() => sums all the els within the arr and returns it
        let temp = arr; 
        
        while(arr.length > 0) {
            let ele = arr.pop();
            sum += ele; 
        }
        
        if(sum === target) {
            res.push(temp);
        }
    }
    
    return res;
};
