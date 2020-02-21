/*
Count the number of times a appears in an string with 
an infinite length

- Repeat the string of s until the output's length = n
- In this new string, count how many times a appears

Strategy:
- How often does the string get repeated
- Compute this number then multiply that by 
the number of "a"s that are inthe string
*/

// Sample input: (aabc, 10) -> aabcaabcaa -> Output: 6
// Complete the repeatedString function below.
function repeatedString(s, n) {
    const repeats = n % s.length;
    const repeatMath = (n - repeats)/ s.length;
    let count = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "a") {
            count += repeatMath + (i < repeats);
        }
    }
    return count;
}
