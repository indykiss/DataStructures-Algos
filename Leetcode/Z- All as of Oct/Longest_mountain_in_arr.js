

// In leetcode, this is called Longest Mountain in Array, medium



// Algoexpert: 
/*
Longest peak

Given an arr of ints, find the length of the 
highest peak.

A peak is where there's a series of strictly
increasing nums then a series of strictly decreasing 
nums. 

S1: Find the num where both the left and right
nums are smaller than it. 
S2: Track the length? 

*/

function longestPeak(arr) {
	let peakLength = 0; 
	let i = 1;
	
	// ID peaks
	// ID lengths, if longest
	
	while (i < arr.length - 1) {
		// Save time in the loop and iterate if we don't have a peak
		// We've IDed a peak
		let peak = (arr[i] > arr[i-1] && arr[i] > arr[i+1])
		if(!peak) {
			i++;
			continue;
		}	
		
		// Find start of mountain
		let leftID = i - 2;
		while(leftID >= 0 && arr[leftID] < arr[leftID + 1]) {
			leftID--;
		}
		// Find end of mountain 
		let rightID = i + 2;
		while(rightID < arr.length && arr[rightID] < arr[rightID - 1]) {
			rightID++
		}
		// Find the length of the mountain and change i;
		peakLength = Math.max(peakLength, rightID - leftID - 1);
		i++;
	}
	
	return peakLength;
}

