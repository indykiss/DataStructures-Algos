/*
Word Ladder

Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.

Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

*/

var ladderLength = function(beginWord, endWord, wordList) {
    let isEndWordExists = false;
    let graph = new Map();
    
    const diff = (str1, str2) => {
        let count = 0;
        for(let i = 0; i < str1.length; i++) {
            if(str1[i] !== str2[i]) count ++;
        }
        return count;
    }
    
    for(let i = 0; i < wordList.length; i++) {
        let key = wordList[i];
        if(key === endWord) isEndWordExists = true;
        graph.set(key, []);
        for(let j = 0; j < wordList.length; j++) {
            let next = wordList[j];
            if(diff(key, next) === 1) {
                graph.get(key).push(next);
            }
        }
    }
    
    if(!isEndWordExists) return 0;
    if(!graph.has(beginWord)) {
        graph.set(beginWord, []);
        wordList.forEach(word => {
           if(diff(beginWord, word) === 1) graph.get(beginWord).push(word);
        });
    }
    
    // Begin BFS
    let queue = [beginWord];
    let set = new Set();
    let steps = 1;
    
    set.add(beginWord);
    while(queue.length) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            let cur = queue.shift();
            if(cur === endWord) return steps;
            let words = graph.get(cur);
            words.forEach(word => {
                if(!set.has(word)) {
                    queue.push(word);
                    set.add(word);
                }
            });
        }
        steps ++;
    }
    return 0;
};