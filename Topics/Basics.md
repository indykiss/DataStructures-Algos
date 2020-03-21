# Concepts to remember

Read me! As much as possible: https://www.geeksforgeeks.org/data-structures/


## Abstract data structures vs real data structures

Abstract DSes are self-created those. Linked lists, queues, stack based queues, tree maps, hash maps are examples of abstract DS. 



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



## Call Stack
A call stack is what a program uses to keep track of function calls.
    Call stacks are made up of stack frames-- one frame for each function call. 
Recursion uses a LOT of call stacks. Which impacts the space complexity significantly. Usually O(n) space even if no data structures are created. 
    - Iterative functions uses constant space, much better. 
        RN: When we run out of space, it's called a stack overflow.
 
 A stack frame stores: 
    - Variables
    - Arguments passed into functions
    - Info about the caller's stack frame 
    - Return address; what the program should do after the function returns 
 


## Fixed width integers

How many different numbers can we express with 8 bits? 
    2^8 = 256 different numbers 
    Same with any n bits; answer is 2^n 

We usually use 4 or 8 bytes for storing info, bc that'll give us 4 billion or 10 billion billion (2x billion) number options.

Fixed-width integers take up constant space. Doing maths with fixed-width integers always yielf constant space, bc we drop constants when calculating efficiency. Tradeoff being limited to the 2^n number of values.

There's always trade offs. Increase time, decrease space, vice versa. Other tradeoffs exist as well. 
