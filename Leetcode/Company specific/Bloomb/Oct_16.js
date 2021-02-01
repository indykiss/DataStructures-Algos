


// Input:  "b7d1a32z"
// Output: "a1b2d37z"


function sorterOfCharsInt(str) {
    
    let arr = str.split(''),
        charArr = [],
        intArr = [],
        hash = {};
    
    // "b7d1a32z"
    for(let i = 0; i < arr.length; i++) {
        let ele = arr[i]
        
        // IDed an integer & add into intArr & hash
        if(ele.isInt()) {
            intArr.push(ele);
            hash[i] = "int"; 
        } else {
            charArr.push(ele);
            hash[i] = "char";
        }
    }
    // charArr = [b, d, a, z]
    // intArr = [7, 1, 3, 2]
    // {0: char, 1: int, 2: char, ....}
    
    charArr = charArr.sort((a,b) => b - a); // [a, b, d, z], lamda drop?
    intArr = intArr.sort((a,b) => b - a) // [1, 2, 3, 7] lamda drop?
    
    let resArr = []; // optimize: str instead
    let j = 0;
        
    // fix? 
    
    while(charArr.length > 0 || intArr.length > 0) {
        if(hash[j] === "char") {
            resArr.push(charArr.shift());
            j++;
        } else if(hash[j] === "int") {
            resArr.push(intArr.shift());
            j++;
        }
        
        // [], [8, 9]
        // if(charArr.length === 0 && intArr.length > 0) {
        //     resArr.push(...intArr);
        //     // res[char, 8, 9]
        // }
    }
    
    // resArr: [a, 1,b,2,d,3,7,z]
    return resArr.join("")
    // "a1b2d37z"
}


