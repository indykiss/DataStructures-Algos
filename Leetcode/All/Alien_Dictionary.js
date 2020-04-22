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




// Attempt # 2: Needed lots of hints. Do me again 
var isAlienSorted = function(words, alphabet) {
    
    for(let i = 1; i < words.length; i++) {
        let second = words[i];
        let first = words[i-1];
        
        if(!comparer(first, second, alphabet)) {
            return false;
        } 
    }
    return true;
};

var comparer = function(first, second, alphabet) {
    // Loop through the smallest word
    for(let i = 0; i < Math.min(first.length, second.length); i++) {
        let firstIndex = alphabet.indexOf(first[i]);
        let secondIndex = alphabet.indexOf(second[i]);
        
        if(firstIndex < secondIndex) {
            return true;
        }
        if(secondIndex < firstIndex) {
            return false;
        }
    }
}






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




/*
Verifying Alien Dictionary
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.
Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.


Attempt 1
*/

var isAlienSorted = function(words, order) {
    // Words are the words we're looking at
    // Order is the alien alphabet
    
    let newArr = [...words]
    // Let's sort this replicated arr; 
        // best practice is to not alter original arr
        .sort((a, b) => {
    // We compare each 1st letter of words in arr to see if they are alphabetical
            for (let i = 0; i < a.length; i++) {
        // If there's a tie, we continue
                if (a[i] === b[i]) continue;
            // If the words aren't alphabetical we do maths to say its false
            // and vice versa. Goal is boolean so we do this:
                if (order.indexOf(a[i]) > order.indexOf(b[i])) return 1;
                if (order.indexOf(a[i]) < order.indexOf(b[i])) return -1;
            }
            return a.length - b.length;
        }).join('') === words.join('');
    
    // Returns boolean
    return newArr;
};