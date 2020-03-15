## Hash tables 

A hash table is a dictionary like data structure that maps keys to values. It allows people to look up a value based off its key. 
    In order to find keys based off values, we need to loop through all values & keys. Same w/ arrs. Ex:

      const lightBulbToHoursOfLight = {
      'incandescent': 1200,
      'compact fluorescent': 10000,
      'LED': 50000,
      };
    

Really useful for when we want to keep track of counts per char in a string. 

Sometimes when there's duplicates within the keys, there can be a hash collision. Which is bad. It's rare, but if we are dealing with a hash collision, we can have each array slot hold a pointer to a linked list with the key/value pair, instead of the usual having the value itself in that slot. 

Hash tables are also known as objects. 

Hash tables are basically built-on arrays, where instead of indices, we use keys. 

Pros: Quick lookups and flexible keys (most data types can be hashable). O(1) time. 

Cons: 
Worst case lookup is O(n), so not great. This happens when there's hash collisions. 
Not ordered. So can't easily find lowest/highest value. 
Single directional lookups, as in can find a value using a key in O(1) BUT if I'm trying to find the key, using a value, it's O(n) b/c need to loop through the whole structure. 
Not cache friendly. 



## Hashing and Hash functions 

A hash function takes data, like a string or a file, and converts it into a hash-- a fixed-size string or number. 

For example, here’s the MD5 hash (MD5 is a common hash function) for a file simply containing “cake”:
  DF7CE038E2FA96EDF39206F898DF134D
  