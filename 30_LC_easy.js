/* Index:
31. Move Zeroes
32. Most Common Word

*/






/*
Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements. Do this in-place. 

Example:
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]

Loop through the arr, if it's zero push it to end of arr. And remove 0 from place.
Else, do nothing.
*/

var moveZeroes = function(nums) {
    
    for(var i = nums.length; i >= 0; i--) {
        if(nums[i] === 0) {
            // Remove the zero from its original place 
            // Push the zero in the end of the arr
            nums.splice(i, 1);
            nums.push([0]);
        }
    }
};




/*
Most Common Word

Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

*/



var mostCommonWord = function(paragraph, banned) {
    // Make everything lower case
        // Split it based on space and punctuation
    let words = paragraph.toLowerCase()
    .replace(/[!?',;\.]/g, ' ')
    .split(/\s+/g);
    
    const wordCount = [];
    
    for(let i = 0; i < words.length; i++) {
        let word = words[i]

        if(!banned.includes(word)) {                
            if(wordCount[word]) {
                wordCount[word] = wordCount[word] + 1;
            } else {
                wordCount[word] = 1;
            }
        }
    }
    
    let sortedWordCount = Object.keys(wordCount)
    .sort((a,b) => wordCount[b] - wordCount[a])
    
    return sortedWordCount[0];
};
