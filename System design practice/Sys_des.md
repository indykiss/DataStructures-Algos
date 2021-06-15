

## Github primer notes ##
https://github.com/donnemartin/system-design-primer#system-design-topics-start-here 


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

Layer 4 load balancing: Looks at info at the transport layer to see how to distribute requests. 

Layer 7 load balancing: Looks at info at the application layer to see how to distribute requests. 

At the cost of flexibility, layer 4 LB requires less time and computing resources than layer 7. But the performance impact can be minimal on modern hardware. 

- Horizontal scaling & LB
Load balancing can be helpful with horizontal scaling, improving performance and availability. Horizontal scaling is more cost efficient and is more available than vertical scaling (making 1 server scaled up).

Disadvantages of horizontal scaling: Adds complexity, involves cloning servers. Servers should be stateless, they shouldn't have user-related data. 
Sessions can be stored in a centralized data store, like a database or a persistent cache. Downstream servers like caches/ DBs need to handle more simultaneous connections as upstream servers scale out. 


Disadvantages of load balancing: 
Can be a performance bottleneck. Introducing a LB increases complexity. A single LB is a single point of failure, configuring multiple LBs further increases complexity. 


# Reverse proxy (web server)
A web server that centralizes internal services and provides unified interfaces to the public. 

Requests from clients get forwarded to a server that can fulfill it before the reverse proxy returns the server's reponse to the client. 

Benefits:
- Increased security, increased scalability & flexibility since clients only see the reverse proxy's IP, SSL termination, compression, cachine, static content gets served directly 
