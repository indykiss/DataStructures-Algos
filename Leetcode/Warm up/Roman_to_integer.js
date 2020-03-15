
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