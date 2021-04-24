
/*

Brute force: 
- Make set with all the words, so we can use .has
- Sort the words by largest to smallest
- Look at largest word. Iterate thru the chars in the word, check if our dictionary/ set has the substr
- Handle: multiple matches, need to return smallest lexographically (abc over abz)


Optimal: Prefix of strs? use a trie. TRIE SOLUTION + DFS
- Build the trie class 
  - isWord, storage 
- Add all the words to the trie 
- DFS through trie to find longest word 
*/

// optimal: O(sum of word_lens) time and space, because we build trie 
// building takes time, saving trie takes space 
    // DFS - O(n), n is num of nodes in trie 
var longestWord = function(words) {
    let tri = new Trie(); 
    
    for(let word of words) {
        tri.add(word);
    }
    
    let longest = ""; 
    
    var dfs = function(node, str) {
        let keys = Object.keys(node.storage); 
        
        for(let key of keys) {
            if(node.storage[key].isWord) {
                dfs(node.storage[key], str + key);
            }
            
            if(str.length > longest.length) {
                longest = str; 
            } else if (str.length === longest.length) {
                longest = findSmallest(str, longest); 
            }
        }
    }
    
    dfs(tri.root, "");
    
    return longest; 
    
}


var findSmallest = function(strA, strB) {
    for(let i = 0; i < strA.length; i++) {
        if(strA[i] < strB[i]) {
            return strA; 
        } else if (strB[i] < strA[i]) {
            return strB;
        }
    }
    // same word:
    return strA; 
}


class Node {
    constructor() {
        this.isWord = false; 
        this.storage = {}; 
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    
    add(word) {
        let curr = this.root; 
        for(let char of word) {
            // add node to trie if it doesnt have it 
            if(!curr.storage[word]) {
                curr.storage[word] = new Node(); 
            }
            // add word to the node 
            curr = curr.storage[word];
        }
        curr.isWord = true; 
    }
}





var longestWordBrute = function(words) {
    let tracker = new Set(words),
        res = ""; 
    
    words.sort(); 
    
    for(let word of words) {
        let substr = "", 
            isValid = true;
        
        for(let i = 0; i < word.length - 1; i++) {
            substr += word[i];
            
            if(!tracker.has(substr)) {
                isValid = false;
                break; 
            }
        }
        
        if(isValid && word.length > res.length) {
            res = word;
        }
    }
        
    return res;
};






