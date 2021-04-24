


/*
Uncommon Words from Two Sentences

We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 


Space heavy 
- Hash table for words : occurences, set with keys for each
- After creating both set/ hash, iterate thru both hashs checking if the other S's set has that word 
    - If we see an occurence of 1 and is not in other str's set, then add to res array

Better
- Looking for words that occur just once total from both
strs

*/

var uncommonFromSentences = function(str1, str2) {
    let hash = {}, 
        res = [];
    
    for(let word of str1.split(" ")) {
        if(hash[word]) {
            hash[word]++;
        } else {
            hash[word] = 1;
        }
    }
    
    for(let word2 of str2.split(" ")) {
        if(hash[word2]) {
            hash[word2]++;
        } else {
            hash[word2] = 1;
        }
    }    
    
    for(let key in hash) {
        if(hash[key] === 1) {
            res.push(key);
        }
    } 
    
    return res;
}



// Super naive, too much space 
var uncommonFromSentencesHeavy = function(A, B) {
    let [hashA, setA] = hashSetMaker(A),
        [hashB, setB] = hashSetMaker(B),
        res = []; 

    for(let key in hashA) {
        if(!setB.has(key) && hashA[key] === 1) {
            res.push(key);
        }
    }
    for(let key in hashB) {
        if(!setA.has(key) && hashB[key] === 1) {
            res.push(key);
        }
    }
    return res;
};

function hashSetMaker(str) {
    let hash = {}, 
        words = new Set(),
        arr = str.split(" ");
    
    for(let word of arr) {
        if(hash[word]) {
            hash[word]++; 
        } else {
            hash[word] = 1; 
            words.add(word); 
        }
    }
    
    return [hash, words];
}

