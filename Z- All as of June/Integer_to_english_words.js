

/*
Integer to English Words

Convert a non-negative integer num to its English words representation.

num = 123
Output: "One Hundred Twenty Three"

num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"

Qs:
Up to billion? Yes. Not trillion. 
Decimals or negatives? No. 

Strat: 
- Make arrs that have indices match the word:
ones = [" ", "One", "Two", "Three", "Four"] ... 
tens = [" ", "Ten", "Twenty", "Thirty"] ... 
    spelling thing? thirty-five ? or can we say its thirty five w/ space? 
    ignore dashes 
hundreds? note its just ones[i] + "hundred"
thousands? ones[i] + "thousand"
firstNum = ["", "Thousand", "Million", "Billion"]

Steps:
- Make our arrs 
- Iterate through the num, ID 3 numbers at a time by % 1000
- Run these 3 nums in a helper that returns words that 
translates the subnum 
- Add word into words arr at front (unshift). At end, return arr as str

- Helper:
- Empty str that we're adding words to 
- Check if number is in the hundreds, if so, we'll
use the ones arr + "hundred" and % subnum by 1000, to reduce it.
Add to the str
- Check if number > 19, so we can use the tens arr. And 
% subnum by 10 to reduce. Add words to str. 
- At the end, we just have 1 digit left, so we'll want to 
add to the str. 
- Return the word
*/


var numberToWords = function(num) {
    if(num === 0) return "Zero"
    
    let ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", 
                "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen",
               "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", 
               "Nineteen"]; 
    let tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", 
               "Seventy", "Eighty", "Ninety"];
    let firstNum = ["", " Thousand", " Million", " Billion"];
    
    
    let words = [];
    
    for(let idx = 0; num; idx++, num = Math.floor(num/1000)) { 
        let subnum = num % 1000;
        let word = threeDigitsToWords(subnum);
        
        if(word) words.unshift(word + firstNum[idx]);
        
    }
    
    return words.join(" ").trim();
    
    // Look at nums in groupings of 3
    function threeDigitsToWords(subnum) {
        let word = "";
        // If we have a hundred, lets get that added
        // and reduce the subnum
        if(subnum > 99) {
            let index = Math.floor(subnum / 100);
            word = ones[index] + ' Hundred ';
            subnum = subnum % 100; 
        }
        // If it's in the twenties+ still 
        if(subnum > 19) {
            let idx = Math.floor(subnum/ 10);
            
            word += tens[idx] + " "; 
            subnum = subnum % 10
        }
        // Ok so NOW subnum is just in the tens
        word += ones[subnum];
        return word.trim();
    }
    
};


