

/*
Write a simple breadth first search that does this:

Input: 
    A
   / \
  B   C
 / \   \
D   E   F

Output: [A,B,C,D,E,F]

*/

class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }
  
    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }
  
    breadthFirstSearch(array) {
        array.push(this.name);
          
        for(let i = 0; i < this.children.length; i++) {
            let child = this.children[i];
          child.breadthFirstSearch(array);
        }
        return array;
    }
  }


  