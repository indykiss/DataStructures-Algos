
System design notes:

Main components:
1. Clarify the system's parameters and goals. 
2. Estimate the scale of the system. Traffic estimate, amount of storage, bandwidth, memory storage (caching)
3. System interface definition. What APIs are we building for the system. 
4. Define the data models early on. Helps us decide how the data will flow. 
5. High level design of the structure. Process of user making a thing -> we save the thing in database into servers -> make load balancers to handle traffic -> data clean up (went over cache? expires?) -> analytics to track usage. 
6. Detailed design of a section if time allows. 
7. Any bottlenecks? Solutions for the bottlenecks.


Key characteristics to a good system:
- Scalability. How do we handle things when the system gets bigger and bigger? We scale! Vertical scaling is getting bigger servers. Horizontal scaling is getting more servers. 
- Reliability. If the system fails, we have backups, like redundancies to make sure the system keeps going. 
- Availability: Open as much as it can be. Different in reliability because a very available system can have lots of security holes, which makes it not reliable. 
- Efficiency: System is efficient in its response time (latency) and throughput (bandwidth). 
- Serviceability/ Manageability: Ease of operating and maintaining the system. Ease of diagnosing and fixing problems when they come up. Early detection of system failures.  


1. Clarifying the system's parameters
In a system design Q, first step is to clarify the requirements for the question. What's the scope?:
If designing twitter:
- Will users be able to post tweets and follow other users?
- Will there be a wall posting each user's tweets? Is there a wall with tweets that the user follows?
- Can tweets support pictures and videos? 
- Backend and frontend? 
- Is there a search? 

2. Estimate scale 
- What scale can we expect? How many tweets should we expect? Number of users? Number of retweets? 
- How much storage do we need? If pictures/ videos enabled, guesstimate
- What network bandwidth usage are we expecting? This is important to decide how we manage traffic and balance load between servers. 

3. System interface definition 
Define what APIs are expected from the system. This will help us determine if we've gotten any requirements wrong. 
Exs:
postTweet(user_id, tweet_data, tweet_location, user_location, timestamp, …)  
generateTimeline(user_id, current_time, user_location, …)  
markTweetFavorite(user_id, tweet_id, timestamp, …)  

4. Define data models 
Defining the data model early in the interview will clarify how data will flow between different components of the system. It'll guide data management and partitioning. See how different models will interact with each other. 
Ex:
User: UserID, Name, Email, DoB, CreationData, LastLogin, etc.
Tweet: TweetID, Content, TweetLocation, NumberOfLikes, TimeStamp, etc.
UserFollowing: UserdID1, UserID2
FavoriteTweets: UserID, TweetID, TimeStamp

5. High level design 
Draw a block diagram with 5-6 boxes representing the core components of our system. For Twitter example, we need:
- Multiple application servers to serve all the read/write requests with load balances for traffic distributions:
       - If we think we'll have a lot of READ traffic, versus write traffic, it would make sense to have separate servers to handle these requests. 
- We need an efficient database that can store all the tweets and handle a huge number of reads.
- We'd need a distributed file storage system for storing pictures and videos. 

SO, the 5-6 components would be:
- File storage (pics/ videos), database (tweet/ reads), application servers, load balancers for traffic, and the web clients

6. Detailed design
Dig deeply into 2-3 major components. Listen to the interviewer about what to focus on. We need to present different approaches, pros/ cons. 
- Since we're storing a lot of data, how can we partition the data to distribute it to multiple databases? Should we try to store all a user's data in one db? Any issues? 
- How to handle high usage users? 
- Where should we implement a cache? 

7. ID and resolve bottlenecks 
Try to discuss as many bottlenecks as possible and different approaches to mitigate them. 
- Where does our system fail? How can we prevent it from failing? 
- Do we have enough data backup systems, so if we lose a few servers, we can still serve the users? 
- How are we monitoring outages? Are there alerts set up?