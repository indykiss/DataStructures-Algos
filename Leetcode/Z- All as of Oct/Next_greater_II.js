
/*
Next Greater Element II

Given a circular array (the next element of the 
    last element is the first element of the array),
     print the Next Greater Number for every element.
      The Next Greater Number of a number x is the 
      first greater number to its traversing-order
       next in the array, which means you could search
        circularly to find its next greater number. If 
        it doesn't exist, output -1 for this number.



*/

var nextGreaterElements = function(nums) {
    const len = nums.length
    const res = Array(len).fill(-1)
    
    const stack = [];
    for(let i = 0; i < len*2; i++){
        while(stack.length && nums[stack[stack.length-1]] < nums[i % len]){
            res[stack[stack.length-1]] = nums[i % len];
            stack.pop();
        }
        if(i<len) stack.push(i);
    }
    return res;
};