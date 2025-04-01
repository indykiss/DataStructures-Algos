
/*
Remove All Adjacent Duplicates In String

Given a string s of lowercase letters, a duplicate removal consists
of choosing two adjacent and equal letters, and removing them. 

We repeatedly make duplicate removals on S until we no longer can. 

Return the final str after all dupe removals. Guaranteed that the answer is unique.

"abbaca" => 'ca'
Deletes the "bb" then deletes the remaining first "aa"
*/


var removeDuplicates = function(S) {
    let res = [],
        arr = S.split('')
    
    for(let char of arr) {
        let next = res.pop()
        if(char !== next) {
            res.push(next, char);
        }
    }
    return res.join('');
};

