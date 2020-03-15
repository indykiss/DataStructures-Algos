## Log maths

Log is the inverse of exponentiating. 

Basically, we're trying to figure out what power do we need to raise the base to in order to get the answer.  

What power do we need to raise the base (10) to get the answer (100)?
    10^x = 100 
    x = 2 
    Aka: Log base 10 of 100 = 2

We use log to figure out what X is. Steps so we can do this for harder ones:
    10^x  = 100 
    log(10) * 10^x = log(10) * 100 
        log(10) cancels out 10^ 
    x = log(10) * 100 
        What power do we have to raise 10 to in order to get 100? 
    x = 2

Log rules
Simplification: log(b) * b^x = X 
    Brings down exponents

Multiplication: log(b) * (x * y) = log(b)(x) + log(b)(y)

Division: log(b) (x/y) = log(b)(x) - log(b)(y)

Powers: log(b) (x^y) = y * log(b)(x)

Change of base: log(b)(x) = log(c)(x) / log(c)(b) 
    Changes base from b to c 
    Useful for when we want to change the base of 10 (default) to something else

Important to note: In CS, it's almost always assumed that the base of a log is 2. SO log(n) === log(2)(n). 
    In usual maths, the usual base is 10. BUT computers use binary, so log base 2. 
    Also note, log base 2 is also represented as lg. 

Useful for these types of questions: 
    How many times do we need to double 1 before we get to n?: log(2)n
    Which is what we do in binary search!! 



## Permutations 