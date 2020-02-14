/*
Top K Words
Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. 
If two words have the same frequency, then the word with the lower alphabetical order comes first.

*/

var topKFrequent = function(words, k) {
    var map = new Map();
    
    // Edge: No words exist
    if(!words) {
        return [];
    }
    
    // Loop through words and create a map to track the # of times word appears
    for(let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) | 0) + 1);
    }
    
    // Sort the map's entries by frequency 
        // And if it's a tie, return the one with lowest alphabet order 1st
    const mapSort = new Map([...map.entries()].sort(function(a,b){
        var temp = b[1] - a[1];
        if(temp == 0) {
            return a[0].localeCompare(b[0]);
        }
        return temp;
    }));
    
    // Make the map of words w/ frequencies into an arr
    var mapIterated = mapSort.entries();
    var i = 0;
    var answer = [];
    
    // We increment. We look at each element until we hit K, the most frequent elements
    while(i < k) {
        answer.push(mapIterated.next().value[0]);
        i++;
    }
    
    return answer;
};

