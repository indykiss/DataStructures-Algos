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
