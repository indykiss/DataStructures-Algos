

/*
Relative Ranks
https://leetcode.com/problems/relative-ranks/

You are given an integer array score of size n, where score[i] is 
the score of the ith athlete in a competition. All the scores are 
guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place 
athlete has the highest score, the 2nd place athlete has the 
2nd highest score, and so on. The placement of each athlete 
determines their rank:

The 1st place athlete's rank is "Gold Medal".
The 2nd place athlete's rank is "Silver Medal".
The 3rd place athlete's rank is "Bronze Medal".
For the 4th place to the nth place athlete, their rank is their 
placement number (i.e., the xth place athlete's rank is "x").
Return an array answer of size n where answer[i] is the rank of 
the ith athlete.

Input: score = [5,4,3,2,1]
Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].



Goals:
- IDing the top 3 largest goals
- We are replacing those goals with "Gold", "Silver", "Bronze"
- For non-winners, we change the goals to their ranking 

Strategy:
- Dictionary of {val: index}
- Sort scores
- Create a new arr based on index
    - top 3 gets medals, others get ranking 

Edge:
- Ties? No
*/



var findRelativeRanks = function(score) {
    if(!score) return;
    
    let dict = {}, 
        res = []; 
    
    // Build dictionary with scores: index
    for(let i = 0; i < score.length; i++) {
        dict[score[i]] = i; // key, score : val, index
    }
    
    // Find the winning scores
    let sortedScores = score.sort((a,b) => b-a)
     
    // Use our dictionary to ID indexes to add medals or rankings to 
    for(let j = 0; j < sortedScores.length; j++) {
        let pos = dict[sortedScores[j]];
        
        if(j == 0) {
            res[pos] = "Gold Medal"
        } else if(j == 1) {
            res[pos] = "Silver Medal"
        } else if(j == 2) {
            res[pos] = "Bronze Medal"
        } else {
            res[pos] = (j + 1) + "";
        }
    }
    return res;
};






