
/*
Is Subsequence

Given a string s and a string t, check if s is subsequence of t.

A subsequence of a string is a new string which is formed 
from the original string by deleting some (can be none) of
the characters without disturbing the relative positions of the 
remaining characters. (ie, "ace" is a subsequence of "abcde" while "aec" is not).

Follow up:
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and 
you want to check one by one to see if T has its subsequence. In this 
scenario, how would you change your code?
*/

// Algoexpert:
// O(n) time and O(1) space
function isValidSubsequence(array, sequence) {
	let arrID = 0; 
	let seqID = 0; 
	
	while(arrID < array.length && 
		  seqID < sequence.length) {
		if(array[arrID] == sequence[seqID]) {
			seqID = seqID + 1;
		} 
		arrID = arrID + 1;
	}
	return seqID == sequence.length; 
}

function isValidSubsequence(array, sequence) {
	let seqID = 0; 
    for(let arrID = 0; arrID < array.length; arrID++) {
        // this part maybe lets us break earlier, saving some time complexity
        if(seqID == sequence.length) return true;
        if(array[arrID] == sequence[seqID]) seqID++
    }
	return seqID == sequence.length;
}




// Leetcode:
function isSubsequence(array, sequence) {
	let arrID = 0; 
	let seqID = 0; 
	
	while(arrID < array.length) {
        if(seqID == sequence.length) return false; 
		if(array[arrID] == sequence[seqID]) seqID = seqID + 1;
		arrID = arrID + 1;
	}
	return true;
}