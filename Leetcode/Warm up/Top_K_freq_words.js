/*
Top K Frequent Words

Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.

Strat:
- Loop through arr of words. Hash w/ word & frequency. 
    - As we see word, if already exists, increment by 1
    - If doesn't exist, add to map 
- Create new sorted arr using Object.keys(hash).sort(STUFF)
    - If there's a tie in occurrrences, use alphabetical order as the tiebreaker
- Slice 0->K from this arr
*/



// Super do me again. Amazon LOVES these Qs


// Attempt #2

var topKFrequent = function(words, k) {

    // Make a hash of word: occurences
    let hash = {};
    for(let i = 0; i < words.length; i++) {
        if(hash[words[i]]) {
            hash[words[i]] = hash[words[i]] + 1;
        } else {
            hash[words[i]] = 1;
        }
    }
    
    // Sort the keys by char number of occurences   
        // In ties, make it alphabetical 
    let sortedHash = Object.keys(hash).sort((a,b) => {
        let temp = hash[b] - hash[a]
        
        if(hash[b] === hash[a]) {
            return a.localeCompare(b)
        } else {
            return temp;
        }
    })
    // Slice from 0 to K
    return sortedHash.slice(0,k);
} 




// Attempt #1
var topKFrequent = function(words, k) {
    let hash = {};
    for (let word of words) {
        if(hash[word]) {
            hash[word] = hash[word] + 1;
        } else {
            hash[word] = 1
        }
    }
    
    let res = Object.keys(hash).sort((a,b)=> {
            let temp = hash[b] - hash[a];
            if (temp == 0) {
              return a.localeCompare(b);                
            } else {
                return temp;
            }
        }   
    )
    return res.slice(0, k);
};