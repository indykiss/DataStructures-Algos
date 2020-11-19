
/*
1st interviewing.io Q for fellowship, Sept

Secret Santa

Build an algo that takes in an input of an array of names and 
outputs a hash of names with their assigned secret santa recipients. 

People can't get themselves. 
Every name should have an equal chance of being picked (it's random).

Edge cases:
- Issue when there is an odd number of input eles and we have the even 
people picking each other. Ex: A:B, B:C, D: undefined
*/


// ["Kat", "Fred", "Joe"]
// Output: {Kat: Fred, Fred:Joe, Joe: Kat}

function pickFromSet(set, offLimits) {
    // Pick randomly from set, but don't pick "offLimits" 
   let newSet = new Set(set);
   newSet.delete(offLimits);
   let min = 0,
        max = newSet.size;
   
   const randInt = min + Math.floor(Math.random() * max);
   let randPicker = Array.from(newSet)[randInt]
 
   return randPicker  
 }
 
 function santaSorter(arr) {
   let result = {};
   let assignedPpl = new Set(arr)
     
   for(let i = 0; i < arr.length; i++) {
 
     let assignedPerson = pickFromSet(assignedPpl, arr[i]);
     console.log(assignedPerson)
     
     result[arr[i]] = assignedPerson;
     assignedPpl.delete(assignedPerson); 
   }
   return result;
 }
 
 santaSorter(["A", "B", "C"]);






/*
2nd Interviewio.io Question for fellowship, Sept 2020

Goal: Write a function that takes in 2 dates and returns T/F if they are 1 month apart. 

Ex:
{Day: 10, Month: 09, Year: 2020}, {Day: 10, Month: 10, Year: 2019} => False

{Day: 10, Month: 09, Year: 2020}, {Day: 10, Month: 10, Year: 2020} => True

Notes:
- Ask more clarifying questions upfront, before I start coding
- Think about ambiguities first before coding 
- I should do a quick project before continuing leetcodes. I shouldn't have forgotten
how to access elements in a hash and confusion about return/ console.log
*/

// If there's a new year
// checkerIfMonthApart({Day: 10, Month: 12, Year: 2019}, {Day: 10, Month: 1, Year: 2020}) // true

var checkerIfMonthApart = function(date1, date2) {
  if (date1['Day'] !== date2['Day']) {
    return false
  }

  let isOneMonthApart = date1['Month'] + 1 == date2['Month'] || date1['Month'] - 1 == date2['Month']
  
  // Ideally should be a function by itself. Repeating things basically:
  let isItANewYearAnd1MonthApart = 
    (date1['Month'] == 12 && date2['Month'] == 1 && date1['Year'] + 1 == date2['Year']) 
  || (date1['Month'] == 1 && date2['Month'] == 12 && date1['Year'] - 1 == date2['Year']) 
                                      
  if(isItANewYearAnd1MonthApart == true) {
    return true;
  }                                     
  
  if(date1['Year'] == date2['Year'] && isOneMonthApart)  {
    return true;
  } else {
    return false;
  }
  
}

// If there's a new year
console.log(checkerIfMonthApart({Day: 10, Month: 1, Year: 2020}, {Day: 10, Month: 12, Year: 2019})) // true

// Date needs to be the same
console.log(checkerIfMonthApart({Day: 11, Month: 9, Year: 2020}, {Day: 10, Month: 10, Year: 2020})) // false

// Month needs to be ONLY off by 1
console.log(checkerIfMonthApart({Day: 10, Month: 9, Year: 2020}, {Day: 10, Month: 10, Year: 2020})) // true
console.log(checkerIfMonthApart({Day: 10, Month: 9, Year: 2020}, {Day: 10, Month: 8, Year: 2020})) // true
console.log(checkerIfMonthApart({Day: 10, Month: 9, Year: 2020}, {Day: 10, Month: 2, Year: 2020})) // false
console.log(checkerIfMonthApart({Day: 10, Month: 9, Year: 2020}, {Day: 10, Month: 12, Year: 2020})) // false

// Year needs to be the same
console.log(checkerIfMonthApart({Day: 10, Month: 9, Year: 2020}, {Day: 10, Month: 10, Year: 2020})) // true
console.log(checkerIfMonthApart({Day: 10, Month: 9, Year: 2020}, {Day: 10, Month: 10, Year: 2019})) // false







// Interviewing.io Question Part 1, 9/26/2020

// ["cat", "dogcacat"] => true
var subsequence = function(s,t) {
  
  let subseq = s.split(''),
      index = 0;      
  
  for(let i = 0; i < t.length; i++) {
    if(t[i] === subseq[index]) {
      index++;
    }  
  }
  
  if(index == subseq.length) {
    return true;
  } else {
    return false;
  }
}

console.log(subsequence("cat", "dogcacat")); // true
console.log(subsequence("cta", "dogcacat")); // false
console.log(subsequence("ace", "abcde")); // true
console.log(subsequence("ac", "cade")); // false
console.log(subsequence("ac", "ac")); // true
console.log(subsequence("a", "a")); // true
console.log(subsequence("ac", "cade")); // false
console.log(subsequence("abcd", "abc")); // false
console.log(subsequence("", "abc")); // true
console.log(subsequence("ab", "")); // false
console.log(subsequence("", "")); // true



// Part 2

/*
Univalued Binary Tree

A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

*/

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var univalue = function(root) {
  if(!root) return true; // Base

  // Return false here if we've fit a non-univalued node
  if(root.left && root.left.val != root.val) {
    return false;
  }
  if(root.right && root.right.val != root.val) {
    return false;
  }
  // Recurse action
  return univalue(root.left) && univalue(root.right);
}





/* 
Interviewing.io, Oct 14, with dude who was very nice and helpful


You work in a multinational corporation. It has multiple offices around the world: A,B,C and so on. 
Every week you are allowed to take one flight and switch locations. You will be granted any vacation 
days for the location where you are at. So, if A has vacation during week 1, and B has vacation during 
week 2, you can get two weeks of vacation.


Your task is to optimize your total vacation time. Write a function that returns the max 
number of vacation days per year.

Example:
You are given an array for each city, with the number of vacation days per week as the elements. 
In this example, A has no vacation days the first week, and 5 days on the third week. Note that in 
the example there are only two cities, but your function only gets the cities parameter.

A = [0, 1, 5, 0, 3]
B = [2, 1, 0, 5, 3]

Max vacation: B, B, A, B, B = 16 days. 

cities = [A, B]
def max_vacation(cities) -> int:
  # your implementation here.
  return 0

- Assume A and B are same length
- Can have infinite # of cities

Strat:
- Iterate through all cities to check what the max is at that index
 */




function max_vacation(cities) {
  let maxVacayDays = 0,
      totalWeeks = cities[0].length,
      week = 0;
  
  while(week <= totalWeeks) {
    
    let maxDaysInAWeek = 0;
    
    for(let city = 0; city < cities.length; city++) {
      if(cities[city][week] > maxDaysInAWeek) {
        maxDaysInAWeek = cities[city][week];
      }
    }
    maxVacayDays += maxDaysInAWeek;
    week++;
  }
    
  return maxVacayDays;
}

// console.log(max_vacation([[0, 1, 5, 0, 3], [2, 1, 0, 5, 3]]))


// Better way to do very lightweight testing:
var A = [0, 1, 5, 0, 3]
var B = [2, 1, 0, 5, 3]
var cities = [A, B]

console.assert(max_vacation(cities) !== 16, {cities: cities})

// Adding an error message: 
var result = 16
console.assert(max_vacation(cities) !== result, "Message here %d", {result: result})

// console.assert(true) : Won't show up in console
// console.assert(false) : Shows up in console, so adjust statement quickly

// console.assert(assertion, obj1 [, obj2, ..., objN]);
// console.assert(assertion, msg [, subst1, ..., substN]); // C-like message


// Resources to study: 
// https://en.wikipedia.org/wiki/Printf_format_string
// https://learnxinyminutes.com/docs/javascript/
// https://learnxinyminutes.com/docs/c/
// https://github.com/jwasham/coding-interview-university
// https://developer.mozilla.org/en-US/docs/Web/API/console/assert






/* LRU Cache: Interviewing.io Oct, 24 2020 


Notes:

Cache

Least Recently Used Cache: LRU Cache

Cache of size 2:

set(1, 2)
set(1, 3)

set(4, 5)   

get(1) 


set(6, 7) => evict 4 -> 5

Vars: cache = map, capacity = 2

Set: inserts the key/val pair into cache. If we're past capacity, we want to remove the least recently used. 

Get: we're asking for a key, and want to return the value if this exists. if not, -1. assume all positive ints. Make this key become the most recently used.  changes the order so that the new pair is also the most recently used.

least recent value in map: 
cache.keys.next.value: gets the 1st value within the map

most recently used:
if the value already existed, remove the value.
readd it in. 

new Map()
- .delete
- .set 
- .get 

for( let [key, val] of Map) 


- Talk about the DSs before coding 
- Brush up on CS fundamentals 
- Practice debugging 
 */



/*
Constructor: this.capacity, this.cache is a map

Get:
- Return val of key if exists. Else -1
Since we're getting, we'd want to readd to refresh usage 

Put:
- Update the value of the key if it exists, or add if it doesnt
- If capacity is reached, remove the least recently used ele
*/

class LRUCache {
  constructor(capacity) {
      this.capacity = capacity; 
      this.cache = new Map();
  }
  
  get(key) {
      if(this.cache.has(key)) {
          let temp = this.cache.get(key);
          this.cache.delete(key);
          this.cache.set(key, temp);
          return temp; 
      } else {
          return -1;
      }
  }
  
  put(key, value) {
      if(this.cache.has(key)) {
          this.cache.delete(key);
      }  
      this.cache.set(key, value);
      
      if(this.cache.size > this.capacity) {
          let leastUsed = this.cache.keys().next().value;
          this.cache.delete(leastUsed);
      }
  }
}


class LRUCache {
  constructor(capacity) {
    console.log("Hello Again")
    this.capacity = capacity;
    this.cache = new Map();
  }
  
  // Adding into cache
    // Change the order so this key is now at the top  
  set(key, val){
    if(this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, val);
    
    if(this.cache.size > this.capacity) {
      let least = this.cache.keys.next.value;
      this.cache.delete(least);
    } 
  }
  
  
  
  // Returning from cache
    // Update the cache so key is now recently used
  get(key) {
    if(this.cache.has(key)) {
      let temp = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, temp);
      return this.cache.get(key);      
    
    } else {
      return -1;
    }
  } 
}

var cache = new LRUCache(2);
cache.set(1,1)
console.log(cache);


// console.log(cache.set(1,2))
// console.log(new LRUCache(2), cache.set(1,1))
// console.log(LRUCache.set(1,1))









// Nov 16. Passed 

// "file{1,2,3}.txt" -> ["file1.txt", "file2.txt", "file3.txt"]
// "{june,july}logs" -> ["junelogs", "julylogs"]
// "{june,july}logs.{txt,gz}" -> ["junelogs.txt", "junelogs.gz", "julylogs.txt", "julylogs.gz"]

/*
Strategy: 
- Vars: str "file"
- Iterate thru str 
- If char == {
  - arr.split(",") [1, 2, 3]
  - If char == }

- ID position at { and }
- Slice to get chars btween 
  - .split at , 
- Concat the eles within the split arr with the 
chars pre- and post- {}

*/

// Part 2 of the question: 
function dashSeparatorMain(str) {
  let res = [];
  let arrs = [["junelogs.", "julylogs."], ["txt", "gz"]];
  
  for(let i of arrs[0]) {
    for (let j of arrs[1]) {
      
      res.push(i + j);
    }
  }
  console.log(res) 
  
}

console.log(dashSeparatorMain("x"));

// Part 1 of the question: 
function dashSeparator(str) {
  let opener = 0, 
      closer = 0, 
      res = [];

  for(let i = 0; i < str.length; i++) {
    if(str[i] === "{") {
      opener = i; 
    }
    if(str[i] === "}") {
      closer = i; 
    }
  }  
  
  if(opener === 0 && closer === 0) {
    res.push(str);
    return res
  }
  
  let data = str.substring(opener + 1, closer).split(","); 

  let preData = str.substring(0, opener - 1),
    postData = str.substring(closer + 1);  

  for(let subData of data) {
      let strToAdd = preData + subData + postData; 
    
      res.push(strToAdd);
  }

  return res; 
}


// Note the edge cases:
// - Only 1 bracket { and }, {,,,,}, {}, etc
// console.log(dashSeparator("file{1,2,3}.txt"));
// console.log(dashSeparator("{1,2,3}.txt"));
// console.log(dashSeparator("{june, july}logs"));
// console.log(dashSeparator("{}logs"));
// console.log(dashSeparator("nobrackets")); // returns ["nobrackets"]







/*
My Calendar I 

Implent a calendar class that stores events. 

If adding an event, if there's an overlap 
with an existing event, return false. 

If adding event and no overlap, add to events. 

Approach 1. Use an array of arrays that holds the events 
O(n) time 
O(n) space

Approach 2. Use a BST so we can do a binary search 
O(log n) time average. Worst case is O(n) if not balanced 
O(n) space which is okay 

*/



// This is the correct answer. 
// I didn't even come close to this. 
class Node {
  constructor(start, end) {
    this.left = null; 
    this.right = null; 
    this.start = start;
    this.end = end; 
  }
}

class MyCalendar {
    
  constructor() {
      this.root = null;
  }

  book(start, end) {
    if(!this.root) {
        return this.root = new Node(start, end);
    }
      
    return recursion(start, end, this.root);
      
    function recursion(start, end, root) {
        //recursive action
         if(root.end<=start){
               if(root.right) return recursion(start, end, root.right);
               else{
                   root.right = new Node(start, end);
                   return true;
               }
           }
           else if(root.start>=end){
               if(root.left) return recursion(start, end, root.left);
               else{
                   root.left = new Node(start, end);
                   return true;
               }
           }
         
           // base case
           else{
               return false;    
           }
      }
  }
}