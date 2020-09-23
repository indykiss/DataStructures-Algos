


/* Given a string, find the first non-repeating character 
in it and return its index. If it doesn't exist, return -1.


"abcbc" => 0
"bbcac" => 3
"bbcc" => -1


1. Make a hash that loops through the str and counts the occurences
for each char. 
2. If there are no values of 1, then return -1 (fast failure)
3. Loop through string again. Check if the curr char only occured once. 
As soon as we find the 1st uniq char, break loop and return the i
*/


function findFirstUniq(str) {

    // Make a hash of chars: occurences
    let hash = {};
    for(let char of str) {
        if(hash[char]) {
            hash[char]++
        } else {
            hash[char] = 1;
        }
    }

    for(let i = 0; i < str.length; i++) {
        if(hash[str[i]] == 1) {
            return i;
            break;
        }   
    }

    return -1;
}