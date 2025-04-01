

/*
Unique Email Addresses
https://leetcode.com/problems/unique-email-addresses/ 

*/

var numUniqueEmails = function(emails) {
    let tracker = new Set(); // tracking uniq emails
        
    for(let email of emails) {
        
        let emailArr = email.split("@"), // [local, domain]
            local = emailArr[0], 
            domain = emailArr[1]; 
        
        let beforeFirstPlus = local.split("+")[0];
        let localNoPeriod = beforeFirstPlus.split(".").join(""); 
        
        let simplifiedEmail = localNoPeriod + "@" + domain;
                
        if(tracker.has(simplifiedEmail)) {
            continue;
        } 
    
        tracker.add(simplifiedEmail);
    }
    return tracker.size;
};