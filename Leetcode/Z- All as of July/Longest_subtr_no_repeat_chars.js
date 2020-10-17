

/*

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




// Attempt #1
// var lengthOfLongestSubstring = function(s) {
//     if(!s) return 0;
//     const arr = s.split('')
//     const map = new Map();
//     let prevMax = 0;
//     let maxLength = 0;
    
//     for(let i = 0; i < arr.length; i++) {
//         let char = arr[i]
//         if(map.has(char)) {
//             prevMax = map.size;
//             map.clear
//         }
//         map.set(char, 1);
//         maxLength = Math.max(map.size, prevMax);
//     }
//     return maxLength;
// } 



