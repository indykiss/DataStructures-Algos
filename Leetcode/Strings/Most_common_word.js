/*
Most Common Word

Given a paragraph and a list of banned words, return the most 
frequent word that is not in the list of banned words.  It is 
guaranteed there is at least one word that isn't banned, and 
that the answer is unique.
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
