## Arrays 

A data structure used to store a list of similar data type elements, all accesible by their indices. (Arrs can only have 1 )

Looking up an element in an arr takes up constant time. 

    
## Arrays time & space

Really awesome at fast lookups and fast appends, adding stuff at the end of an array. O(1) time. 

BUT terrible inserts, deletes, and space. O(n) time and space. 

Arr.slice(startIndex, endIndex) takes up O(n) time and space, which is a lot, because it is making a new arr and copying over elements into that new arr. Just be careful with this!

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


## Dynamic arrays 

All arrs in JS are by default dynamic. In other languages, the number of indices in an arr has to be declared. Dynamic arrs' size increases as necessary. 


# Arrays
Strengths:
- Fast lookups. Retrieving the element at a given index - takes O(1)O(1) time, regardless of the length of the array.
- Fast appends. Adding a new element at the end of the array takes O(1)O(1) time, if the array has space.

Weaknesses:
- Fixed size. You need to specify how many elements you're going to store in your array ahead of time. (Unless you're using a fancy dynamic array.)
- Costly inserts and deletes. You have to "scoot over" the other elements to fill in or close gaps, which takes worst-case O(n) time.

Reminder: arr.slice copies and creates new array, so that takes up extra space. 

# Dynammic arrays
Strengths:
- Fast lookups. Just like arrays, retrieving the element at a given index takes O(1) time.
- Variable size. You can add as many items as you want, and the dynamic array will expand to hold them.
- Cache-friendly. Just like arrays, dynamic arrays place items right next to each other in memory, making efficient use of caches.

Weaknesses:
- Slow worst-case appends. Usually, adding a new element at the end of the dynamic array takes O(1) time. But if the dynamic array doesn't have any room for the new item,it'll need to expand, which takes O(n) time.

Why not just extend the existing array? Because that memory might already be taken by another program. So instead, it makes a whole new bigger array. 

- Costly inserts and deletes. Just like arrays, elements are stored adjacent to each other. So adding or removing an item in the middle of the array requires "scooting over" other elements, which takes O(n) time.



