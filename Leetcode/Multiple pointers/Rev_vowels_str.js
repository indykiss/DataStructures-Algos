/*
Reverse Vowels of a String
Write a function that takes a string as input and reverse only the vowels of a string.

Input: "hello"
Output: "holle"

*/


var reverseVowels = function(s) {    
    // Two pointer solution 
    const arr = s.split("")
    let start = 0; 
    let end = arr.length - 1
    const vowels = new Set(["a", "e", "i", "o", "u"])
    let temp1, temp2;
    
    while (start <= end) {
        let temp1 = vowels.has(arr[start].toLowerCase());
        let temp2 = vowels.has(arr[end].toLowerCase());
        if(temp1 && temp2) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--; 
        }
        if(!temp1) {
            start++; 
        }
        if(!temp2) {
            end--;
        }
    }
    return arr.join(""); 
};