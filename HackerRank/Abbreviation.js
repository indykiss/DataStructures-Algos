/*
Abbreviation 

NOT DONE: I don't understand parts of this one.

- We can capitalize whatever we want in strA (don't have to)
- We can delete any lowercase letters in strA
- Strs are not sorted Strs can be different lengths. 

We have strA and strB. Is it possible to change strA such that its equal to strB? 

Strat:
- Make the string an array. Sort it. 
    - Maybe not a necessary step
- Loop through chars in strA. 
    - If the char is uppercased already, check if strB has the same upper cased ele
        - If it doesn't, then there is no way to match. Return No
    - If it's a lower case, we want to eval:
        - Do we need to upperCase it? Or delete it? 
            - IF the upperCase version exists in the arr AND an upper 
            case version does not exist in strA, we upperCase it 
            - IF upperCase version doesn't exist in strB, we delete

Strat 2: 
Recursive solution 
*/

// Complete the abbreviation function below.
function abbreviation(a, b) {
    // Track the things we've seen 
    const seen = {}

    // Make a key. If we've seen it, return it 
    const key = `${a}1${b}`
    if(seen[key]) {return seen[key]}
    
    // If we're done with checking on the chars in B
    if(b.length === 0) {
        if(seen[key] = !/A-Z/.test(a)){
            return "YES"
        } else {
            return "NO"
        }
    }
    // If we're 
    if(a.length < b.length) {
        seen[key] = "NO"
        return "NO"
    }
    if(a[a.length - 1] === a[a.length - 1].toUpperCase()) {
        if(a[a.length - 1] !== b[b.length-1]) {
            seen[key] = "NO"
            return "NO"
        }
    const result = abbreviation(a.substr(0, a.length - 1),
    b.substr(0, b.length - 1));

    seen[key] = result
    return result
    }
    const modifiedA = a.substring(0, a.length - 1)

    // ??? 
    const result = abbreviation(modifiedA, b) === 'YES' || 
    abbreviation(modifiedA + a[a.length - 1].toUpperCase(), b) === 'YES' 
        ? 'YES'
        : 'NO'
    seen[key] = result;
    return result;

    return abbreviation(a,b)
}
