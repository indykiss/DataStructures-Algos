/*
Verifying an Alien Dictionary

We're given an alien alphabet and some words. 
Check if the words are alphabetically sorted 
according to this new alphabet. 

Strat:
- We want to loop through the alien alphabet
- We want to loop through each word in the list of words 
and compare it to the next word (OR start at 1 and look backwards)
- Compare the ith element in both words. If the next word's ith ele 
comes after the current word's ith ele, we're good to continue 

*/


var isAlienSorted = function(words, order) {
    // Loop through words. Check if prevWord & currentWord fit alien alphabe
    for(let i = 1; i < words.length; i++) {
        let prevWord = words[i-1];
        let currWord = words[i];
        
        // Helper function that tests if words are alphabetical
        if(!wordComparer(prevWord, currWord, order)) {
           return false;
        }
    }
    return true; 
}

var wordComparer = function(wordA, wordB, order) {
    //Loop and compare indexOf(word1[i]) & word2[i]
        // looping through the shortest of the words
    for(let j = 0; j < Math.min(wordA.length, wordB.length); j++) {
        let AIndex = order.indexOf(wordA[j]);
        let BIndex = order.indexOf(wordB[j]);
        if(AIndex < BIndex) {
            return true
        }
        if(BIndex < AIndex) {
            return false
        }
    }
}
