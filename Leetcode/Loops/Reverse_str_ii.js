

/*
Reverse String II

Given a string s and an integer k, reverse 
the first k characters for every 2k characters 
counting from the start of the string.

If there are fewer than k characters left, 
reverse all of them. If there are less than 
2k but greater than or equal to k characters, 
then reverse the first k characters and left 
the other as original.

 
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Strategy:
- IF there is at least 2k chars
 - Reverse the first k of chars
 - Leave the 2nd k of char alone 
- If fewer than k chars left, 
 - Reverse the rest of chars 

Sliding window? 
- Start at 0, end at 2k 
 - In place: Reverse from 0->k, helper swapping thing
    - in place, leave alone: k to 2K 
- If fewer than K left, reverse all
- If > k but < 2K left, reverse just first K 


IDK. off today, tired. just looked at solution 
but this mostly makes sense
*/


var reverseStr = function(s, k) {    
    let arr = s.split('');
    
    for(let i = 0; i < s.length; i += 2*k) {        
        const charsToRev = arr.splice(i, k).reverse(); 
                
        arr.splice(i, 0, ...charsToRev);
    }
    return arr.join('');
};




