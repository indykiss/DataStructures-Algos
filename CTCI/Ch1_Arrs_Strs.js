/* 
May 06, 2020
My plan for the next 4-5 weeks is to study Cracking
the coding interview. 

It's a classic and one I haven't done tons with. 
I read the chapters but didn't do all the problems, 
so I'm starting from scratch at chapter 1. 

I'm using this repo to track my progress. 

Ideally, I can finish ~4 chapters a week. Then have 1
week totally off. If I can't finish ~4 chapters, then 
I have an extra week to work on it. Plus still take a 
couple of days off. 
I'm building in an automatic Sunday off rest day. :) 
Hopefully that'll prevent burnout. 
*/

/* Arrays and Hashes 
Arrays: Easy manipulation 
Hashes: Great for quick lookups 
*/


// Q1: Implement an algo to determine if a str has all unique chars. Without using
// a new datastructure? 


// "abc" => true 
// "abbc" => false


// With a new data structure
var uniqStr = function(str) {
    const tracker = new Set(); 
    const arr = str.split('');

    arr.forEach(char => {
        if(tracker.has(char)) {
            return false;
        } else {
            tracker.add(char);
        }
    });
    return true;
}

// Without a new data structure
var uniqStrNoDS = function(str) {
    for(let i = 0; i < str.length; i++) {
        let char = str[i]
        if(str.slice(-1, i).includes(char)) {
            return false; 
        }
    }
    return true;
} 



// Q2: Implement a function void reverse in C/C++ which reverse a null terminated str. 
// SKIP

// Q3: Given two strs, write a function to decide if one is a permutation of the other. 

// cat, tac => true 
// {c: 1, a: 1, t:1} => post sort: {a:1, c:1, t:1}
// {t: 1, a:1, c:1} => post sort:  {a:1, c:1, t:1}
// can sort if we need to to make sure hashes are actually equal 
// if hashes are equal, then true. 

var permutation = function(str1, str2) {

    const hash1 = hashMaker(str1);
    const hash2 = hashMaker(str2);

    if(hash1 === hash2) {
        return true;
    } else {
        return false;
    }
}

// sort => O(n * log n)
var hashMaker = function(str) {
    const hash = {};
    str = str.lowerCase().sort((a,b) => a - b);

    for(let i = 0; i < str.length; i++) {
        if(hash.has(str[i])) {
            hash[str[i]] = hash[str[i]] + 1;
        } else {
            hash[str[i]] = 1; 
        }
    }
    return hash;
}



// Q4: Replace all spaces in a string with "%20."
// "I like candy"
// [I, like, candy]
// "I%20like$20candy"

var replaceSpace = function(str) {
    const arr = str.split(' ');
    return arr.join('%20');
}

var replaceSpaceBetter = function(str) {
    // str: "I like C"
    const arr = str.split('');
    // arr: [I, ,l,i,k,e, ,c]

    const res = [];

    for(let i = 0; i < str; i++) {
        if(str[i] === " ") {
            res.push('%20');
        } else {
            res.push(str[i]);
        }
    }
    // res: [I,%20,l,i,k,e,%20,C]

    return res.join('');
    // "I%20like%20C"
}
