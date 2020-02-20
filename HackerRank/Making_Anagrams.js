/*
Strategy:
- Anagram = when both strings contain the same number of letters 
- Create two hashs, key is letter, value is num of times letter occurs 
- We're looking for MIN NUMBER of deletions needed for the two strs to be anagrams 
    - Make the dictionaries for the two strs
    - Then count the number of differences 
        - Loop through both strings and check the opposite str's hash
        - Now that we checked hash1. Loop through hash2. 

// Input: (cde, abc) => 4. We need to delete c & d from str1 and a & c from str2
*/


function makeAnagram(a, b) {
    const str1 = {};
    const str2 = {};
    let count = 0; 
    
    // Create the two dictionaries for a & b. Can be helper
    for(let i = 0; i < a.length; i++) {
        if(!str1[a[i]]) {
            str1[a[i]] = 1;
        } else { 
            str1[a[i]] += 1;
        }
    }
    for(let i = 0; i < b.length; i++) {
        if(!str2[b[i]]) {
            str2[b[i]] = 1;
        } else {
            str2[b[i]] += 1;
        }
    }
    // Increment count for every difference in chars
    for(let i in str1){
        if(str1[i] && str2[i]){
            if(str1[i] > str2[i]){
                count = count+ str1[i] - str2[i]
            }
            if(str1[i] < str2[i]){
                count = count + str2[i] - str1[i]
            } // Nothing to do if str1[i] === str2[i]
        }
        else{
            count = count + str1[i]
        }
    }
    for(let i in str2) {
        if(str2[i] && !str1[i]) {
            count = count + str2[i]
        }
    }
    return count;
}
