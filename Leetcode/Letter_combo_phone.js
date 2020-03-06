/*
Letter combinations of a phone number 

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Strat:
- Make a map of each number 
- Loop through digits, 
*/

// Ya I hate this but it gives me basic strat
var letterCombinations = function(digits) {
    let result = []
    const mapping = [,,['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z']];
    
    if(!digits || digits.length === 0) {
        return [];
    }

    for(let i = 0; i < digits.length; i++) {
        if(result.length === 0) {
            result = mapping[+digits[i]]
        } else {
            // Add helper that does the mapping for us
            result = mapPhone(result, mapping[+digits[i]]);
        }
    }
    return result;
};

var mapPhone = function(result, mapping) {
    var tmp=[];
    mapping.forEach(function(e){
        tmp=tmp.concat(result.map(function(item){
            return item+e;
        }));
    }); 
    return tmp;
}
