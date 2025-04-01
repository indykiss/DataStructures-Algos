

/*
Algoexperts

Class photos

You are photographer who needs to keep red shirted students 
in the same row, same with the blue shirted students. 

Exact number of red and blue shirted students. 

Also need the back row (first row) all need to be taller
than the students in front of them. 

You're given 2 arrays; red shirt heights and blue shirt heights. 

Can you arrange the kids in 2 rows to match the height requirement? 
Return true or false. 

red: [5,8,1,3,4]
blue: [6,9,2,4,5]
=> true

*/


function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b-a);
      blueShirtHeights.sort((a,b) => b-a); 
      
      let whoInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ?
                  "red" : "blue";
      for(let i = 0; i < blueShirtHeights.length; i++) {
          let redShirtH = redShirtHeights[i],
                  blueShirtH = blueShirtHeights[i];
          
          if(whoInFirstRow === "red") {
              if(redShirtH >= blueShirtH) return false;
          } else if (blueShirtH >= redShirtH) {
                  return false;
          }
          
      }
      return true;
  }
  