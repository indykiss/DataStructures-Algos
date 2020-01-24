/* 
11. Merge Two Sorted Lists
12. Happy number
13. Reorder data in log files = ???
14. Reverse integer
15. Fizz Buzz
16. Reverse String
17. Valid anagram
18. Subtree of another tree
19. Roman to integer
20. Design HashMap


*/


// Merge Two Sorted Lists

var mergeTwoLists = function(l1, l2) {
    
    // Base: Once we've hit the end of either list, we're done
    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }
    // S1: Compare l1 value and l2 node values 
        // If l1 value is smaller than l2, we want to 
        // Recurse l1 with using the next node in l1 and return l1
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        // If l2 value is smaller than l2, or equal, we 
        // recurse with l2 and return l1
        l2.next = mergeTwoLists(l1, l2.next);
        return l2
    }
};

/*
Happy Number

Write an algorithm to determine if a number is "happy":
Starting with any positive integer, replace the number by the sum of the 
squares of its digits, and repeat the process until the number equals 1 
(where it will stay), or it loops endlessly in a cycle which does not include 1. Those 
numbers for which this process ends in 1 are happy numbers.

Input: 19
Output: true
Explanation: 
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1

Assumptions: Negative numbers? (no). Valid input? 
Lesson: Sets are good. Learn to use them
*/

// Can save squares bc max number is 10 of them
const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

var isHappy = function(n) {
    // Edge:    
    if (n < 1) return false;

    // Store nums as we create them 
    let set = new Set();
    
    // If set doesn't have num, we add it and evaluate
    while(!set.has(n)) {
        set.add(n);
        let str = n.toString();
        n = 0
        // Loop through the string, do math
        for(let i = 0; i < str.length; i++) {
            n += squares[str[i]];
        }
        // If num is happy, return true
        if(n === 1) {
            return true;
        }
    }
    // Num seems unhappy
    return false;  
};





/*
Reorder data in log files. 

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  
It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  
The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

Input: 
logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: 
["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

Strat: Custom sort
All the eles with lets go first. Ignore the nums for now.
Then all the eles with dig. Order by num

Treat the log like 2 different case. Loop through log, and push all lets in 1 arr. 
Push all dig in seond arr. Splice arrs together, with letters ordered. 

Lesson: String manipulation can be complicated. Should learn how to use .substr
IDK. THIS ANSWER DOESNT EVEN PASS THE TESTS. 
But I've spent too much time on this already. 

*/



var reorderLogFiles = function(logs) {
    // Create separate arrs for letter and digit logs
    let letters = [],
        digits = []
    
    // Separate logs into letters and digits
    logs.forEach(log => {
        let substr = log.substr(log.indexOf(' ') + 1);
        let isDigit = !isNaN(Number(substr.charAt(0)));
        
        if(isDigit) {
            digits.push(log);
        } else {
            letters.push(log);
        }
    });
    
    // Sort letters arr 
    letters.sort((a,b) => {
        let strA = a.substr(a.indexOf(' ') + 1)
        let strB = b.substr(b.indexOf(' ') + 1)
        
        if(strA === strB) {
            a.localeCompare(b);
        } 
        
        return strA.localeCompare(strB);
    })
    
    // Push together and return 
    return [...letters, ...digits];
};





/*
Reverse an integer. 

Assumptions: Negative numbers are possible.

Strat: Make it into a string, then arr, then reverse. 
Then back into a number, using parseInt(). 
If negative number, need to 
multiply the input's sign with this num to get ans.

Took me a minute; had to google .join() and .parseInt(), but was ok. 
Had to look up the 32 bit part, but that was ok. 
*/

var reverse = function(x) {
    
    let reversed = x.toString().split('').reverse().join('')
    // 123 => "123" => [1,2,3] => [3,2,1] => "321"
    let answer = parseInt(reversed);
    // If number is negative;
    if(x < 0) {
        answer = answer * -1
    }
    // Edge: Can only take nums within 32 bit integer range
    if(answer <= -2147483648 || answer >= 2147483648 ) {
        return 0; 
    }
    return answer;
};



/*
Fizz Buzz
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number 
and for the multiples of five output “Buzz”. For numbers which are multiples 
of both three and five output “FizzBuzz”.
*/

var fizzBuzz = function(n) {
    let arr = []
    for(let i = 1; i <= n; i++) {
        if(i % 15 === 0) {arr.push("FizzBuzz")}
        else if(i % 3 === 0) {arr.push("Fizz")}
        else if(i % 5 === 0) {arr.push("Buzz")}
        else {arr.push(i.toString())}
    }
    return arr;
};








/*
Reverse string, in-place
Write a function that reverses a string, with O(1) space used.  
The input string is given as an array of characters char[].

Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
*/

// Really slow because of loop and .splice
var reverseStringSlow = function(s) {
    for(let i = 0; i < s.length; i++) {
        s.splice(i, 0, s.pop());
    }
};

// Faster. Swap things.
var reverseString = function(s) {
    let i = 0;
    let j = s.length - 1;
    while(i < j) {
        [s[i], s[j]] = [s[j], s[i]]
        i++;
        j--;
    }    
}







/*
Valid Anagram

Given two strings s and t , write a function 
to determine if t is an anagram of s.

Define an anagram: two strings with same number of letters

Strat: Create a map for both strings. Sort to be alphabetical
If maps are equal, it's an anagram . 

Assumptions: All lower case
*/


var isAnagram = function(s, t) {
    // Keep 1 map to count common characters & number of
        // times they appear 
    const count = {};
    // Count the chars in S
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        count[char] = (count[char] || 0) + 1;
    }
    // Decrement char count in t
    for(let i = 0; i < t.length; i++) {
        let char = t[i]
        if(!count[char]) {return false;}         
        count[char]--;
    }   
    // If not length equal, false else true
    if(s.length !== t.length) {
        return false;
    }
    return true;
};






/*
Subtree of Another Tree
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
Given tree t:

   4 
  / \
 1   2
Return true,

Strat:  Search through tree (breadth first traversal).ish. If a parent node 
in our big tree matches the 1st node in our lil subtree, check if 
the next left & right nodes match too. 

Return true if they do. False if not. 

*/


var isSubtree = function(s, t) {
    
    // Edge, invalid input
    if(!s) {return t};
    
    // Did we find a common root? Great! Let's look at the children nodes
    if(s.val === t.val) {
        if(traverse(s,t)) {
            return true;
        }
    }
  
    // If S's left node exists AND is the same as t's left node, true
    if(s.left && isSubtree(s.left, t)) {
        return true;
    }
    // If S's right node exists AND is the same as t's right node, true
    if(s.right && isSubtree(s.right, t)) {
        return true;
    }
    return false;
    
};


var traverse = function(s,t) {
    // IF left and right node are same, true
    if(!s && !t) { return true }
    
    // Edge: There's no s or t value
    if(!s || !t) { return false }
    
    // IF left and right node are DIFFERENT, false
    if(s.val != t.val) { return false }
    
    // Kk now check the new left and right nodes in case subtree has lots of levels
    return traverse(s.left, t.left) && traverse(s.right, t.right);
}






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
        
      // Roman numerals are ALWAYS largest to smallest left to right EXCEPT for                 // special roman numerals. So we can check for that situation then subtract the         // 1st num from sum, bc thats the definition of special romans. 
         // The 1st num subtracted from the 2nd num is its actual value. 
      if(romanInt[current] < romanInt[future]) {
          sum = sum - romanInt[current];
      } else {
           sum = sum + romanInt[current];
      }   
    }
    return sum;
};





/*
Design HashMap 
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.

get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.

remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.
*/


var MyHashMap = function() {
    this.map = [];
};

// Value will always be non-negative. 
MyHashMap.prototype.put = function(key, value) {
    this.map[key] = [key, value]
};

/*Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key */
MyHashMap.prototype.get = function(key) {
    if(this.map[key] === undefined) {
        return -1
    }
    return this.map[key][1];
};

/*Removes the mapping of the specified value key if this map contains a mapping for the key */
MyHashMap.prototype.remove = function(key) {
    this.map[key] = undefined;
};
