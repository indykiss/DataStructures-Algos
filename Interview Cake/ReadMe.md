
# Important things to know, from Interview Cake 
# Second time running through, very quick 
# "Topics" folder is also interview cake. 


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


# Overlapping subproblems / Memoization:

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


# Bottom-Up Algo

Saves memory costs vs recursion's call stacks. 

A bottom-up algo starts from the beginning while recursion starts from the end and works backwards.  

Stack overflow = when there is a call stack overload which costs O(N)

Recursion: 
function product(n) {
    let res = 1; 

    // base 
    if(n == 1) {
        return res;  
    }

    n = n * res; 

    product(n-1); 
}

O(n) memory space complexity, not good


Bottom-up build: 
function product(n) {

    let res = 1; 

    for(let i = 0; i <= n; i++) {
        res = res * n; 
    }

    return res; 
}

O(1) space 


* Note - JS and kinda Ruby does something called tail call optimization that optimizes SOME recursive calls to avoid building up a tall call stack. 



# Linked List

We know this. 



## General concepts: 

# Short circuit evaluation 

Stops execution early to save time: 
if (thisThing.exists() && thisThing.isBlue()) {
    return "It's blue!"
}

If the thing doesn't exist, the if statement block doesnt run. 


# Garbage collection 

Garbage collector automatically frees up memroy that a program isn't using anymore. 

One way that a program handles garbage collection is by:
1. Figuring out what can't be deleted because it's in use somewhere in memory.
2. Free up everything else. 

Another way is to track the number of things that reference an object. If that reference count is 0, then free it up. 

In C, garbage collection isn't automatic. You have to manually collect garbage. In JS, it's automatic. 


# Closures 

A closure is a function that accesses a variable "outside" itself. For example:

const message = 'The British are coming.';

function sayMessage(){
  alert(message); // Here we have access to message,
  // even though it's declared outside this function!
}

We'd say the message is closed over by sayMessage(). 

One useful thing to do with a closure is to create something like an "instance variable" that can change over time and can affect the behavior of a function.

// Function for getting the id of a dom element giving it a new, unique id if it doesn't have an id yet

const getUniqueId = (() => {
  let nextGeneratedId = 0;
  return element => {
    if (!element.id) {
      element.id = `generated-uid-${nextGeneratedId}`;
      nextGeneratedId++;
    }
    return element.id;
  };
})();

Why did we put nextGeneratedId in an immediately-executed anonymous function? It makes nextGeneratedId private, which prevents accidental changes from the outside world:

// Function for getting the id of a dom element giving it a new, unique id if it doesn't have an id yet
let nextGeneratedId = 0;
const getUniqueId = element => {
  if (!element.id) {
    element.id = `generated-uid-${nextGeneratedId}`;
    nextGeneratedId++;
  }
  return element.id;
};

// ...
// Somewhere else in the codebase...
// ...

// WHOOPS--FORGOT I WAS ALREADY USING THIS FOR SOMETHING
nextGeneratedId = 0;



# Mutable vs immutable objects 

A mutable object can be changed, while an immutable object can't be changed. 

In JS, everything except for strings are mutable. 

Things being mutable is nice because that means we can make changes in place, without allocating a new object. 
BUT note that any changes means all references to that object will reflect the change. 


# Binary numbers 

Note: Binary numbers can be negative OR positive. 
If it's something called "two's complement," we're saying that it's negative. 

The first 1 in the binary representation equals to a negative number. 

Ex: 

1111 = 8 + 4 + 2 + 1 = 15 
OR 
1111 = -8 + 4 + 2 + 1 = -1 

So if we're looking to convert base 2 into decimal (as in converting binary to base 10), we should ask if we could also be dealing with "two's complement."


# Bitwise AND 

Both need to be true to return the operation: 

1 & 1 = 1 
1 & 0 = 0
0 & 1 = 0 
0 & 0 = 0

Ex: 
5 & 6 = 4
Because:
  101
+ 110 
------
100

= 4 

# Bitwise OR 

1 | 1  →  1
1 | 0  →  1
0 | 1  →  1
0 | 0  →  0

Ex:
5 | 6 = 7 

 101
+110
-----
111 

= 7


# Bitwise XOr

The XOR means "exclusive or" which basically takes two bits and returns 1 if ONLY one of the bits is 1. Exactly 1. 

1 ^ 1  →  0
1 ^ 0  →  1
0 ^ 1  →  1
0 ^ 0  →  0

Ex: 
5 ^ 6 = 3
 101
+110
-----
 011


# Bitwise NOT = flips things 

The NOT bitwise operation inverts bits. A 0 becomes a 1. A 1 becomes a 0.

The NOT operator is often written as a tilde character ("~"):

~ 0000 0101
= 1111 1010

Ex: 
~ 5 = - 6 

~ 0000 0101
= 1111 1010

Two complement of 1010 =
-6 


# Bit shifting 

A bit shift moves each digit in a number's binary representation left or right. There are three main types of shifts:

- Left shift 
0010 << 1  →  0100
0010 << 2  →  1000

- Logical right shift 
1011 >>> 1  →  0101
1011 >>> 3  →  0001

- Arithmetic right shift
When shifting right with an arithmetic right shift, the least-significant bit is lost and the most-significant bit is copied.

Languages handle arithmetic and logical right shifting in different ways. Javascript provides two right shift operators: >> does an arithmetic right shift and >>> does a logical right shift.

1011 >> 1  →  1101
1011 >> 3  →  1111


# Integer overflow 

When we try to save a number that's TOO big,like over 32 bit or 64 bit, that's an integer overflow. 

JS technically doesn't have integers- there are only 64 bit floats. If we try to use a number bigger than that, the num gets represented as infinity. 

Normal languages (Python/ Ruby) will automatically reallocate the space for you. 

Other languages (Java/ C) will throw out the highest bit. Like if we had 11 and needed to add another 1 to the front, it'll become 00. 

Using longs instead of integers can help this. 


