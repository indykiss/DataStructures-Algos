
/*
Roman to integer 

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Input: "III" => 3
Input: "LVIII" => 58
Explanation: L = 50, V= 5, III = 3.

Strat: Loop through the roman string, convert each roman num into int. 
Use hash for roman-int relationship lookup.
Add new int into sum. Return sum at the end.

Edge: Special roman chars like IV b/c IVX = 14. 

Lesson: Look for patterns and rules in the input to inform the code. 
*/


Python solution: 
exch = {
    'I': 1, 
    'V': 5, 
    'X': 10, 
    'L': 50, 
    'C': 100, 
    'D': 500,
    'M': 1000
}

class Solution:
    def romanToInt(self, s: str) -> int:
        # read left to right for roman ints
        total = 0 
        total += exch[s[0]]
        
        for i in range(1, len(s)): 
            curr = s[i]
            prev = s[i-1]
            if (prev == "I" and curr == "V") or (prev == "I" and curr == "X"): 
                total -= 2
            if (prev == "X" and curr == "L") or (prev == "X" and curr == "C"): 
                total -= 20 
            if (prev == "C" and curr == "D") or (prev == "C" and curr == "M"): 
                total -= 200 
            total += exch[curr] 
            
        return total

// Define roman-> integer relationship 
const romanInt = {
    I: 1, 
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
    }
    
var romanToInt = function(s) {
    let sum = 0;
    
    // Loop through str, check for current and next chars
    for(let i = 0; i < s.length; i++) {
      let current = s[i]
      let future = s[i+1]
        
      // Roman numerals are ALWAYS largest to smallest left to right EXCEPT for                 
        // special roman numerals. So we can check for that situation then subtract the         
        // 1st num from sum, bc thats the definition of special romans. 
        // The 1st num subtracted from the 2nd num is its actual value. 
      if(romanInt[current] < romanInt[future]) {
          sum = sum - romanInt[current];
      } else {
           sum = sum + romanInt[current];
      }   
    }
    return sum;
};


// Opposite: Integer to Roman 

/*
Strategy:
- Make a mapping that has our traditional rom: int match 
and the edge cases
- Iterate thru the map and check if our num is equal to 
any of the keys. EX: If num === 100, just return C, done. Break
- If the num is larger than the current rom num, let's 
add the rom num to our res and decrement this amount from our num
- Then keep going until we've processed all the nums in rom mapping 

*/

var mapping = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1   
}

var intToRoman = function(num) {
    let res = ""; // return res in str 

    for(let roman in mapping) {
        if(num === 0) break;
        if(num === mapping[roman]) {
            res += roman; 
            break; 
        }
        while(num >= mapping[roman]) {
            res += roman; 
            num -= mapping[roman];
        }
    }
    return res;
};





