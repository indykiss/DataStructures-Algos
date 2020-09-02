

/* We have a N times N matrix that resemble s u d o k u
 Write an algo that checks if the matrix given is valid or not. 
*/

function checkSud(matrix) {
    let n = matrix.length
    // Check that input is valid
    if(n == 0) return "INVALID"
    // Check if matrix = 1. Valid
    if(n == 1 && matrix[0][0] == 1) return "VALID"
    // If matrix.length is 1 and the value ISNT 1, invalid
    if(n == 1) return "INVALID"

    let validity = true;

    // check if there are invalid rows
    for(let row = 0; row < n; row++) {
        let temp = new Set();
        for(let col = 0; col < n; col++) {
            temp.add(matrix[row][col]);
        }
        validity = isRowColValid(temp, n, validity);
    }

    // check if there are invalid rows
    for(let col = 0; col < n; col++) {
        let temp2 = new Set();
        for(let row = 0; row < n; row++) {
            temp2.add(matrix[row][col]);
        }
        validity = isRowColValid(temp2, n, validity);
    }

    // If true, return valid. If false, return invalid.
    return (validity ? "VALID" : "INVALID")

}

// Helper that looks at if the set has exactly 1 to N number of ele in the matrix
function isRowColValid(set, n, validity) {
    for(let i = 0; i < n; i++) {
        // check if set has "2", or any 0s
        if(set.has(i) == false || set.has(NaN) || set.has(0)) {
            validity = false;
        }
    }
    return validity; 
}
