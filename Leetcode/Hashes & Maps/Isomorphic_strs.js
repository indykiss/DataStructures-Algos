

/*
Isomorphic Strings


Goal: Replace a letter in s with the 
letter in t. BUT all occurences 
of that letter must be changed as well. 

Strategy:
- Map: holds the previous mapping 
we've made 
    - If map doesnt have this sChar = tLetter
    translation, then add it 
- Use a set to track the tLetters we're adding

Edge/ considerations:
- If s.len != t.len, return false 

*/

var isIsomorphic = function(s, t) {
    
    let hash = {}, 
        charSet = new Set();
    
    for(let i = 0; i < s.length; i++) {
        
        if(hash[s[i]]) {
            // if the mapping is wrong: 
            if(hash[s[i]] !== t[i]) {
                return false; 
            }
        } else {
            // is the tChar mapped elsewhere
            if(charSet.has(t[i])) {
                return false;
            }
            // otherwise, add to hash
            hash[s[i]] = t[i]; 
            charSet.add(t[i]); 
        }
    }
    return true;
};






