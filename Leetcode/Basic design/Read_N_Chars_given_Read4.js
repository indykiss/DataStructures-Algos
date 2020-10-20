


/*
Read N Characters Given Read4


Given a file and assume that you can only 
read the file using a given method read4, 
implement a method to read n characters.



The question is asking for a C-style api where an output buffer is 
passed in which you are required to fill in and at the same time 
return the number of characters that you read and put in the buffer.

In javascript you can just look at the buffer's length to see how many 
characters were added to it so that was part of my initial confusion 
where I thought I am given the inputStream in buf and I am only supposed 
to access it using read4 and return what was I able to read.

With that clarification, the problem just reduces to calling read4 multiple 
times, if needed, to keep on reading from the input and then managing the 
output into the passed in output buffer to put only the requested number 
of characters in it. 
*/


// Oct, FB. SUPER DON'T UNDERSTAND THIS
var solution = function(read4) {
    let internalBuf = [];
    
    return function(buf, n) {
        let readChars = 0;
        while(n > 0) {
            if(internalBuf.length === 0) {
                if(read4(internalBuf) === 0) {
                    return readChars;
                }
            }
            buf.push(internalBuf.shift());
            readChars++;
            n--;
        }
        return readChars;
    };
};



