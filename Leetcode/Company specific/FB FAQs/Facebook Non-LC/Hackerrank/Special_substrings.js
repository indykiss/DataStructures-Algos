/*
Special substring = all chars are 1 type OR all chars are 1 type except middle char

Goal: Return the number of special substrings are possible given a string 

Input:
"aba" => [a, aba, a, b, aa] => Return 4

- Assume all elements are chars/ not nums or punct? Yes 
- Dupes allowed? 

Lesson learned:
Be sure to completely understand the question first. 
I jumped into hashes thinking that it's any substr permutations with the  given chars. BUT it's subtrings of the str in the order that it's in. SO just need to look at the chars surrounding the chars we're looking at throughout the loop. 

Strat #1:
- Loop through the string once. Keep track of count
- Check for these situations: 
    - Increase for each char in the str
    - Increase when the next char over has the same value 
        - Track this index
    - Increase when the "aba" situation arises

*/

function substrCount(n, s) {
    let count = 0; 

    for(let i = 0; i < n; i++) {
        let temp = i;
        let otherI = 0; 

        while(s[i] == s[temp] && temp < n) {
            count++; 
            otherI++; 
            if(s[i] !== s[temp+1] && s[i] == s[temp + 2]) {
                let strA = s.substr(i, otherI)
                let strB = s.substr(temp+2, otherI);

                if(strA === strB && strA.length > 0 && strB.length > 0) {
                    count++;
                    otherI = 0;
                }
            }
            temp++;
        }
    }
    return count;
}
