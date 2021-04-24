


/*
Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

ransomNote = "a", magazine = "b"   => false
ransomNote = "aa", magazine = "aab"  => true 

Strategy:
- Hash with letters in magazine, words/ occurences 
- Iterate thru ransom, decrement the hash[word] val if the 
hash has that val. If the hash doesnt have, return false. 
- If never false, true
*/

// O(m) time, m is len of magazine
// Space: hash max size is 26 letters. So O(1) space
var canConstruct = function(ransomNote, magazine) {
    let hash = {}; 
    
    for(let letter of magazine.split("")) {
        if(hash[letter]) {
            hash[letter]++;
        } else {
            hash[letter] = 1; 
        }
    }
    
    for(let char of ransomNote.split("")) {
        if(!hash[char] || hash[char] === 0) {
            return false
        } else {
            hash[char]--; 
        }
    }
    return true;
};


