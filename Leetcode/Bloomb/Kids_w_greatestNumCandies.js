

/*
Kids With the Greatest Number of Candies

Given the array candies and the integer extraCandies, where candies[i] 
represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the 
kids such that he or she can have the greatest number of candies among them. 
Notice that multiple kids can have the greatest number of candies.

Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true]

1. ID what is the greatest number of candies is within the arr
2. Add extra candies to the ith num of candies. If < greatestNumCandies, false

*/




var kidsWithCandies = function(candies, extraCandies) {
    
    let greatestNum = candies[0],
        res = [];
    
    for(let num of candies) {
        if(num > greatestNum) {
            greatestNum = num
        }
    }
    
    for(let kid of candies) {
        if(kid + extraCandies < greatestNum) {
            res.push(false);
        } else {
            res.push(true);
        }
    }
  
    return res;
};