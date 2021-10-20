


/*
Shortest Distance to a Character

Given a string s and a character c that occurs in s, return an array of integers answer where answer.length == s.length and answer[i] is the distance from index i to the closest occurrence of character c in s.

The distance between two indices i and j is abs(i - j), where abs is the absolute value function.

Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]

Strategy A:
- Iterate thru s and find idx of c, save in stack
- As we reiterate thru s, iterate thru arr of idxs to find the closest matches 
    - Update a temp var that is tracking min match with Math.abs(i-j)
    - Push this temp into res
- Return res []
Time: O(m * n) , m is len of str and n is number of chars
Space: O(n)

Strategy B, which I couldn't get right:
- two pointer 

*/


var shortestToCharSlow = function(s, c) {
    let res = [], 
        idxs = []; 
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === c) idxs.push(i);
    }
    
    for(let j = 0; j < s.length; j++) {
        let temp = Infinity; 
    
        for(let k = 0; k < idxs.length; k++) {
            let cPos = idxs[k];
            
            temp = Math.min(temp, Math.abs(cPos-j));
        }
        
        res.push(temp);
    }

    return res;
};



// var shortestToChar = function(s, c) {
//     let res = []; 
    
//     for(let i = 0; i < s.length; i++) {
//         let pt1 = i == 0 ? i-1 : 0; 
//         let pt2 = i < s.length - 1 ? i+1 : i; 
//         let pt1Found = false, 
//             pt2Found = false,
//             shortest = 0;
        
//         while(s[pt1] !== c || pt1 >= 0) {
//             pt1--;
//         }
//         while(s[pt2] !== c || pt2 < s.length) {
//             pt2++; 
//         }
        
//         if(s[pt1] === c) pt1Found = true;
//         if(s[pt2] === c) pt2Found = true;
        
//         if(pt1Found && pt2Found) shortest = Math.min(Math.abs(pt1-i), Math.abs(pt2-i)); 
//         else if(pt1Found) shortest = Math.abs(pt1-i); 
//         else if(pt2Found) shortest = Math.abs(pt2-i); 
        
//         res.push(shortest);
//     }
//     return res; 
// }



