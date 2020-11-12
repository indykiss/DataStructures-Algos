
/*
Word Break II

Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]

1. Use foundCombos to memoize previously found sets
2. Use a set for constant lookup dictionary
3. Set up recursive function to loop through slices of a word and check if it is in the dictionary set
4. If it's in the set, call recursive function on the "rest" of the word which starts at the end index.
5. This call will return an array of arrays of potential combos for the "rest" of the word which are combined with the current word and pushed into the list
6. Return from the main call and join each combination on " "

*/


// Just copied again :( 
    // mild refresh. Nov 
var wordBreak = function(s, wordDict) {
    let foundCombos = {},
        lookup = new Set(wordDict);
    
    function findCombinations(start = 0) {
        if(start === s.length) return [""];
        if(start in foundCombos) {
            return foundCombos[start];
        }
        
        let list = [];
        
        for(let end = start + 1; end <= s.length; end++) {
            let word = s.slice(start, end); 
            if(lookup.has(word)) {
                let newCombo = findCombinations(end); 
                
                for(let str of newCombo) {
                    list.push([word, ...str]);
                }
            }
        }
        foundCombos[start] = list;
        return list;
    }
    
    return findCombinations().map((combo) => combo.join(" "));
};


const wordBreak = (s, wordDict) => {
    const foundCombos = {};
    const dict = new Set(wordDict);
    const findCombos = (index = 0) => {
        if(index === s.length) return [""];
        if(index in foundCombos) return foundCombos[index];
        const list = [];
        for(let end = index+1; end <= s.length; end++){
            const word = s.slice(index, end);
            if(dict.has(word)){
                const combos = findCombos(end);
                for(const combo of combos){
                    list.push([word, ...combo]);
                }
            }
        }
        foundCombos[index] = list;
        return list;
    }
    return findCombos().map((combo) => combo.join(" "));
};