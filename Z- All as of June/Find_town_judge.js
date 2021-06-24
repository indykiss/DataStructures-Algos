
/*
Find the Town Judge

In a town, there are N people labelled from 1 to N.  
There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:
- The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties 1 and 2.
- You are given trust, an array of pairs trust[i] = [a, b] 
representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label 
of the town judge.  Otherwise, return -1.
*/


var findJudge = function(n, trust) {
    let trustingIn = new Array(n).fill(0),
        trusters = new Array(n).fill(0); 
    
    for(let [truster, trustee] of trust) {
        trustingIn[trustee-1]++; 
        trusters[truster-1]++;
    }
    
    // Find the judge
    for(let i = 0; i < n; i++) {
        if(trustingIn[i] === n-1 && 
          trusters[i] === 0) {
            return i+1;
        }
    }
    return -1;
};
