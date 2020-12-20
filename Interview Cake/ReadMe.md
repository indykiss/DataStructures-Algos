
# Important things to know, from Interview Cake 
# Second time running through, very quick 
# Topics is also interview cake. 


# Integer 

Regular integers are 32 bit
Long is a type of integer that uses 64 bits

Type languages, like C, you have to declare what type 
of data structure it is. 

32 bits = 4 billion values, which has 2 billion in positive and 2 billion in negative. 

Integers are fixed width (either 32 bit or 64 bit), so they take up constant space. Because of this, operations (multiple, add, etc) on integers are also constant time. 


# Strings 
Strings are basically arrays of characters. 

Strings can be represented as ASCII characters. 

Binary <=> ASCII
01000001 <=> A

At the end of strings, under the hood, there is a special character that says "yo we done." In C, that character is /0. 


# Arrays 

Looking up the contents of a given array index is O(1)O(1) time. This fast lookup capability is the most important property of arrays.

But the formula we used to get the address of the nnth item in our array only works if:

Each item in the array is the same size (takes up the same number of bytes).
The array is uninterrupted (contiguous) in memory. There can't be any gaps in the array...like to "skip over" a memory slot Spotify was already using.

Arrays have fast lookups (O(1)O(1) time), but each item in the array needs to be the same size, and you need a big block of uninterrupted free memory to store the array.

# Dynammic arrays 

In low level languages, like C, we have to say array size up front. Higher level languages don't need to. Because using dynammic arrays are better; they reallocate their own size when the array runs out of space. 

In a normal array with fixed capacity, we need to copy the old array elements into a new array with a higher capacity. This ends up taking O(n) time because we need to copy all items over. 

SO instead of that, we use a linked list.  


# Linked lists

Fast appends and DOESN'T require us to know the number of elements are in the DS ahead of time. 

Always O(1) to add both on the end at the beginning. Worst case for dynammic array is O(n)append. 

BUT arrays have O(1) lookup, while linked list look up is O(n) because we need to look at all the items in the linked list. 


# Hash tables 

Let's say we have an array of fixed size 30. And we have a word who's ASCII = 400. 

We can take the modulo of that, % 30, to get it into a slot that's available. 

When we do this, it's called hashing. 

DOING THE MODULO ON A NUMBER TO PUSH THE REMAINDER INTO AN AVAILABLE SLOT IS HASHING. 

THIS TRANSLATES THE KEY INTO AN ARRAY INDEX. 

THE RESULTING DATA STRUCTURE IS A HASH TABLE. 

IF, when we hash a key, there are two keys that are the same, then this is a hash collision. 

Solutions to hash collisions are either using a linked list to hold values () OR just going to the next open spot (open addressing). Because of hash collisions, there could be O(n) time worst case to accessing a value given a key. But rare, so average is O(1) time. 

Key- value pair relationship. 


# Logarithm rules

Log rules
Simplification: log(b) * b^x = X 
    Brings down exponents

Multiplication: log(b) * (x * y) = log(b)(x) + log(b)(y)

Division: log(b) (x/y) = log(b)(x) - log(b)(y)

Powers: log(b) (x^y) = y * log(b)(x)


# Binary Trees
Binary trees are perfect when they have exactly 2 nodes per each node. 

Two properties of perfect BTs:
- The number of nodes double at every new level. 
- The number of nodes in the last level is half of the total nodes in the BT. 

# Graphs
- Edge list 
- Adjacent list 
- Adjacent matrix


# Overlapping subproblems:

- Happens when we need to solve the same subproblems in order to get the solution. 
Ex: In fibonacci, each number is the sum of the two previous ones — 0, 1, 1, 2, 3, 5, 8, ...
So here we use this recursive function:

function fib(n) {
    if(n == 0 || n == 1) {
        return n; 
    } 

    return fib(n-1) + fib(n-2);
}

Because we're solving subproblems that we've solved before, we can now memoize, which is like saving results in a cache. 

So we build a class that saves input/ output relationship. Which saves us calls. 


class Memo {
    constructor() {
        this.cache = {}; 
    }

    fib(n) {
        if(n == 0 || n == 1) {
            return n; 
        } 
        if(this.cache.hasOwnProperty(n)) {
            return this.cache[n]; 
        }
        let res = this.fib(n-1) + this.fib(n-2);
        this.cache[n] = memo; 
        return res;
    }
}