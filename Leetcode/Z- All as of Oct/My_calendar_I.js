


/*
My Calendar I


Implement a MyCalendar class to store your events. A new event 
can be added if adding the event will not cause a double booking.

Your class will have the method, book(int start, int end). 
Formally, this represents a booking on the half open interval 
[start, end), the range of real numbers x such that start <= x < end.

A double booking happens when two events have some non-empty 
intersection (ie., there is some time that is common to both events.)

For each call to the method MyCalendar.book, return true 
if the event can be added to the calendar successfully without 
causing a double booking. Otherwise, return false and do not add 
the event to the calendar.

Your class will be called like this: MyCalendar cal = 
new MyCalendar(); MyCalendar.book(start, end)


MyCalendar();
MyCalendar.book(10, 20); // returns true
MyCalendar.book(15, 25); // returns false
MyCalendar.book(20, 30); // true 
*/

class Node {
    constructor(start, end) {
      this.left = null; 
      this.right = null; 
      this.start = start;
      this.end = end; 
    }
  }
  
class MyCalendar {
    constructor() {
        this.root = null;
    }
  
    book(start, end) {
        if(!this.root) {
            return this.root = new Node(start, end);
        }
        
       return recursion(start, end, this.root);
        
       // Run a recursive function to add this new event 
       // where it should go, depending on if it's left or right 
       // of the root 
       function recursion(start, end, root) {
           if(root.end <= start){
                 if(root.right) return recursion(start, end, root.right);
                 else{
                     root.right = new Node(start, end);
                     return true;
                 }
             }
             else if(root.start >= end){
                 if(root.left) return recursion(start, end, root.left);
                 else{
                     root.left = new Node(start, end);
                     return true;
                 }
             }
          // If we've never returned true, then we've hit an overlap. Return false
             else{
                 return false;    
             }
       }
    }
}