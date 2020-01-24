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


