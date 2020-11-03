


/*
Word break 

Given a non-empty string s and a dictionary wordDict containing 
a list of non-empty words, determine if s can be segmented into 
a space-separated sequence of one or more dictionary words.
*/







/* 
20 mins this way 
Sliding window approach. Close but major edge case
 - Word in dict is substr of other word in dict 
 - SO we miss the remaining leeters
 "aaaaaaa"   ["aaaa","aaa"]    => true
*/

var wordBreak = function(s, wordDict) {
    let start = 0, 
        charCount = 0,
        tempStr = "",
        dictSet = new Set(wordDict);
    
    for(let end = 0; end < s.length; end++) {
        tempStr += s[end];
        
        if(dictSet.has(tempStr)) {
            charCount += tempStr.length;
            tempStr = "";
            start = end + 1;            
        }
    }
        
    if(charCount === s.length) {
        return true; 
    } else {
        return false;
    }
};



// Just copied, Idk wtf's going on 
// BFS using a queue
var wordBreak = function(s, wordDict) {
    
    const dict = new Set(wordDict),
          seen = new Set(),
          queue = [0];

    // bfs
    while(queue.length > 0) {
        let start = queue.shift();
        
        // Starting char in a word
        if(!seen.has(start)) {
            
            // Using start/ end pointer to check if dict has 
            for(let end = start+1; end <= s.length; end++) {
                if(dict.has(s.slice(start, end))) {
                    // great we found a word, 
                    // add ending to queue so we can look
                    // for the next one
                    queue.push(end);
                    seen.add(start);
                    
                    if(end === s.length) { // we're at end
                        return true;
                    }
                }
            }
        }
    }
    return false;
};



// Attempt #2
var wordBreak = function(s, wordDict) {
    const dict = new Set(wordDict);
    const seen = new Set();
    const queue = [0]
    
    // BFS through the queue 
    while(queue.length) {
        let start = queue.shift();
        
        if(!seen.has(start)) {
            for(let end = start + 1; end <= s.length; end++) {

                if(dict.has(s.slice(start,end))) {
                    if(end === s.length) {
                        return true;
                    }
                queue.push(end);
                seen.add(start)
                }
            }            
        }
    }
    return false;
}



// Attempt #1
var wordBreak = function(s, wordDict) {
    // Make a dictionary set 
    const dict = new Set(wordDict);
    const visited = new Set();
    const queue = [0];
    
    // BFS as we go through the queue
    while(queue.length) {
        let start = queue.shift();
        
        // CHECK if we haven't seen the starting char before
        if(!visited.has(start)) {
            
            // If we haven't seen the starting char, we want to check if substr after the star char === something the dictionary has
            // Looking for end of the word
            for(let end = start + 1; end <= s.length; end++) {
                // See if dictionary has something that matches
                if(dict.has(s.slice(start,end))) {
                    // When we reach the end of the str, return true
                    if(end === s.length) {
                        return true;
                    }
                queue.push(end)
                // As we remove from queue, move into visited
                visited.add(start)
                }
            }
        }
    }
    return false;  
};