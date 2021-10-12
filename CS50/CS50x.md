

# ----------------------------------------------------#

* CS 50 *

What's up?

I'm taking CS50x online to further solidify basic CS concepts. 

This doc is a file of notes from class. I started taking this in 2020: https://cs50.harvard.edu/x/2020 

But I didn't finish the course in time, and now the 2021 version has a few more psets & lectures/ slightly different content: https://cs50.harvard.edu/x/2021/ 

In the interest of time (studying schedule), I'm running through the new ~3 2021 lectures quickly and letting a few psets in C be uncompleted. I do not enjoy C. Python is great, I'd like to focus on the Python psets, refresh SQL and quickly touch on web dev. 

Each pset file in this folder is going to have overarching lessons listed at the top. Even if the pset itself isn't complete/ isn't passing all the tests,I'd like to make sure I'm understanding the overall points. 

# ----------------------------------------------------------#




# Week 0: Scratch

Computer science = problem solving. Taking inputs and manipulating it to generate outputs. Take a problem and find the solution. 

Binary is how computers store data. In 0s and 1s. 

Data- all data- can be represented using binary. Colors, pictures (pixels), emojis, letters (ASCII- mapping of letters to numbers to binary), videos, etc. 

Algorithms = step by step instructions for solving a particular problem, with varying time and space complexity. As in resources needed to run the algo. 



# Week 1: C 

C is a procedural computer language that is used to build and maintain applications. 

- We have souce code. Running it through a compiler converts it into machine code, instructions in binary that the computer understands 

- Compiler goal is to run input code through algo to convert to binary so computer can give us output 

- When we run code, we compile it first and make the program using "ruby", for example. This goes into the file, imports anything that needs to be imported, runs the algos, creates the output. Compiles our source code (code we write) into machine code (code the computer understands).
    ruby nameFile.rb 

- In C, a "long" is a very long number. Int is integer which goes to 2B and -2B, because it's 32 bit. Long goes longer than int, it has 64 bits of memory. Float = number with decimal. Int = integer. Char = single character. Str = strs. Reason to use char over str/ int over long is to save space. 

- In C, we have to manually allocate space and free up space that we aren't using. 

- Overflow: the point at which the integer or float that we're looking at has surpassed the number of bits we have (8, 16, 32 bits, etc) in storage. We try to add one, but because we're at capacity, we lose the data. 
- Y2K problem was because of integer overflow. Programmars stored only 2 digits for years (70s/ 80s/ 90s), not 3 digits,so the number 2000 broke systems. 

- Floating point imprecision:
We don't have enough bits to store all possible values, so computer stores as close as it can. 
x: 1
y: 10
x / y = 0.100000001490116119384765625000000
Computers aren't perfect. 

- Y2K problem : Running out of space to store data 
Another issue. If we have a 32 bit number and try to use a bigger number, we lose the carry. In 2038, we're going to see a similiar problem -- we're hitting like the 4 billionth second counted since like 1970. So hardware all over needs to be upgraded. 

Pset1: Make pyramid thing with a nested for loop



# Week 2: Arrays 

“Compiling” source code into machine code is actually made up of smaller steps:
- preprocessing
    import libraries 
- compiling
    takes source code and converts to assembly code
- assembling
    takes assembly code and converts it into binary (machine code)
- linking
    contents of prev compiled libraries are combined with the binary of this program

Debugging:
- Use things other than console.log()/ print()
- Debug interactively by:
    - Create breakpoint in the code 
    - Run the debugger, look at the panel that lists variables
    - Step over the next line to keep seeing how variables are being changed 

RAM - Random Access Memory. Chips in our computers that store things

Arrays - Data structure used to store variables one after the other, in a continuous chunk of memory. 

Strings are basically arrays of characters. That's why we can do this:
    str = "welp" 
    str[1] = "e"

- Reminder: Characters => numbers => binary for computer to understand 

- C: argc and argv are two variables that our main function will now get, when our program is run from the command line. 
- argc is the argument count, or number of arguments, and argv is an array of strings that are the arguments. 

Pset2: Caesar cipher

# Week 3: Algos 

- Linear search - look at everything one at a time 
- Binary search - in a sorted arr/ bst, we can search based on parameters, divide problem by half 

Big O:
- O(n2), O(n log n), O(n) (linear search), O(log n) (binary search), O(1)

- Computer scientists might also use big Ω, big Omega notation, which is the lower bound of number of steps for our algorithm. 
- Big O is the upper bound of number of steps, or the worst case, and typically what we care about more.

- Data structures are containers that hold other kinds of data types

Sorting:

- Bubble sort: Large values are "bubbled" to the right:
    Repeat n–1 times
        For i from 0 to n–2
            If i'th and i+1'th elements out of order
                Swap them
Bubble sort is O(n^2) time complexity 

- Selection sort: Remember the smallest number we've seen, then swap it with the first num in the list, then look for 2nd smallest and swap it with the 2nd num in list, etc. 
    For i from 0 to n–1
        Find smallest item between i'th item and last item
        Swap smallest item with i'th item
Selection sort is O(n^2) time complexity 

- Recursion: occurs when a function or algorithm refers to itself.
Draw a pyramid of x height can be done with recursion:


- Mergesort: Uses recursion to sort. O(n log n) time 
    If only one item
    Return
    Else
        Sort left half of items
        Sort right half of items
        Merge sorted halves




# Week 4: Memory 

Binary = count with 0s and 1s 
Base ten = decimal system = uses 0-9 
Hexadecimal = count up to 16 digits, 0-9 and A-F
Used for colors and other things 

Pointers = used to point to the address of a variable 

In some languages (ex C):
    str s = "hi"
    str t = "hi"

    if (s == t) print "false"

BC the variables are pointing to the address/ the instance of the string, not string itself. 

In python/ js, this isn't a thing. 


Memory leak:
Slow down the computer and uses a ton of memory. Happens when we forget to free up memory after being done using it, so it can be used elsewhere. 

Valgrind in C lets us check if we have a memory leak. 

Swap:
    function swap(a,b) {
        let temp = a; 
        a = b; 
        b = temp; 
    }


Memory layout of a computer:
- machine code, global variables, heap, stack  


With pointers, we can open files like csvs within our code to do things 



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

Python is an interpreted language, which means we run another program (an interpreter) that reads our source code and runs it top to bottom. 

What is difference between interpreted language, python, and compiled language, C?
In a compiled languge, the machine directly translates the language. 
In an interpreted language, there is a middle player called the interpretter that reads and executes the code. 

Because of this, python is much slower than C. But it's easier to write in. Tradeoffs, depending on business needs. 

Whitespaced, so no need for curly brackets or semi colons.

Python has regex, C does not have. 

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



# Week 7: SQL 

SQL = language that selects, sorts, inserts, updates, deletes info from relational databases 

Ex:
favorites.db:
Title, Genres

* SELECT title FROM favorites;

* SELECT title, COUNT(title) AS n FROM favorites GROUP BY title ORDER BY n DESC LIMIT 10;

* UPDATE favorites SET title = "The Office" WHERE title LIKE "%office"; 

* DELETE FROM favorites WHERE title = "Friends";

Other operations: 
* WHERE, matching on some strict condition
* LIKE, matching on substrings for text
* LIMIT
* GROUP BY
* ORDER BY
* JOIN, combining data from multiple tables


It turns out that, when working with data, we only need four operations:
- CREATE
- READ
- UPDATE
- DELETE

In SQL, the commands to perform each of these operations are:
- INSERT
- SELECT
- UPDATE
- DELETE


Problems:
- One problem with databases is race conditions, where the timing of two actions or events cause unexpected behavior. To solve this,we can use transactions, where a set of actions is guaranteed to happen together.

- SQL injection attack, where an adversary can execute their own commands on our database. Dave typing "delete *" in Datapond as a title of a research packet.


# Week 8: Information. Review what was learned & go over final project tracks :)




