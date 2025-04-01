

/*
Sort characters by frequency

Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Strat:
- Create a dictionary with char: # of occurences 
- Convert hash to arr and sort by # of occurs desc order 
- Return a str of the chars X num of occurences 

O(n log n) time: Dictionary: O(n), Sorting: O(n log n).
O(n) space, creating a dictionary
*/


// 15 mins, but needed like 3 hints 
// Need to learn:
// let sortedKeys = Object.keys(hash).sort((a,b) => hash[b] - hash[a]); 
var frequencySort = function(s) {
    let hash = {},
        res = "";
    
    for(let i = 0; i < s.length; i++) {
        if(hash[s[i]]) {
            hash[s[i]] += 1
        } else {
            hash[s[i]] = 1;
        }
    }
    // {t: 1, r:1, e:2}
    
    // Sort the keys in hash so we know the order of chars desc
    let sortedKeys = Object.keys(hash).sort((a,b) => hash[b] - hash[a]); 
        
    for(let char of sortedKeys) {
        // Add hash[char]'s number of occurences to res str
        while(hash[char] > 0) {
            res += char;
            hash[char]--;
        }
    }
    return res;
} 



var frequencySort = function(s) {
    let hash = {},
        arr = s.split(''),
        res = '';
    // Make the dictionary
    while(arr.length) {
        let char = arr.pop();
        hash[char] ? hash[char]++ : hash[char] = 1
    }
    // Sort the keys by # of occurences
    let sortedKeys = Object.keys(hash).sort((a,b) => hash[b] - hash[a]);
    
    for(let char of sortedKeys) {
        res += char.repeat(hash[char]);
    }

    return res;
};

/* Lessons:

We can sort the KEYS in a hash table with:
sortedKeys = Object.keys(hash).sort((a,b) => hash[b] - hash[a])  DESC ORDER
sortedKeys = Object.keys(hash).sort((a,b) => hash[a] - hash[b])  ASC ORDER

thingIWantRepeated.repeat(numOfTimesIWantItRepeated); 

*/ 