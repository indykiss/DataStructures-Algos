

/*
Shuffle the array 
Given the array nums consisting of 2n elements
in the form [x1,x2,...,xn,y1,y2,...,yn].

Return the array in the form [x1,y1,x2,y2,...,xn,yn].

[2,5,1,3,4,7], n = 3
=> [2,3,5,4,1,7] 

Strategy: O(n) time / space
- Two pointers, 1 at 0 and 1 at n, 
increment both over by 1 
    - Add left point num to res arr
    - Add right point num to res arr 
*/

var shuffle = function(nums, n) {
    let left = 0, 
        right = n,
        i = 0,
        res = [];
    
    while(i < n) {
        res.push(nums[left], nums[right]); 
        
        left++; 
        right++; 
        i++;
    }
    return res; 
};


