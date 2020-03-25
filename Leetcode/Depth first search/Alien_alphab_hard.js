
/*
Alien dictionary 

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of non-empty words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

Strategy:
- Build a graph on the order of the chars as we do a depth first search through the words 

I copied the below answer. It isn't even correct, BUT it's like 
close enough, thought-process wise, so whatever

*/


var alienOrder = function(words) {
    let graph = {};
    // Add each char in each word into the graph 
        // We'll say the val of each char as an array 
    words.forEach(word =>{
        word.split("").forEach(char =>{
            graph[char] = []
        })
    })
    // Build an adjacency list where we look at the relationship between chars and determine a few rules of the alphabet 
    for(let i = 0; i < words.length-1; i++) {
        let first = words[i];
        let second = words[i+1];
        let shortest = Math.min(first.length, second.length);
        
        // Looping through the shortest word, we add pairs to our graph 
        for(let j = 0; j < shortest; j++) {
            if(first[j] != second[j]) {
                graph[first[j]].push(second[j]);
                break // We only need the 1st pairing
            }
        }
    }
    // Let's track the chars we've seen and the chars we are seeing. Unique char bc trying to find alphabet, just need 1 instance of each
    let seen = new Set();
    let seeing = new Set();
    let res = [];
    // DFS!
    const dfs = function(char) {
        
        if(seeing.has(char)) return false 
        // If we've already seen it, cool. True. 
        if(seen.has(char)) return true
        
        // Let's look at our char.
            // And call dfs on it? Not sure what 
            // we're iterating over in the char
        seeing.add(char);
        for (let n of graph[char]) {
            if (!dfs(n)) return false;
        }
        
        // Great, we've seen it. Let's update 
        seeing.delete(char);
        seen.add(char);
        res.push(char);
        // Awesome. NOW we've seen it. Cool, true. 
        return true;
    }
    
    // If we have a cycle anywhere in the graph, return ""
        // That's because a cycle would mean we've seen something like this: [wef, ref, wgr] which is bad input 
    for([key, val] of Object.entries(graph)) {
        if(!dfs(key)) {
            return "";
        }
    }
    
    // Return a string of the alphabet!
    return res.reverse().join('');
};

