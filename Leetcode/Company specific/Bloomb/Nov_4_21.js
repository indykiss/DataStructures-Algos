
/*
Build class that counts steps from n to 1. 

If n is even, n = n/2
If n is odd, n = 3 * n + 1

Make it constant time complexity 
*/

class counter {
    constructor() {
        this.memo = {};
    }

    steps(n) {
        let temp = n, 
            steps = 0;

        while(temp != 1) {
           if(temp % 2 == 0) {
               temp = temp/2;
               if(this.memo[temp]) {
                   return this.memo[temp] + steps; 
               }
           } else {
               temp = 3 * temp + 1; 
               if(this.memo[temp]) {
                   return this.memo[temp] + steps;
               }
           }
        }
        let temp2 = 1, 
            tempSteps = steps; 
        // add to memo
        while(temp2 <= n) {
            this.memo[temp2] = steps; 

            if(temp2 % 2 == 0) {
                temp2 = temp2 * n; 
            } else {
                temp2 = (temp2/3) - 1;    
            }
            tempSteps--; 
        }

        return steps;
    }
}