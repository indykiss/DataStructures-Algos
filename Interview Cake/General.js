/*
Write an algorithm to find the intersection of two
users' love rectangles, on an XY axis. 

Assumptions: Rectangles are always straight, never diagonal. 

Edge/ possible Qs: XY always positive? 

Strat: Divide into subproblems
1. Write out the rectangle object parameters; left x, 
bottom y, width, height 
2. Create helper functions for x overlap and for y overlap

Thoughts: Create an object that tracks the volume of each rec. 
Brute force. Nested loop that checks every possible XY value 
if both recs exist there. If it does, push into return rect.



Math thing. 

Lesson: FOLLOW INTUTITION DAMN IT. 

*/ 

// Rectangle object
// const myRectangle = {

//   Coordinates of bottom-left corner
//   leftX: 1,
//   bottomY: 1,

//   Width and height
//   width: 6,
//   height: 3,
// };


function findRectangularOverlap(rect1, rect2) {

  // Calculate the overlap between the two rectangles
  const xOverlap = findXOverlap(rect1, rect2);
  const yOverlap = findYOverlap(rect1, rect2);

  if(!xOverlap.widthOverlap || !yOverlap.heightOverlap) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  }

  return { leftX: xOverlap.startingPoint, 
  bottomY: yOverlap.startingPoint, 
  width: xOverlap.widthOverlap, 
  height: yOverlap.heightOverlap};
}



// Find the whole overlap across the x axis
// The range that starts furthest to the right is always
// the left starting point of the overlap 
function findXOverlap(rect1, rect2) {
  
  const highestStartPoint = Math.max(rect1.leftX, rect2.leftX)
  const lowestEndPoint = Math.min(rect1.leftX + rect1.width, 
  rect2.leftX + rect2.width)

  // Cases: Ranges overlap, 1 rect is completely in another, 
    // ranges don't overlap, touch at 1 single point
    // If only touches or doesn't touch, no overlap then
  if(highestStartPoint > lowestEndPoint ) {
    return {startPoint: null, width: null}
  }
  
  const widthOverlap = lowestEndPoint - highestStartPoint;
  
  return {startingPoint: highestStartPoint, widthOverlap: widthOverlap};
}


// Adapt the above for Y and heights
// Looking for the lowest Y point
function findYOverlap(rect1, rect2) {

  const highestStartPoint = Math.max(rect1.bottomY, rect2.bottomY); 
  const lowestEndPoint = Math.min(rect1.bottomY + rect1.height,
  rect2.bottomY + rect2.height);
  
  if(highestStartPoint >= lowestEndPoint) {
    return {startPoint: null, width: null}
  }
  
  const heightOverlap = lowestEndPoint - highestStartPoint;
  
  return {startingPoint: highestStartPoint, heightOverlap: heightOverlap};
  
}








/*
Write a class TempTracker with these methods:

insert()—records a new temperature

getMax()—returns the highest temp we've seen 

getMin()—returns the lowest temp we've seen

getMean()—returns the mean of all temps we've seen 

getMode()—returns a mode of all temps we've seen 
- If multiple modes, return any

Optimize for space and time. 
Favor speeding up the getter methods getMax(), 
getMin(), getMean(), and getMode() over speeding up
the insert() method.

Input: Fahrenheit integers, 0-110 

Implement methods to track the max, min, mean, and mode


*/


class TempTracker {
  constructor() {
    // For min and max:
    this.minTemp = null;
    this.maxTemp = null;
    // For mean:
    this.numOfTemps = 0;  
    this.tempSum = 0;
    this.mean = 0;
    // For mode:
    this.maxOccurences = 0;
    this.mode = null;
    this.occurences = new Array(111).fill(0);
  }
  
  insert(temperature) {
    // For min/ max
    if(this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    }
    if(this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    // For mean:
    this.numOfTemps++;
    this.tempSum += temperature;
    this.mean = this.tempSum/ this.numOfTemps;
    // For mode: 
    this.occurences[temperature]++;
    if(this.occurences[temperature] > this.maxOccurences) {
      this.mode = temperature;
      this.maxOccurences = this.occurences[temperature];
    }
  }

  getMax(temp) {
    return this.maxTemp;
  }

  getMin(temp) {
    return this.minTemp;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}

// O(1) time and O(1) space


