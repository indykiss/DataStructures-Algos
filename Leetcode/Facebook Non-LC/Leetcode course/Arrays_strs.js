

/*
Longest substring without repeats
Given a string, find the length of the longest substring without repeating characters.
"abcabc" => 'abc' => 3
"bbb" => 'b' => 1
"aabbca" => "bca" => 3
*/


// Have a str. We want a substr with varying length 
// Sliding window 
var lengthOfLongestSubstring = function(s) {

    let seen = new Set();
    let maxLength = 0;
    let start = 0;
    
    // Make a sliding window 
    for(let end = 0; end < s.length; end++) {
        let char = s[end]
        // IF set has current char, pop off 1st ele until it doesn't anymore
        while(seen.has(char)) {
            seen.delete(s[start]);
            start++;
        }
        seen.add(char);
        // Update maxlength based on prev length OR size of window
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
} 



/*
Atoi

Implement atoi which converts a string to an integer.

The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

If no valid conversion could be performed, a zero value is returned.

*/

var myAtoi = function(str) {

    const min = Math.pow(-2, 31);
    const max = min * - 1 - 1

    let s = str.trim();
    if(s === '') return 0;

    s = s.split(' ');
    s = parseInt(str[0]);

    if(Number.isNaN(s)) {
        return 0;
    } else if (s < min) {
        return max;
    } else {
        return s;
    }
}

// Attempt #2

var myAtoi = function(str) {
    const min = Math.pow(-2, 31);
    const max = min * - 1 - 1

    let s = str.trim();
    if(s === '') return 0;

    s = s.split(' ');
    s = parseInt(str[0]);

    if(Number.isNaN(s)) {
        return 0;
    } else if (s < min) {
        return max;
    } else {
        return s;
    }
}