/*
Restore IP Addresses

Given a string s containing only digits, return 
all possible valid IP addresses that can be obtained 
from s. You can return them in any order.

A valid IP address consists of exactly four integers, 
each integer is between 0 and 255, separated by single 
dots and cannot have leading zeros. For example, 
"0.1.2.201" and "192.168.1.1" are valid IP addresses 
and "0.011.255.245", "192.168.1.312" and "192.168@1.1" 
are invalid IP addresses. 

 
Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]

*/


var restoreIpAddresses = function(s) {
    if (s.length > 12 || s.length < 4) return [];
    const result = [];
    recurse(s, []);
    return result;

    // DFS using stack as currSet
    function recurse(s, currSet) {
        if (currSet.length === 4 && !s.length) {
            let eleToAdd = Array.from(currSet).join('.');
            result.push(eleToAdd);
            return;
        }
        
        for (let i = 1; i < 4; i++) {
            if(s.length < i) continue; 
            const str = s.slice(0,i);
            if ((str.length > 1 && str[0] === '0') || Number(str) > 255) continue;
            currSet.push(str);
            recurse(s.slice(i), currSet, result);
            currSet.pop();
        }
    }
}

