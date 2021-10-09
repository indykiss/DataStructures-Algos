
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

Strat: Custom sort
All the eles with lets go first. Ignore the nums for now.
Then all the eles with dig. Order by num

Treat the log like 2 different case. Loop through log, and push all lets in 1 arr. 
Push all dig in seond arr. Splice arrs together, with letters ordered. 

Lesson: String manipulation can be complicated. Should learn how to use .substr
IDK. THIS ANSWER DOESNT EVEN PASS THE TESTS. 
But I've spent too much time on this already. 
*/

/*
LocaleCompare basics:

letters.sort((a,b) => 
    let strA = "cat"
    let strB = "bat"

    return strA.localeCompare(strB) will return 1 because it's true 
    Returning 1 means sort will sort a before b 

    Returning 0 (which would be strB.localeCompare(strA)) would mean
    b is sorted before a
)

*/

var reorderLogFiles = function(logs) {
    // Create separate arrs for letter and digit logs
    let letters = [],
        digits = []
    
    // Separate logs into letters and digits
    logs.forEach(log => {
        let substr = log.substr(log.indexOf(' ') + 1);
        let isDigit = !isNaN(Number(substr.charAt(0)));
        
        if(isDigit) {
            digits.push(log);
        } else {
            letters.push(log);
        }
    });
    
    // Sort letters arr 
    letters.sort((a,b) => {
        let strA = a.substr(a.indexOf(' ') + 1)
        let strB = b.substr(b.indexOf(' ') + 1)
        
        if(strA === strB) {
            a.localeCompare(b);
        } 
        return strA.localeCompare(strB);
    })
    // Push together and return 
    return [...letters, ...digits];
};