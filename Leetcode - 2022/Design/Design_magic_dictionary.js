

/*
Implement Magic Dictionary

Design a data structure that is initialized with a list of different words. Provided a string, you should determine if you can change exactly one character in this string to match any word in the data structure.

Implement the MagicDictionary class:

MagicDictionary() Initializes the object.
void buildDict(String[] dictionary) Sets the data structure with an array of distinct strings dictionary.
bool search(String searchWord) Returns true if you can change exactly one character in searchWord to match any string in the data structure, otherwise returns false.

*/



class MagicDictionary {
    
    constructor() {
        this.dictionary = new Set();
    }
    
    buildDict(words) {
        for(let word of words) {
            this.dictionary.add(word);
        }
    }
    
    // To return true if there's a word in our dictionary that is spelled almost the same: Can change 1 char to match 
    // False if not
    search(word) {
        for(let compare of this.dictionary) {
            if(compare.length !== word.length) continue; 
            let offByOne = 0; 
            
            for(let i = 0; i < word.length; i++) {
                let char1 = word[i], 
                    char2 = compare[i]; 
                
                if(char1 !== char2) {
                    offByOne++;
                } 
                if(offByOne > 1) {
                    continue;
                }
            }
            if(offByOne == 1) return true;            
        }
        return false;
    }
}






