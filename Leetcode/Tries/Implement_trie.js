
/*
Implement a trie

Implement a trie with insert, search, and startsWith methods.

Ex: 
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true


Strategy:
*/


class Trie {
    constructor() {
     this.root = {};
    }
    
    insert(word) {
        let node = this.root; 
        for(let char of word) {
            if(node[char] == null) {
                node[char] = {} 
            }
            node = node[char]                    
        }
        node.isWord = true;   
    }
    
    traverse(word) {
        let node = this.root;
        for(let char of word) {
            node = node[char]
            if(node == null) {
                return null; 
            } 
        }
        return node;
    }
    
    search(word) {
        const node = this.traverse(word);
        return node != null && node.isWord === true;
    }
    
    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
    
}

