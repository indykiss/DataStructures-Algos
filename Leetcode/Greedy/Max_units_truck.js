


/*
Maximum Units on a Truck

You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

numberOfBoxesi is the number of boxes of type i.
numberOfUnitsPerBoxi is the number of units in each box of the type i.
You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

Return the maximum total number of units that can be put on the truck.

boxTypes = [[1,3],[2,2],[3,1]], truckSize = 4
Output: 8

Brute force/ greedy strategy:  O(n log n)
- Sort by # of units , desc 
- Iterate thru, decrement capacity # 
- Increment unitCounter for # of units in our box 
- Decrement the # of boxes available, in our boxTypes 
*/


var maximumUnits = function(boxTypes, truckSize) {
    
    let boxTypesSorted = boxTypes.sort((a,b) => b[1] - a[1]); 
    
    let capacity = truckSize, 
        units = 0; 
    
    for(let i = 0; i< boxTypesSorted.length; i++) {
        let box = boxTypesSorted[i]; 
        
        while(box[0] > 0 && capacity > 0) {
            units += box[1]; 
            box[0]--;  
            capacity--;  
        }
        
        if(capacity === 0) {
            break;
        }
    }
    return units; 
};




