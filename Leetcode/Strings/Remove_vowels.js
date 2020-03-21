/*
Remove the vowels in a string

Given a string S, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.

*/

var removeVowels = function(S) {
    
    const vowels = new Set(["a","e", "i","o","u"]);
    let newStr = [];
    const arr = S.split("")
    
    for(let i = 0; i < arr.length; i++) {
        if(!vowels.has(arr[i])) {
            newStr.push(arr[i]);
        }
    }
    return newStr.join("");
};