/*
Group anagrams 

Given an array of strings strs, group the anagrams
together. You can return the answer in any order.


Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

- Sort each word alphabetically 
- Iterate thru res arr of arrs 
- If no arrs have the same collection of letters, add to a new arr.  

*/


var groupAnagrams = function(strs) {
    let mapping = {}; 
    
    // Make hash of word : [anagram1, angram2]
    // word being in alphabetic word
    for(let str of strs) {
        // convert str to alphabetic order
        let sorted = str.split('').sort().join('');
        // add to hash 
        if(mapping[sorted]) {
            mapping[sorted].push(str); 
        } else {
            mapping[sorted] = [str]; 
        }
    }
    
    // get array of hash keys
    let res = []; 
    for(let arr in mapping) {
        res.push(mapping[arr]);
    }
    return res;
}



// Attempt : Bad
// var groupAnagrams = function(strs) {
//     let res = [[strs[0]]];
//     for(let str of strs) {
//         let sortedStr = str.split('').sort((a,b) => a - b).join('');
//         let newAnagram = true;
//         for(let i = 0; i < res.length; i++) {
//             let s = res[i]; 
//             let amIMatch = s[0].split('').sort((a,b) => a - b).join('');
//             if(amIMatch === sortedStr) {
//                 s.push(str);
//                 newAnagram = false; 
//             } 
//         }
//         if(newAnagram) {
//             res.push(str);
//             newAnagram = false;
//         }            
//     }
//     return res;
// };



