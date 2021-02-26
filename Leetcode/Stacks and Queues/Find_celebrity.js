/*
Problem: Find a Celebrity

- There’s 1 or 0 celebrity in the set.
- It’s a set of people<string> names.
- We are given: function knows(a, b) 
    true -> a knows b
    false -> a doesn’t know b
- return the celebrity or null if there isn’t any.

Celebrity:
- Knows no other person in the set
- Everyone in the set knows the celebrity
- Because of this, we can always eliminate EITHER a or b when 
we call knows(a,b)

Strategy: O(n):
- Use a stack of names to find a & b
- While stack.length > 1
    - Pull the top 2 people to: 
    - Run a & b thru knows(a,b) 
        If true, remove a from set. False: remove b 
- When at the end, need to check if person left in stack is
celeb or not so need to run them through knows with the people
input again
- If maybeCeleb knows someone, return null
*/


function findCeleb(people) {
    let stack = [...people]; 

    while(stack.length > 1) {
        let personA = stack.pop(),
            personB = stack.pop();

        if(knows(personA, personB)) {
            stack.push(personB);
        } else {
            stack.push(personA);
        }
    }

    let maybeCeleb = stack.pop();

    // stack's last person still might not be celeb so need to check 
    for(let person of people) {
        if(knows(maybeCeleb, person)) {
            return null; 
        }
    }
    
    return maybeCeleb; 
}


// Eliminates a or b based on knowing/ not being known 
function knows(a, b) {
}
