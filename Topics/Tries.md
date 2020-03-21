
## Tries


Tries are like trees of letters.

See more here: https://www.interviewcake.com/concept/javascript/trie? 

We use a trie when we want to validate words. Questions like: 
- Does this word exist in this dictionary? 


Pros:
- Sometimes space efficient if we store lots of words that start with similar patterns.
- Good for questions like "how many words start with choco." Word variation algorithms = make a triieeee. Another option would be putting the words in a set. 

Cons:
- USUALLy space inefficient since characters are 1 byte each. 
- Gotta implement by hand 


A trie is implemented like this, which we must do by hand. 

// A node is a letter node within the true
let Node = fun function() {
    // List of keys
    this.keys = new Map();
    // Is the letter we're looking at the end of a word?
    this.end = false; 
    // Changes this.end to true if it's the end of a word
    this.setEnd = function() {
        this.end = true;
    }
    // Returns true or false if it's the end of a word
    this.isEnd = function() {
        return this.end
    }
}

let Trie = function() {

    this.root = new Node();

    // We're adding in a word into the trie
    this.add = function(input, node = this.root) {

        // If we're at the end of the word, we want to set this as end of a word 
        if(input.length === 0) {
            node.setEnd();
            return 
        // Check if there's already a node with the letter we're looking at. This is in node.keys 
            // This is a map so we can use .has, .get, .set
        } else if (!node.keys.has(input[0])) {
            // If we don't have that node, add it in 
            node.keys.set(input[0], new Node());
            // This is where things become recusive.
                // We add everything after the 1st letter
                // and the 1st node that we just made 
            return this.add(input.substr(1), node.keys.get(input[0))
        } else {
            // Else, we already have the input[0] node: the 1st letter in the word we're adding 
                // So let's just return the word we've added 
            return this.add(input.substr(1), node.keys.get(input[0))
        }
    };

    // Check if the word is in the trie. Powerhouse of what we're doing with tries
    this.isWord = function(word) {
        let node = this.root; 
        while(word.length > 1) {
            // Check the 1st char in the word we're looking for 
            // If we don't got it; then no! Bad.
            if(!node.keys.has(word[0])) {
                return false;
            } else {
                // Ok we have the 1st letter. Let's see if we have the rest of the letters 
                // Reset node to be the values of the 1st letter
                node = node.keys.get(word[0]); 
                word = word.substr(1);
            }
        }
        // Look at the rest of the word. If the node has the word and we've IDed that the end of the word is an end, truue! 
        if(node.keys.has(word) && node.keys.get(word).isEnd()) {
            return true;
        } else {
            return false;
        }
    }

    this.print = function() {
        let words = [];
        // Pass in the node and a str into a search through the trie
        let search = function(node, str) {
            // Let's check that we have keys
            if(node.keys.size !== 0) {
                // Loop through the letter in the str
                    // .key.keys() means we're accessing the 
                    // letters that are nested lower down in tree
                for(let letter of node.keys.keys()) {
                    // Recurse w/ the letter and concat that letter to the str that's currently empty
                    search(node.keys.get(), str.concat(letter));
                } 
                // If we're looking at the end of the word. Awesome, let's add it into the words arr
                if(node.isEnd()) {
                    words.push(str)
            // IF the node.keys.size DOES equal zero, we're at the last letter of the branch
                } else {
                    if(str.length > 0) {
                        words.push(str);
                    } else {
                        return undefined;
                    }
                }
            }
        }
        // We made a search. Now we call it 
        search(this.root, new String()); 
            
        // Base case. Once we're at words.length = 0. Done   
        if(words.length > 0) {
            return words;
        } else {
            return null;
        }
    }


}
 