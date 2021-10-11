
// https://leetcode.com/problems/design-an-ordered-stream/

class OrderedStream {
    constructor(n) {
        this.point = 0; 
        this.stream = []; // max size of n
    }
    
    insert(id, val) {
        let chunk = [];  // result arr to result
        // use arr idx as uniq ID. no need to use hash 
        this.stream[id-1] = val; 
        
        // idk 
        while(this.stream[this.point]) {
            chunk.push(this.stream[this.point]); 
            this.point++;
        }
        
        return chunk;
    }
    
    
}