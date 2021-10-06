
# Python notes from Udemy Python Bootcamp

## Data types:
- Int : intergers
- Float : decimal numbers 
- Str : dtringd
- List : arrays 
- Dictionaries : key value pair lookups
- Tup : tuples, ordered immutable sequence of objects
- Set : set, unique objects collection
- Bool : booleans

## Maths, Ints:
- Basics, + - * /
- Modulo : gives us the remainder to check if a number is divisible by a number. Helps with checking even or odd: 
    ex: 7 % 4 = 3
- To the power: **
    ex: 2 ** 3 = 8

Floating point accuracy:

## Python is dynamically typed:
Can reassign variables to different data types, which is nice. 
    str1 = hi
    str1 = "hi"
Easy to work with, but possible bugs. Would need to use type(variable) to check things sometimes (date or str object for example when working with datetime)

Exs of potential issue:
    '2' + '3' = '23' NOT 5, reasonably 

## Strings, indexing and slicing: 

Can use "string" or 'string'

Strings are indexed AND reverse indexed:
    s1 = "indy"
    s1[0] = "i"
    s1[-1] = "y"

New line: \n starts a new line:
    print("hello \n world")
        hello
        world
New tab: \t starts a new tab:
    print("hello \t world")
        hello   world

Note: If using apostrophes like "I'm", need to use double quote around so we don't confuse the computer

Remember, strings are immutable. I can't do:
    name = "Sam"
    name[2] = "n" NO BAD, ERROR. Does not change str. 
Must concat or reassign string if I want to change str. 
    name = "Sam"
    full_name = name + " Smith"
    full_name = "Sam Smith"
Can also concat with times:
    letter = "z"
    letter * 3 = "zzz"

# String methods
str.upper() = "HELLO" 
str.lower() = "hello"
str.split() = ['hello', 'world']
    str.split('o') = ['hell', 'w', 'rld'] 
        Splits elements at o, loses the o. 
len(str) = gives length of the string

Slice: [start_index:stop_index:step]
    Start at that index (inclusive)
    Stop before that index (NOT inclusive)
    Step is the size of the "jump" to take

Exs of slice for [start:end]:
    s1[1:] --> "ndy". Start at idx 1 and all of str
    s1[:2] --> "in". Give up until idx (not inclusive)
        Same as s1[0:2]
    s1[1:3] --> "nd". Slice from 1 - 2. 

Exs of slice with step size:
    s2 = "abcdefg"
    s2[::2] = "aceg" -- skips every other letter
    s2[1::2] = "bdf" -- start at idx 1, then jump 2

Clever trick to reverse a string, backwards step:
    s2[::-1] = "gfedcba

Insert a formatted variable in a print statement. 
Ex:
    str1 = " beep"
    print("This is".format(str1))


