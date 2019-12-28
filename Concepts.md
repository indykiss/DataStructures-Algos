# Concepts to remember

Read me! As much as possible: https://www.geeksforgeeks.org/data-structures/



## RAM

Ram is basically like a super tall bookshelf. RAM is memory. Random access memory. 

Each shelf is a numbered address. 

Each address holds 8 bits. 
    8 bits is a byte AND: 
    Power of 2    Exact Value (X)     Approx. Value    X Bytes into MB, GB, etc.
    7             128
    8             256
    10            1024                1 thousand        1 KB
    16            65,536              64 KB
    20            1,048,576           1 million         1 MB
    30            1,073,741,824       1 billion         1 GS
    32            4,294,967,296       4 GB
    40            1,099,511,627,776   1 trillion        1 TB 

RAM is connected to a memory controller, which is connected to a processor. 
    Processor -> Memory controller -> RAM (with its address shelves of bits)
    This helps access memory randomly (don't need to go down the ladder of shelves)

A processor has a cache that basically saves recent stuff from the RAM. 

When a processor gets content from a particular memory address, the controller also sends a handful of nearby addresses. All of which gets cached. 

Think of RAM like an array; each address is numbered and contains data. 


## Binary numbers

K, let's store some stuff into those bits we've looked at. 

Normal numbers are base 10 aka decimal. B/c 0-9. 

Computer's are base 2 aka binary. 0s and 1s

How to read binary? 

    In base 10, we have 101 which means 1 hundred, 0 tens, 1 one. Each of which is a sequential power of 10: 
        10^0 = 1
        10^1 = 10
        10^2 = 100 ... 
    In base 2, we have 101. This actually adds up to 5 b/c we calculate each as a sequential power of 2: 
        2^0 = 1
        2^1 = 2
        2^2 = 4
        2^3 = 8 
    So that means we are using a mix of 1 (on) and 0 (off) and the values of the placeholder to calculate:
        1: 4 spot, so 2^2 = 4. Yes, so add 4. 
        0: 2 spot, so 2^1 = 2. No, so no add.
        1: 1 spot, so 2^0 = 1. Yes so add 1.
        BOOM. That's 5. 
            Doing another example: 100101. 
                Yes to 1, no to 2, yes to 4, no to 8, no to 16, yes to 32. 
                Adds to 37! 


## Fixed width integers

How many different numbers can we express with 8 bits? 
    2^8 = 256 different numbers 
    Same with any n bits; answer is 2^n 

We usually use 4 or 8 bytes for storing info, bc that'll give us 4 billion or 10 billion billion (2x billion) number options.

Fixed-width integers take up constant space. Doing maths with fixed-width integers always yielf constant space, bc we drop constants when calculating efficiency. Tradeoff being limited to the 2^n number of values.

There's always trade offs. Increase time, decrease space, vice versa. Other tradeoffs exist as well. 


## Arrays 

A data structure used to store a list of similar data type elements, all accesible by their indices. (Arrs can only have 1 )

Looking up an element in an arr takes up constant time. 


## Strings 

Sets of chars. 

We can express strings as arrays of 8-bit chars, in ASCII:

A: 01000001     S: 01010011      k: 01101011
B: 01000010     T: 01010100      l: 01101100
C: 01000011     U: 01010101      m: 01101101
D: 01000100     V: 01010110      n: 01111110
E: 01000101     W: 01010111      o: 01101111
F: 01000110     X: 01011000      p: 01110000
G: 01000111     Y: 01011001      q: 01110001
H: 01001000     Z: 01011010      r: 01110010
I: 01001001     a: 01100001      s: 01110011
J: 01001010     b: 01100010      t: 01110100
K: 01001011     c: 01100011      u: 01110101
L: 01001100     d: 01100100      v: 01110110
M: 01001101     e: 01100101      w: 01110111
N: 01001110     f: 01100110      x: 01111000
O: 01001111     g: 01100111      y: 01111001
P: 01010000     h: 01101000      z: 01111010


## Pointers




## Sets 

A set is a collection of any type of element where none of the elements are duplicated and the order isn't important. 

Let's say we want to remove the duplicates in an array. 
We can do a loop where we make a new arr, go through elements in inputted arr, if it doesn't exist in new arr,
push into new arr. 
OR, and this is much better, we use a set and spread operator to make a new arr: 

    var array = ["Mike","Matt","Nancy","Adam","Nancy"];
    let newArr = [...new Set(array)]
    console.log(uniq)


## Call Stack
A call stack is what a program uses to keep track of function calls.
    Call stacks are made up of stack frames-- one frame for each function call. 
 Recursion uses a LOT of call stacks. 
        RN: When we run out of space, it's called a stack overflow.

