

/*
Nested List Weight Sum

Given a nested list of integers, return the sum of all integers in the list weighted by their depth.

Each element is either an integer, or a list -- whose elements may also be integers or other lists.

Input: [[1,1],2,[1,1]]
Output: 10 
Explanation: Four 1's at depth 2, one 2 at depth 1.
*/



// Am fucked if I get this. IDK what this is. Just copied 
const depthSum = (nestedList) => {
    return sumVals(nestedList, 1, 0);

    function sumVals(nestedList, level, i) {
        if(nestedList.length <= i) return 0;

        const nextElemSum = sumVals(nestedList, level, i + 1);

        if(nestedList[i].isInteger()) {
            return nestedList[i].getInteger() * level + nextElemSum;
        }

        return sumVals(nestedList[i].getList(), level + 1, 0) + nextElemSum;

    }
}