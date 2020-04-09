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
- hash of words: frequency 
    - sort by frequence
        - if freq is the same, .localeCompare(comparing 1st char in both words, 2nd, 3rd)
- slice based on k 

["amazon", "amcat", "amazon", "amcat", "i"], k = 2
['amazon', 'amcat'] 
*/



// Top K frequent elements: given arr of nums
var topKFrequent = function(nums, k) {
    // num: num of occurences
    let seen = {}
    nums.forEach(num => {
        if(seen[num]) {
            seen[num] = seen[num] + 1;
        } else {
            seen[num] = 1;
        }
    })
    // {1:3, 2:2, 3:1}
    const sortedSeen = Object.keys(seen)
    .sort((a,b) => seen[b] - seen[a])
    // {1:3, 2:2, 3:1}
    return sortedSeen.slice(0, k);   
};

// Top k frequent words: given words
var topKFrequent = function(words, k) {

    const hash = {};
    
    for(let i = 0; i < words.length; i++) {
        if(hash[words[i]]) {
            hash[words[i]] = hash[words[i]] + 1;
        } else {
            hash[words[i]] = 1
        }
    }   
    
    // This returns a sorted arr
    const sortedHash = Object.keys(hash).sort((a,b) => {
        let temp = hash[b] - hash[a]
        
        if(hash[a] === hash[b]) {
            return a.localeCompare(b)
        } else {
            return temp;
        }
    })
    
    return sortedHash.slice(0,k)
}



// Have done like 5 times 


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