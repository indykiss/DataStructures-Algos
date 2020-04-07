


/*
Word break 

Given a non-empty string s and a dictionary wordDict containing 
a list of non-empty words, determine if s can be segmented into 
a space-separated sequence of one or more dictionary words.
*/

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