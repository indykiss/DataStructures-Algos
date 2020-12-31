

# Week 0 notes:




# Week 1 notes: 
Go back and look at transcript for exact summary but:

- Compiler goal is to make input code run through algo 
to convert to binary so computer can give us output 

- when we run code, we compile it first and make the program 
using "ruby." This goes into the file, imports anything that 
needs to be imported, runs the algos, creates the output. 
Compiles our source code (code we write) into machine code (code the computer understands).
    ruby nameFile.rb 

- In C, a "long" is a very long number. Int is integer which 
goes to like some billion. Long goes longer than int. 

- Overflow: the point at which the integer or float that we're looking at has surpassed the number of bits we have (8, 16, 32 bits, etc) in storage. We try to add one, but because we're at capacity, we lose the data. 
Y2K problem was because of integer overflow. Programmars stored only 2 digits for years (70s/ 80s/ 90s), not 3 digits,so the number 2000 broke systems. 

Pset1: Make pyramid thing with a nested for loop

# Week 2 notes: 

- Reminder: Characters => numbers => binary for computer to understand 

Pset2: Caesar cipher

# Week 3 notes: 





# Week 5: Data Structures 

Arrays traditionally have limited number of slots. When you need to add more elements to the array, we need to:
- Allocate more memory 
- Copy the elements from old memory to new memory spot 

In an array, we need a continous section of space (bits) in the computer's memory. 

Memory wise, Linked Lists are great over using arrays because they can use pointers to the next value in a very different section of memory. Especially useful over arrays when there's not enough CONTINUOUS space to make an array. 

Like if our empty space is all over the place in the computer's memory, we can ID where there's enough space for a value and its pointer (the node), then the next chunk where there's space for a value and a pointer, and just keep going. 

Linked Lists let us add dynammically to the list, so we don't need to resize & move original content, like we would in an array. But we lose our random access ability/ and use of index to ID the value of node. 

BASICALLY, linked lists lets us grow and shrink things dynammatically BUT arrays let us have random access/ binary search. 

Hash tables: Key-value pair, Collisions, etc. Fast lookups. 

Trees: Binary search tree lets us combine the idea of pointers (left and right) and have O(log n) look up time. 

Tries: Basically trees to use to look up words. Top level is A-Z, then each level has an array node of A-Z (second letter), then another pointer to arr node of A-Z (third letter), etc. LOTS of memory, bc of all the arrs, but very quick search time. Constant time lookup (O(1))-- the constant being the length of the longest word. 

Queue - FIFO 
Enqueue - add things to the queue 
Dequeue - remove things from the queue

Stack - LIFO
Push - add things to stack 
Pop - remove things from stack

Dictionary:
Anything that has keys and values
A hash table is an example of a dictionary 



# Week 6: Python 

Using python > C

Whitespaced, so no need for curly brackets or semi colons.

Ex: 

let counter = 0; 
for(let i = 0; i < 10; i++) {
    console.log("meep");
    counter++;
}


In Python:

counter = 0
for i in range(10):
    print("meep")
    count += 1


Python data types:
- Bool
- Float
- Int
- Str

Python also has new DSs over C:
- Range
- List (aka arrays)
- Tuple (sequence of immutable vals, ie cant change)
- Dict (hash table, key:val pairs)
- Set (set of uniq nums)


Instead of ||, it's or

Python is great for data science because ints can't overflow; there are no upper bounds. 

Hashes: key-value pairs. Keys are usually strings, values can be whatever. 

Dictionary = abstract data type 
Hash table = data structure

We use hash table to implement dictionary.



# Week 6: SQL 


