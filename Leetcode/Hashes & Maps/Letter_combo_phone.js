/*
Letter combinations of a phone number 

Given a string containing digits from 2-9 inclusive, return all possible letter 
combinations that the number could represent.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Strat:
- Make a map of each number 
- Loop through digits, 
*/


Python solution: 

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        letters = {"2": "abc", "3": "def", "4": "ghi", "5": "jkl", 
                   "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"}
        
        if len(digits) == 0: return []
        
        def backtrack(idx, path):
            if len(path) == len(digits):
                combos.append("".join(path))
                return # backtrack 
            
            # get the letters that map to each num 
            # iterate through them
            potential_letters = letters[digits[idx]]
            for letter in potential_letters:
                path.append(letter)
                backtrack(idx+1, path) # recurse 
                path.pop() # backtrack by removing the letter before moving to the next
        
        combos = []
        backtrack(0, [])
        return combos



// Never would've gotten this

var letterCombinations = function(digits) {
    let res = [];
    const mappings = [,,['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    
    for(let i = 0; i < digits.length; i++) {
        let dig = digits[i];
        if(res.length === 0) {
            res = mappings[+dig];
        } else {
            res = comboMaker(res, mappings[+dig])
        }
    }
    return res;
};


var comboMaker = function(res, mapping) {
    let temp = [];
    
    mapping.forEach(function(e) {
        temp = temp.concat(res.map(function(item) {
            return item + e 
        }));
    });
    return temp;
}



// Ya I hate this but it gives me basic strat
var letterCombinations = function(digits) {
    const result = []
    const mappings = [,,['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    
    if(!digits || digits.length === 0) {
        return [];
    }

    for(let i = 0; i < digits.length; i++) {
        if(result.length === 0) {
            result = mappings[+digits[i]]
        } else {
            // Add helper that does the mapping for us
            result = mapPhone(result, mappings[+digits[i]]);
        }
    }
    return result;
}

var mapPhone = function(result, mappings) {
    var tmp=[];
    mappings.forEach(function(e){
        tmp=tmp.concat(result.map(function(item){
            return item+e;
        }));
    }); 
    return tmp;
}
