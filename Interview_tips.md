
## Very basic reminders on how interviews work :) 

Communication is soooooo important! 

Always always always listen to the interviewer. They're testing problem solving ability. 

Sleep very well the week before the interivew :) 
That week, redo the problems you know very well. Build some extra confidence in coding ability! 


For during the interivew:
1. Ask clarifying questions about assumptions. Valid input. Expected output. Always integers/ strs/ etc! Ask about edge cases. Write down an example input and output. 
2. Think outloud my strategy for solving a problem. Ask if that sounds ok. 
3. QUICKLY jot down psuedo-code notes to track thinking 
4. CODE IT UP. It does not need to be perfect. Syntax does not need to be perfect. We will not run the code. 
5. Finished.ish? Stuck? Go back with an input and walk it through each step. 
6. Remember we need to evaluate the big O time and space of the solution you come up with 
7. Think about how to make the solution more efficient. AND how to update the code to reflect the new change


Reinforcing problem-solving patterns goes a longer way than practicing new problems. Reinforce patterns!
1. Brainstorm the algo in pseudocode. Ask interviewer if good to start coding. 
2. Throw out the algo with comments and like "add helper function that does X" here as the first 2-3 mins walk through.
3. Debug and make it work. 

#### Stuck? How to unstick? 

###### Finding solution:

1. Write a sample input and output out. Notice the process used to solve it "by hand." Look for patterns! 
Use that to guide how to do it in real life.

2. Solve a simpler version of the problem; then add back in the difficult parts. Trying to find 3rd largest of something? Do 1st, then 2nd, then 3rd. Can generalize to find the nth largest. 

3. Start with an inefficient solution. Brute force is fine if I can't think of any other ways to do it. Communicate that there are 
probably more efficient solutions, but would like to try this way 1st. 

4. Throw a data strcture at it. 
- Hashes? Supreme dude at lookups
- Maps? Ok if need to iterate over all AND keys aren't strs

5. Make some bounds on time & space.
- I have to at least look at all the items, so I can’t do better than O(n) time.
- The brute force approach is to test all possibilities, which is O(n^2) time. So the question is whether or not I can beat that time.
- The answer will contain n^2 items, so I must at least spend that amount of time.


###### Optimizing solution:

1. Find where there is repeat work. Looping through input several times? Maybe not necessary. 

2. Look for hints in the specifics of the problem. Is input sorted? (Binary search!) Is the binary tree balanced? 
ASK QUESTIONS TO FIND THESE HINTS. Sometimes interviewers will legit leave out parts of the Q bc the interviewee should be asking about it.


#### All algos will require multiple ways of solving it 

It's the natural way of programming. 

Solve an algo one way. Awesome, answer solved, time to celebrate. The really hard part? 

Solving the same algo a different way; the way that an interviewer tells you how to solve. 

Being able to take suggestions and swerve the solution to match a different strategy is really hard. But that's the way to get a job.
So practice that! 

Always always listen to the interviewer. If need to ask more clarifying questions, ask them. 

Think about where to save time and space. Think about outliers. Think about assumptions that I've made that are no longer assumptions. 

#### Behavioral questions

Story telling is key! 

Remember the star method, remember to add specifics (show, don't tell). Every question's answer should be a story about myself. 

Be memorable. Be yourself. 

Rn: Biggest strength-type questions? Say things that other people have said about me (annual reviews, projects, hackathon etc). 


#### Runtime efficiency 

Big O is how time scales with respect to some input variables. 

If/else, no loops = O(1) constant 

Loop = O(n) where n is the input / Linear

Nested loops = O(n^2) / Quadratic 
    EXCEPT for instances where the 2nd nested loop is a smaller subset of the 1st loop
    EX: Two arrs as inputs and we want to loop through both in 1 loop
    This would be O(a * b) where a = arr1.length and b = arr2.length 
        function stuff (arr1, arr2) {
            for(let i = 0, i < arr1.length; i++) {
                for(let j = 0; j < arr2.length; j++)
            }
        }

Sorting = 


#### Imposter syndrome 

I'm smart. I'm talented. I'm hard working. Imposter syndrome is a cognitive bias. Just a neural malfunction. Ignore it. Don't let it ruin interviews. 

