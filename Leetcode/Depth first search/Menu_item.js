
/*
Given an array of strings that represents a book content 
menu with each string representing a menu item, print out the menu hierarchy
 
Sample menu item:
menu_id,menu_name,parent_id
 
Example input:
[
"1,Integers,2", 
"5,Datastructures,10", 
"2,Variables,10", 
"10,Chapter 1: Getting Started,12", 
"12,PART I: Basics,", 
"50,PART II: Projects,"
]

Example output:

12,PART I: Basics
  10,Chapter 1: Getting Started
    2,Variables
      1,Integers
    5,Datastructures
50,PART II: Projects


Strategy:
- If there are ints at end of str, then belong to 
a higher level category
- Nums at end of the str determines where it is nested under 
- Tree structure, based on parent_id

- DFS
{
"12" : ["10"].. 
"10" : ["2", "5"]..
}

- Res arr
- Iterate thru arr
  - Look at the first num 
    - Search for any/ all menu items that end with the ID that
    is the beg of the first menu item
    - As we find items, save to an hash table 

super_root = [12, 50]
  DFS on each super root 

- DFS, access hash table
  - DFS on super roots
  - ID all the vals/ children of the val 
  - Add the eles into an arr
  - arr.split("/n")
  - extra spaces for tabs

*/


function menuItems(arr) {
  let tracker = {}, 
    superRoot = [], 
    res = []; 
  
  for(let item of arr) {
    let id, parentId;
    let chars = item.split(',');
  
    id = chars[0];
    
    // [1, integers, 2]
    if(chars.length === 3) {
      parentId = chars[2];
    } else {
      superRoot.push(id);
    }

    if(tracker[parentId]) {
      tracker[parentId].push(id);   
    } else if(parentId) {
      tracker[parentId] = [id]; 
    }
  } 
  
  while(superRoot.length > 0) {
    let root = superRoot.pop(); 
    
    dfs(root);
  }
  
  return res; 
  
  function dfs(root) {
    if(!root) return; 
    let rootStr = "" + root + "";

    let children = tracker[rootStr]; 

    console.log(rootStr);
          
    for(let i = 0; i < children.length; i++) {
      let child = children[0];
      console.log(child);
      dfs(child);
    }
  }
}


console.log(menuItems([
"1,Integers,2", 
"5,Datastructures,10", 
"2,Variables,10", 
"10,Chapter 1: Getting Started,12", 
"12,PART I: Basics", 
"50,PART II: Projects"
]));



