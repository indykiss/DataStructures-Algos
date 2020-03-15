/*
Easy step 1:
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


/*
Top N Buzzwords

You work on a team whose job is to understand the most sought after toys for the holiday season. 
A teammate of yours has built a webcrawler that extracts a list of quotes about toys from different articles. 
You need to take these quotes and identify which toys are mentioned most frequently. Write an algorithm that 
identifies the top N toys out of a list of quotes and list of toys.

Your algorithm should output the top N toys mentioned most frequently in the quotes.

Input:
The input to the function/method consists of five arguments:

numToys, an integer representing the number of toys
topToys, an integer representing the number of top toys your algorithm needs to return;
toys, a list of strings representing the toys,
numQuotes, an integer representing the number of quotes about toys;
quotes, a list of strings that consists of space-sperated words representing articles about toys

Output:
Return a list of strings of the most popular N toys in order of most to least frequently mentioned

Note:
The comparison of strings is case-insensitive. If the value of topToys is more than the 
number of toys, return the names of only the toys mentioned in the quotes. If toys are mentioned 
an equal number of times in quotes, sort alphabetically.

Example 1:

Input:
numToys = 6
topToys = 2
toys = ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"]
numQuotes = 6
quotes = [
"Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
"The new Elmo dolls are super high quality",
"Expect the Elsa dolls to be very popular this year, Elsa!",
"Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
"For parents of older kids, look into buying them a drone",
"Warcraft is slowly rising in popularity ahead of the holiday season"
];

Output:
["elmo", "elsa"]

Explanation:
elmo - 4
elsa - 4
"elmo" should be placed before "elsa" in the result because "elmo" 
appears in 3 different quotes and "elsa" appears in 2 different quotes.

*/


function getPopularToys(numToys, topToys, toys, numQuotes, quotes){
    let map = {};
    let result = [];
    
    // Tracking item, # of total instances, # of quotes appeared in 
    toys.forEach(item => {
        map[item] = [0,0,-1]
    })
    
    // Loop through all the quotes, get rid of 
      // capitalization and punctuation
      // Make str into array 
    for(let i = 0; i < quotes.length; i++){
        let str = quotes[i].
        replace(/[^\w\s]/ig, '').
        toLowerCase()
        .split(' ');

        // Loop through array and add word to map 
        for(let word of str){
            // If we have word in map 
            if(map[word]){
                // If we have it in map, increment it by 1
                if(map[word][2] == i)
                    map[word][0] = map[word][0] + 1;
                // If we don't have it in the map, we add it with the 3 things
                // we are tracking!!!! [0,0,-1] thing!!! Idk why theres 3 tho
                else
                    [map[word][0], map[word][1], map[word][2]] = 
                    [map[word][0] + 1, map[word][1] + 1, i]
            }
        }
    }
    
    // K let's move everything over in an arr bc we want an array answer 
    for(let item in map){
        result.push([item, map[item][0], map[item][1]])
    }

    // Sort the array by comparing the # of times the toy appears in quotes
    result.sort((a, b) => {
      // If total occurrences are equal AND # of times appear in quotes is equal 
        // Make it alphabetical
      if(a[1] == b[1] && a[2] == b[2]) {
        return -1;
      // If there's not 2 equal frequencies, then we just focus on total #
      } else if(a[1] == b[1]) {
        return 1;
      // Else, we just make this alphabetical
      } else {
        return b[2] - a[2];
      }
    })
    // We only want the top # of toys that the toy master wants 
    return result.slice(0, topToys).map(item => item[0])
}


getPopularToys(6, 3,["elmo", "elsa", "legos", "drone", "tablet", "warcraft"],6, 
["Elmo is the hottest of the season! Elmo will be on every kid's wishlist!",
"The new Elmo dolls are super high quality.",
"Expect the Elsa dolls to be very popular this year, Elsa!",
"Elsa and Elmo are the toys I'll be buying for my kids, Elsa is good",
"For parents of older kids, look into buying them a drone.",
"Warcraft is slowly rising in popularity ahead of the holiday season"
])







