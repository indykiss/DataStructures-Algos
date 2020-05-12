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



// Q5: Implement a method to perform string compression using counts of repeated strs. 
// aabbcc => a2b2c2 
// aabbcca => a2b2c2a1 


var strCompress = function(str) {
    let res = ""
    let counter = 1;

    for(let i = 1; i < str.length; i++) {
        if(str[i-1] == str[i]) {
            counter++;
        } else {
            res.concat(str[i]).concat(counter);
            counter = 0;
        }
    }

    if(res.length > str.length) {
        return str;
    } else {
        return res;
    }
}


// Q6: Given an image represented by an MxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. In place? 

var rotate90 = function(row, col) {
    const rotated = [];
    for(let i = 0; i < row.length; i++) {
        const temp = [];
        for(let j = col[i].length; j > 0; j--) {
            temp.push(col[i][j]);
        }
        rotated.push(temp);
    }
    return rotated;
}

// Better: Look at it like layers 
// Make the rows become columns
    // We want to swap the last element in the arr with the first, etc
        // So like w're swapping the last col w/ 1st col, etc
        // TWO POINTER APPROACH 

var rotate90 = function(matrix) {
    for(let layer = 0; layer < matrix.length/ 2; layer++) {
        let first = matrix[layer];
        let last = matrix.length - 1 - layer; 

        for(let i = first; i < last; i++) {
            let offset = i - first; 
            let top = matrix[first][i];
            // left swap with top
            matrix[first][i] = matrix[last-offset][first];
            // bottom swap with left
            matrix[last-offet][first] = matrix[last][last-offset];
            // right swap with bottom 
            matrix[last][last-offset] = matrix[i][last];
            // top swap with right
            matrix[i][last] = top;
        }
    }
}



// Q7: Write al algo such that if an element in an MxN matrix is 0, it's entire row
// AND col are also set to 0. 

var makeRowColZero = function(matrix) {
    let rowTrack = new Set();
    let colTrack = new Set();

    // store the row and col index with value 0
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] === 0) {
                rowTrack.add(row); 
                colTrack.add(col);
            }
        }
    }
    // Set rows and cols to 0 
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[row].length; col++) {
            if(matrix[row] || matrix[col]) {
                matrix[row][col] = 0;
            }
        }
    } 
}



// Q8: Assume you have a method isSubstring that checks if one word is a substring of another word. 
// Given str1 & str2, check if str1 is a rotation of str1 using only one call to isSubstring. 

// "waterbottle" => "erbottlewater"


var isSubstring = function(str1, str2) {
    if(str1.includes(str2) || str2.includes(str1)) {
        return true;
    }
}

var strRotationChecker = function(str1, str2) {
    let len = str1.length; 
    let str1str1 = "";
    
    if(len = str2.length && len > 0) {
        str1str1 = str1 + str1;
        return isSubstring(str1str1, str2);
    }
    return false;
}







