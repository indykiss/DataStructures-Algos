
/*
Boats to Save People
https://leetcode.com/problems/boats-to-save-people/ 

You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
*/


var numRescueBoats = function(people, limit) {
    let sortedPpl = people.sort((a,b) => a-b),
        i = 0, 
        j = people.length - 1,
        boats = 0; 
    
    while(i <= j) {
        boats++; 
        
        if(people[i] + people[j] <= limit) {
            i++;
        }
        j--; 
    }
    return boats;
};
