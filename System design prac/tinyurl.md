Designing a URL shortening service like TinyURL:

1. Establish parameters and goals
- User interacts with site, inputs long url, gets back a unique shortened URL. 
- The short URL redirects to the long URL. 
- Should users be able to customized the short link? 
- Save the long URL and shortened URL? 
- If we do save the shortened link, how long do we want to save it for? Expiration date? 
- User accounts? Nah. 

2. Estimate scale 
- LOTs of read requests, since we are mainly provided a service that inherently will be used as read more than write. Redirecting of short-> long URL is read. And the creation of shortened links are write requests. 
- Monthly. 1 write to every 100 read. 
- Dedicate a lot of application servers to read versus write. 
- Also good to backups of the info across servers, in case there's an outage. 
- Traffic estimate. 100,000 links/month and 100 reads/ link -> 1,000,000 redirects/ month. 
- Let's say we save a link for 1 year. We have 1,200,000 links/ year to stored in our databases. 
- We'd want to calculate the amount of storage that we'd need for a year. Save 1.2M links. Pretend 100K links = 1 TB. So we can say we'd need 12 TBs of storage. 
- Bandwidth estimate: Expect 1M redirects/ month. 200 redirects/ second, so we can expect 500 bytes for each 200 redirect => 100 Kilobytes/ second for redirects. 
- Memory estimate:  We want to cache the frequently used URLs, so we'd want to use some memory to store that. Let's say it's 20% of our estimated 100K links/months => 20K frequent links. Some memory to store these. Let's say 20% of 12 TBs/ year cached => 2.1 TB

3. System interface definition 
APIs? 

URL(longUrl, shortUrl, expire, api_dev_key, username)

To prevent abuse, we can limit users via their api dev key. 

4. Data models 
Defining the DB schema, which would be helpful to understand data flow between components. 
We know each object is tiny, but we have a ton of them. 

Two tables needed:
User: username, email, secure_password
URL: longUrl, shortUrl, expirationDate, userID

We'd want a NoSQL store since there's so many objects and this is non-relational. 

5. High level design 
step 1: given an input of a long url, we create a short url. Possibly we can use a random string generator, 8 characters. Append that to the tinyurl.com domain and that's work. We should definitely save each of these randomly generated domains, to prevent duplicates. 

step2: need to partition our DB that would divide and store our data into different servers. We can do hash-based partitioning where we can randomly distribute URLs into different partitions.

step3: we'd probably want to cache the most commonly used URLs. 2.1 TB of cache space. I think a server can hold 256 GB, so we'd need like 4 servers to handle. In the situation where we exceed cache space, we can boot out the Least Recently Used url in the system. 

step4: we'd want to add a load balancing layer between the clients and application servers, between application servers and database servers, and between application servers and cache servers. We can use a LB solution that checks with the server about its loads; if it's overloaded, the LB can adjust traffic elsewhere.  

step5: When links expire, we can actively monitor and delete the link. Or do an easier process where if a person tries to access link that is expired, we can delete it then. But that's not a user experience, so we might push out the expiration a year if the links expired, and activate a quarterly clean up for links that havent been used in over a year and are expired. 

step6: set up some analytics to track usage. number of users, activity level of the users, countries, how was site accessed mobile or desktop. 