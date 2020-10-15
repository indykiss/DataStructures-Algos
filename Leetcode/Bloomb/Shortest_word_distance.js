


/*
Shortest Word Distance

Given a list of words and two words word1 and word2, return the 
shortest distance between these two words in the list.

Example:
words = ["practice", "makes", "perfect", "coding", "makes"].
Input: word1 = “coding”, word2 = “practice”
Output: 3
*/


var shortestDistance = function(words, word1, word2) {
    
    // We want distance and we want to look at indices 
        // we say -1 just to have a thing to compare
    let distance = words.length,
        i1 = -1,
        i2 = -1;
    
    for(let i = 0; i < words.length; i++) {
        let curr = words[i];
        
        // We found a word
        if(curr === word1) {
            i1 = i;
        // We found the other word
        } else if(curr === word2) {
            i2 = i;
        }
        // Ok now that we've found 2 words, lets update minimum distance
        if(i1 !== -1 && i2 !== -1) {
            distance = Math.min(distance, Math.abs(i1 - i2));
        }
    }
    
    return distance;
    
};
