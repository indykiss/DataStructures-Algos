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


/*
Strat:
- Create a key map that holds all the keys and their positions 
from the order 
- Outer loop: Iterate through words, looking at curr and prev words 
- Inner loop: Iterate through curr & prev and compare the letters
based on the key map. If we find curr[i] letter is earlier in map 
dictionary than the prev[i] letter, then return false. 
- At the end if we never return false, return true
*/



/*
Strategy: O(n * m), n is num of words in arr and m is longest word in arr time
O(k) where k is length of dictionary
- Iterate thru arr
  - ID word1 and word2 to compare 
  - helper function that return T or F on if in alphabetical order 
  - if false, return false, if true continue 
- After loop, return true if never false 

- Helper:
  - Make dictionary become a hash dict where {letter: position}
  - Iterate, while smallest word length 
    - Look at ith letter for word1 and word2
    - If hash[word1[i]] > hash[word2[i]], return false 
    - if hash[word1[i]] === hash[word2[i]]] continue loop to look at next letter in word
    - if hash[word1[i]] < hash[word2[i]] return true; 
*/
var isAlienSorted = function(input, dictionary) {
    let hash = {}; 

    for(let i = 0; i < dictionary.length; i++) {
      let letter = dictionary[i];
      hash[letter] = i; // assuming no dupe letters in dictionary
    }

    for(let i = 1; i < input.length; i++) {
      let word1 = input[i-1],
          word2 = input[i];

      if(!comparer(word1, word2, hash)) return false; 
    }
    return true; 
}

function comparer(word1, word2, hash) {
    let smallestWordLen = Math.min(word1.length, word2.length); 

    for(let j = 0; j < smallestWordLen; j++) {
      let pos1 = hash[word1[j]]; // tells us position of word1's letter at j 
      let pos2 = hash[word2[j]]; // ditto for word2

      if(pos1 > pos2) { // 1st word's letter comes later in the dictionary
        return false; 
      } if(pos1 < pos2) { // 1st word comes be4 2nd word
        return true; 
      } 
    }

  // if never return true or false, word1 == word2
  if(word1 === word2) return true; 
  // deal with unequal word lengths
  if(word1.length > word2.length) return false;
  if(word1.length < word2.length) return true;
}






// Not great :( 
// Needed 5 hints, still didnt get all tests to pass but fine
var isAlienSorted = function(words, order) {
    let map = {};  // {a: 1, b: 2}
    
    for(let i = 0; i < order.length; i++) {
        let char = order[i];
        map[char] = i;  // map[i] = char;
    }
    
    for ( let i = 0; i < words.length - 1; i++) {
        const currentWord = words[i];
        const nextWord = words[i+1];
        
        for ( let j = 0; j < currentWord.length; j++ ) {
            if (nextWord[j] === undefined || map[currentWord[j]] > map[nextWord[j]]) return false;
            if (nextWord[j] !== currentWord[j] ) break;
        }
    }
    return true;
} 


// Apparently leetcode changed the way this problem is done
// my previous solutions no longer effing pass the tests

// So new way to do this i guess: oct, fb
var isAlienSorted = function(words, order) {
            
    // Create a map with all the keys and their position in the order string    
    let keyMap = {};
    for ( let i = 0; i< order.length; i++ )
    {
        keyMap[order[i]] = i;
    }
    
    // Iterate through the words - notice the - 1 since we'll be checking the next word
    for ( let i = 0; i < words.length - 1; i++ )
    {
        const currentWord = words[i];
        const nextWord = words[i+1];
        
        // Iterate through the letters of the current word and compare against next word    
        for ( let j = 0; j < currentWord.length; j++ )
        {
            // Check to see if next word doens't have a character, and if it does, make sure that it's later
            // in the order index than currentWord's current character
            if ( nextWord[j] === undefined || keyMap[currentWord[j]] > keyMap[nextWord[j]] ) return false;
            
            // If the above passes and they're not the same character, we can move onto the next word comparisons
            if ( nextWord[j] !== currentWord[j] ) break;
        }
    }
    
    // If nothing fails above, then the alien words are sorted     
    return true;
};


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