

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/*
Employee Importance


Strategy: O(n) time, n being length of object/ # of people in the object, 
Space: O(n), we save 2 hashs
- Iterate thru object, create a hash of: {ID: val}
    - Add uniqId to hash with own person's val 
- Iterate thru object, creating a hash of {ID: totalValue}
    - totalVal += thisPersonsVale
    - Iterate thru subords, use the hash we just made, add that val 
    to totalVal 
- return total importance of the id given

Given:
{[ID, ImportanceValue, [arr of people who report to them]]}

Return:
{ID: totalOfThemPlusSubordi}

Edge:
- Chain of people : only count direct subordinates 
 - 1 : [2,3], 2 :[4, 5]
- Guaranteed to have sequential IDs : no 
    - 1, 2, 3... or posible 325, 46, 135
- Invalid inputs:
    [1, , [2,3]]
- Duplicate IDs (prepromotion info and postpromotion info in same DS)
    [1, 10, [2,3]], [1, 11, [2,3,4]]
- Co-managers possible? 
- Possible to not have the ID in employees?  
*/


// Doesnt pass tests bc of weird input, but technically is correct 
var GetImportance = function(employees, id) {
    const org = makeChart(employees);
    let val = 0; 
    if(org.has(id)) {
        val += lookupImportanceOf(id, org);         
    }
    return val; 
};

function makeChart(employees) {
    let org = new Map();
    for(const employee of employees) { // {ID, Val, [subors ids]}
        org.set(employee.id, employee);
    }   
    return org;
}

function lookupImportanceOf(id, org) {
    let employee = org.get(id),
        val = employee.importance,
        subords = employee.subordinates;
    
    if(subords.length === 0) return val;
        
    for(let subordID of subords) {   
        val += lookupImportanceOf(subordID, org);; 
    }    
    return val;
}




