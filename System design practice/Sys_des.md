

## Github primer notes ##
https://github.com/donnemartin/system-design-primer#system-design-topics-start-here 

# Benefits of distributed systems
- More scalable (ability of system to grow & manage traffic/ increased data)
- Reliable (performning without failing during a period of time)
- Fault tolerant
- Lower latency, increased performance
- Cost effective 
- More available (amount of time a system is operational). Hard to actually calc but this is the four ninths [1 hr/ year]/ 3 ninths [8 hrs] thing. Redundant servers is good because helps prevent downtime 


# Scalability 
- Vertical vs horizontal scaling 
- Caching
- Load balancing
- DB replication, partitioning 

# Performance vs scalability
A thing is scalable if it is fast even with a lot of load. 

# Latency vs throughput:
Latency is time to perform some action. 
Throughput is the # of actions per unit of time. 

Aim for maximum throughput with acceptable latency. 


# CAP theorem : For dealing w/ Data, therefore DBs
Pick 2/3: 
- Consistency: Every read gets most recent write 
- Availability: Every response gets response, but maybe not most recent
- Partition tolerance:  System operates even if network failures

Always pick paritionable for big systems. So pick consistency OR availability. 
What's more important? Getting the correct data or getting any data. 

- CP good if business needs atomic reads and writes. I.E Banks, FB Messenger, Commenting, etc
- AP good if system needs to work despite errors. I.E FB Newsfeed, Instagram 


# Consistency patterns 
- Weak consistency: After a write, reads may or may not see it. 
Ex: If you're on a phone call and lose reception, you don't hear what was said while the connection was lost. 

- Eventual consistency: After a write, reads will eventually read it. 
Ex: DNS and email. Works well esp in highly available systems. 

- Strong consistency: After a write, reads will see it. Data is replicated synchronously. 
Ex: File systems, relational databases


# Availability patterns 
Two types of availability patterns: fail-over and replication

- Fail-over types: 
    - Active-passive: Heartbeats are sent between the active and standby servers. If heartbeat stops, passive server takes over the active IP's address and resumes service. 
    Length of downtime determines on if the passive server is in 'hot' standby or if it needs to start from 'cold' standby. 
    - Active-active: Both servers are managing traffic, spreading load between the two. If servers are public-facing, DNS would need to know about the public IPs of both servers. If the servers are internal, application logic needs to know about both servers. 
Overall disadvantages: fail-over adds more hardware and additional complexity. Potential loss of data if the active system fails before any newly written data can be replicated to the passive. 

- Replication types:
    - Master-minion replication
    - Master-master replcation  


# Availability in nines
- 3 nines => 8 hrs downtime a year
- 4 nines => 1 hr downtime a year 

Availability depends on whether or not the components are in sequence or in parallel:
- In sequence: Avail decreases when 2 components that aren't 100% available are in sequence.  
- In parallel: Avail increases when 2 components aren't 100% available are in parallel. Covers for each other basically


# Reliability vs availability 
- A reliable system is always available (but not vice versa)
- Availability can be maintained by redundancy 
- Reliable software is more profitable bc proviging same service requires less backup


# Domain name system 
DNS translates a domain name like www.example.com to an IP address. 
An IP address is a uniq address that IDs a device on the internet's location and makes the device accessible for communication.

DNS is hierarchical, with a few servers at the top. 
Your router provides info about which DNS servers to contact when doing a lookup. Lower level DNS servers cache mappings, which could become stale due to delays. 

CloudFlare for example manages DNS services. 

DNS services route traffic through:
- Weighted round robin
- Latency-based
- Geolocation-based 

Disadvantages: Accessing a DNS server adds a little delay, but can be mitigated by caching. DNS management could be complex. DDos attack sometimes. 


# Content delivery network
It's a globally distributed network of proxy servers, serving content from locations closer to the user. Usually HTML/ CSS/ JS/ images/ videos are served from CDN, but sometimes CDNs can support dynamic content. 

CDNs are great because users receive content from data centers close to them. Servers don't need to serve requests that the CDN fulfills. 

Two types:
- Push CDNs
    - Receive new content whenever changes occur on your server. You take responsibility over providing content, uploading to CDN, and rewriting URLs to point to CDN. 
    Sites with small amount of traffic that has content not updated often works with push CDN well. 

- Pull CDNs 
    - Grabs new content from server when the first user requests the content. You leave the content on the server and rewrite URLs to point to the CDN. Results in a slower request until the content is cached on the CDN. 
    A time-to-live (TTL) determines how long content is cached. Pull minimizes storage space on the CDN, but can create redundant traffic if files expire and are pulled before they have actually changed.
    - Sites with heavy traffic work well with pull CDNs. 

Disadvantages: CDN costs could be significant depending on traffic, but should be weighted against costs incurred if not using a CDN. Content might be stale, if updated before the TTL expires it. CDNs require changing URLs for static content to point to the CDN. 



# Load balancer 
Load balancers distribute incoming client requests to computing resources such as application servers and databases. The LB returns the response from the computing resource to the appropriate client. 

LBs are good at:
- preventing requests from going to unhealthy servers
- preventing overloading resources
- helping to eliminate a single point of failure 
- session persistence 

LB can be done with hardware ($$$) or software HAProxy.

Two modes: Active-passive or Active-active versions. 

Load balancers can route traffic based on a few metrics: random, least loaded, session/ cookies, round robin or weighted round robin, layer 4, layer 7

Layer 4 load balancing: Looks at info at the transport layer to see how to distribute requests. Simpler.

Layer 7 load balancing: Looks at info at the application layer to see how to distribute requests. Good 4 authentication. 

At the cost of flexibility, layer 4 LB requires less time and computing resources than layer 7. But the performance impact can be minimal on modern hardware. 

- Horizontal scaling & LB
Load balancing can be helpful with horizontal scaling, improving performance and availability. Horizontal scaling is more cost efficient and is more available than vertical scaling (making 1 server scaled up).

Disadvantages of horizontal scaling: Adds complexity, involves cloning servers. Servers should be stateless, they shouldn't have user-related data. 
Sessions can be stored in a centralized data store, like a database or a persistent cache. Downstream servers like caches/ DBs need to handle more simultaneous connections as upstream servers scale out. 

Disadvantages of load balancing: 
Can be a performance bottleneck. Introducing a LB increases complexity. A single LB is a single point of failure, configuring multiple LBs further increases complexity. 

Ex: Nginx (cloud), Citrix (hardware)


# Reverse proxy (web server)
A web server that centralizes internal services and provides unified interfaces to the public. 

Requests from clients get forwarded to a server that can fulfill it before the reverse proxy returns the server's reponse to the client. 

Benefits:
- Increased security, increased scalability & flexibility since clients only see the reverse proxy's IP, SSL termination, compression, cachine, static content gets served directly 

LB vs reverse proxy:
- LB is good when there's multiple servers. LBs route traffic to a set of servers serving the same function.  
- Reverse proxies are good for when there's just 1 web server/ application server

Disadvantage: Increases complexity, a single reverse proxy is a single point of failure 


# Application layer 
Separating the web layer from the application layer lets us scale and configure both layers independently. Adding a new API results in needing more application servers without necessarily adding additional web servers. 

Single responsibility principle advocates for small & autonomous services that work together. 

Microservices is a type of architecture that's made up of small modules. Each running a unique process. 

Disadvantages: Adding an application layer with loosely coupled services requires a different approach from an architecture standpoint vs a monolithic system. Adds complexity. 

# Database

* Relational database management system (RDBMS) *
Good for organizing data items into tables. Also good for ACID compliance. 

A- Atomicity. Each transaction is all or nothing.
C- Consistency. Any transaction will bring the DB from one valid state to another.
I- Isolation. Executing transactions concurrently has the same results as if the transactions were executed serially. 
D- Durability. Once a transaction has been committed, it will remain so. 

Scaling a RDBMS can be done a few ways:
- primary/secondary replication
- primary/ primary replication
- federation
    - splits up databases by function. instead of a single monolithic DB, you can have multiple DBs (1 for users, 1 for products, etc)
    - Good for scaling, but more complex. 
        - Complex: not effective if schema needs huge tables
        - Need to update application logic to know which tables to read/ write
        - More hardware needed
- sharding/ partitioning
    - distributes data across dif. databases such that each only manage a subset of the data. Ex for users DB- as more users are added, more shards are added to the cluster.
    - good for scaling but adds complexity
        - update application logic to know which DB shards to work with 
        - data distribution can be lopsided. more data in one shard than others. rebalancing adds complexity. using a consistent hashing method helps 
        - adds hardware
- denomalization
    - Improve read performance at expensse of write performance 
    - Duplicates data on massive tables to avoid expensive joins. Super fast to read. 
    - A lot of NoSQL is based on just throwing everything into a single table. 
    - But tables r duplicated 
- SQL tuning 
    - Tightening up the schema
        - Make sure to use effective data types. Not saving too much extra. Ex using a long when can use int
        - Avoid using large blobs if not needed
    - Use good indices 
        - Columns that you are querying (SELECT *) could be faster with indices
        - Indices usually represented with self-balancing B-tree
        - Placing an idx keeps data in memory, more space
        - Writes might be slow bc index needs updating 
    - Avoid expensive joins
        - Denormalize if needed
    - Partition tables
    - Tune the query cache 

* NoSQL * 
Collections of data items represented in a key-value store, document store, wide column store, or a graph DB. 

Data is denormalized and joins are done in the application code. 

NoSQL is generally not ACID compliant and favors eventual consistency (two DBs aren't immediately consistent with each other, but will be eventually). 

BASE is used to describe the properties of NoSQL. Chooses availability over consistent-- eventual consistent is not real time consistency. 

BASE = basically available, soft state, eventual consistency. 

When picking a NoSQL solution, need to pick what type:

- Key-value store
    - It's a hash table. O(1) reads and writes 
    - High performance, good for simple data models and rapidly changing data (caches)
    - Only limited set of operations
- Document store
    - Centered around documents (JSON, binary) where a doc stores all info for a given object
    - Doc stores provide APIs or a query language to query based on the internal structure of the doc itself
    - Ex: MongoDB  
- Wide column store
    - Data is stored in columns, that might be grouped in column tables/ super column families
    - Used for very large data sets
    - High availability and high scalability
    - Ex: Cassandra, Bigtable
- Graph database
    - Each node is a record and there are connection between nodes that represents relationships.
    - Good to represent complex relationships with many foreign keys or many-to-many relationships. 
    - High performance for complex relationships like social networks. 
    - New.ish, not wide spread. 

SQL vs NoSQL
- Choose SQL for:
    - Structured data
    - Strict schema
    - Relational data
    - Need for complex joins
    - Clear patterns for scaling 
    - Index lookups are fast
NoSQL:
    - Semi structured data
    - Dynamic or flexible schema
    - Non-relational data
    - No complex joins
    - TBs or PBs of data 
    - Data intensive workload
    - Exs of time to use NoSQL: clickstream, leaderboard or scoring data, temporary data like shopping cart, frequently accessed tables, metadata/ lookup tables

Vertical scaling - make 1 server bigger. Easy, but single point of failure and can only make it so big. 

Horizontal scaling - lots of smaller servers. More complex managability, but more efficient. Redundancy built in. Will also need load balancer. Cloud makes this easier. Kubernetes/ hadoop are exs of horiztontal scaling. App can be global bc cloud based data centers are all over. 


# Cache
Types of caches:
- Client caching
- CDN Caching
- Web server caching
    - ie Reverse proxies can do this
- Database caching
- Application caching 
    - In memory caching like Redis are key-value stores.
    As all caches, need data invalidation strategy, like LRU or LFU. 
- Caching at the database query level
    - When query DB, hash the query as a key and store result as val
    - But hard to delete cached results with complex queries
    - If 1 piece of data changes, need to also update the cache.
- Caching at the object levell
    - See data as an object, like our application code. 
    - Have application assemble dataset from the DB into a class instance or a data structure. 
        - remove object from cache if underlying data has changed
        - allows for async processing 

Good to cache:
    - User sessions
    - Fully rendered web pages
    - Activity streams
    - User graph data 

When to update the cache: 
Honestly running out of time so running through this fast.
- Cache-aside
- Write-through
- Write-behind
- Refresh ahead 


# Asynchronism
Asychronous workflows help reduce request times for expensive operations that would be performed in-line. 
Does time-consuming work in advance, like periodic data aggregation. 

Message queues receive, hold and deliver messages. If operation is too slow to do inline, you can use a message queue. Redis is an ex. 

Task queues - receives task & related data, runs them, delivers results. 

If the task or message queues start to grow too much, the queue size can become larger than memory, resulting in cache misses, disk reads and slow performance. 
Back pressure helps limit queue size, keeping a high throughoput rate and good response times. 

Disadvantage of aynchronism:
- Adding queues can add delays and complexity. Need to make sure the use case is right. Inexpensive workflows might be better for synchronous operations. 


# Communication
- HTTP
    - Default. Request/ response. 
    - Uses TCP/ UDP protocols.
- Transmission control protocol (TCP)
    - Handshake. Needs high reliable, but less time critical. 
    - Use this over UDP when need all data to arrive intact. 
- User datagram protocol (UDP)
    - Connectionless. 
    - Less reliable but good for real time. Like video chat, streaming. 
    - Use when need low latency. Late data is worse than data loss. 
- Remote procedure call (RPC). Idk
- Representational state transfer (REST)
    - Client/ server modle where client acts on a set of resources provided by the server. 
    - Server provides a representation of resouces/ actions that can either manipulate or get a new representation. 
    - 4 qualities of a restful interface
        - Identify resources
        - CHange ith representations
        - Self-descriptive error message
        - Web service should be accessible in a browser
    - Sample of rest calls:
        - GET /resource/ID
        - PUT /resource/ID{"data": "newUpdateData"}
        - DELETE /resource/ID
    - Bad bc sometimes not good bc complexity. REST relies on a few verbs, might not be the best fit for use case. Can be higher latency if data fields aren't updated in all the right places. 

# Security
VERY broad, lots going on. 

- Just make sure that data is encrypted in transit AND at rest in the database. 
- Sanitize user inputs. Prevent SQL injections. 
- Use parameterized queries to prevent SQL injection.
- Ensure user permissions match user needs. The principle of least privilege. 


# Data conversions
8 bits -> 1 byte
1k bytes -> KB
1k KB -> MB
1k MB -> GB 
1k GB -> TB

1 char -> 1 byte
1 integer -> 4 bytes
Timestamp -> 4 bytes

# Time conversion 
3K secs/ hour
90K secs/ day
2.5 mil secs/ month 

# Math 
Traffic =  Avg daily users * average reads/writes per user
Memory = Read requests/ day * Average request size * 0.20
    Cache the 20% most frequent stuff 
Bandwidth = Requests per day * Request size 
Storage = Writes per day * size of write * time to store data
    Save stuff for like 5 years 


# Notes - things that can go wrong 
Communication: 
- Client might not find server
- Server crashes mid-request
- Server response is lost
- Client crashes

- Network might not be reliable and/or secure
- Bandwidth is not infinite 
- High latency 

- Need to synchronize clock to ensure everything is on same page