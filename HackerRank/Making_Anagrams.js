// Make an anagram 

// NOT WORKING


/*
Strategy:
- Anagram = when both strings contain the same number of letters 
- Create two hashs, key is letter, value is num of times letter occurs 
- Sort to be alphabetical 
- We're looking for MIN NUMBER of deletions needed for the two strs to be anagrams 
    - Make the dictionaries for the two strs, then count the number of differences
    from A-Z
     - Loop through both strings:
        - 
        - If hash1 has a key that hash2 DOESNT have, then increment count by that value and delete that key/value from hash1 
        - If hash1 and hash2 has the SAME key, compare values. If values are not equal, find the difference, add the difference into count. Delete key/value from hash1
    - Now that we checked hash1. Loop through hash2. 

// Input: (cde, abc) => 4. We need to delete c & d from str1 and a & c from str2
*/

function makeAnagram(a, b) {
    const str1 = {};
    const str2 = {};
    let count = 0; 
    
    // Create the two dictionaries for a and b
    for(let i = 0; i < a.length; i++) {
        if(str1.hasOwnProperty[a[i]]) {
            str1[a[i]] += 1;
        }
        str1[a[i]] = 1;
    }
    for(let i = 0; i < b.length; i++) {
        if(str2.hasOwnProperty[b[i]]) {
            str2[b[i]] += 1;
        }
        str2[b[i]] = 1;
    }
    // Problem here
    // Increment count for every char that str1 and str2 don't have in common
    for(let i = 0; i < a.length; i++) {
        if(str2.hasOwnProperty(a[i])) {
            str2[a[i]]--;
            count++;
        }
    }
    for(let i = 0; i < b.length; i++) {
        if(str1.hasOwnProperty(b[i])) {
            str1[b[i]]--;
            count++;
        }
    }
    return count;
}
