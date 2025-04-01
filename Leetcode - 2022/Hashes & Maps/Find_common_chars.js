

/*
Find Common Characters
Given an array A of strings made only from lowercase 
letters, return a list of all characters that show 
up in all strings within the list (including duplicates).  
For example, if a character occurs 3 times in all strings 
but not 4 times, you need to include that character 
three times in the final answer.

You may return the answer in any order.

Input: ["bella","label","roller"]
Output: ["e","l","l"]



Strategy: O(n) space  / Time: O(n * a.length), where a is 1st word
- Build dictionaries for each str => char : #ofoccs
    - Build dictionaries for all str minus the 1st
- Iterate thru 1st str 
- Look at the char, check if the other hashes have that 
 char. If so, decrement from hash and add letter to 
 res arr. 

Edge/ considerations: 
- No shared chars 
- Capital letters? 
- Numbers/ symbols? 

16 mins => slow & heavy but passed on 1st attempt
*/

var commonChars = function(A) {
    let allHashes = []; // optimize here? 
    let res = [];
    
    for(let i = 1; i < A.length; i++) {
        let newHash = hashify(A[i]);
        allHashes.push(newHash); 
    }
    
    for(let char of A[0]) {
        let yesAdd = true;
        
        for(let hash of allHashes) {
            if(hash[char] >= 1) {
                hash[char]--; 
            } else {
                yesAdd = false; 
            }
        }
        if(yesAdd) res.push(char);
    }
    return res;
};

var hashify = function(str) {
    let hash = {}; 
    
    for(let char of str) {
        if(hash[char]) {
            hash[char]++;
        } else {
            hash[char] = 1; 
        }
    }
    return hash;
}
