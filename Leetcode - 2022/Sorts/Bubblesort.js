/*
Do a bubble sort. 

Take an array and returns a sorted array. 

As we go through the array, we swap the 
numbers that are out of order. 
We "bubble" up or bubble down the number
until it's all sorted. 

*/


// O(n^2) time and O(1) space
	// Need to do a second pass through
	// to check that we're done 
	// If we go through the array in a round
    // w/o swapping? Yes. Ok done
    
    // We use the counter to count how many numbers in the arr
    // have been sorted at the end. Ex: we know after 1 round
    // of [4,3,2,1] that [3,2,1,4] the 4 is done. So 
    // we make the loop through this array smaller as we go. 
    // Slightly optimizes the algo
function bubbleSort(arr) {
	let isSorted = false;
	let counter = 0;
	while(!isSorted) {
		isSorted = true;
		for(let i = 0; i < arr.length - 1 - counter; i++) {
				if(arr[i] > arr[i+1]) {
					[arr[i], arr[i+1]] = [arr[i+1], arr[i]]
					isSorted = false;
				}
			}
		counter++
	} 
	return arr;
}