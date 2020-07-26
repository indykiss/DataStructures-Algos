

// Build a BST


class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if(value >= this.value) {
              if(this.right === null) {
                  this.right = new BST(value);				
              } else {
                      this.right.insert(value);
              }
        } else {
            if(this.left === null) {
                this.left = new BST(value);				
            } else {
                this.left.insert(value);
            }
        
      }
      return this;
    }
  
    contains(value) {
      // Write your code here.
    }
  
    remove(value) {
      // Write your code here.
      // Do not edit the return statement of this method.
          // If BST has only 1 node, no remove
      return this;
    }
  }

