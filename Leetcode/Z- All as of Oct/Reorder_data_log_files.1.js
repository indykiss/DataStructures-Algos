/*
Reorder data in log files. 

You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:
Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  
It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  
The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  
The digit-logs should be put in their original order.

Return the final order of the logs.

Input: 
logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: 
["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]

*/

var reorderLogFiles = function(logs) {
    let digits = [], letters = [];

    logs.forEach(l => {
        let substr = l.substr(l.indexOf(' ') + 1);
        let isDigit = !isNaN(Number(substr.charAt(0)));
        if(isDigit) {
            digits.push(l);
        } else {
            letters.push(l);
        }
    });
    
    // sort letters perspectively
    letters.sort((a,b) => {
        let strA = a.substr(a.indexOf(' ') + 1);
        let strB = b.substr(b.indexOf(' ') + 1);
        
        if(strA === strB) return a.localeCompare(b);
        
        return strA.localeCompare(strB);
    });
    
    return [...letters, ...digits];
};
