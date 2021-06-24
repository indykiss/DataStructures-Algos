
# Design an API that does XYZ 
# Ex: File download

# API = Basically asking for a thing 

- Scalbility
- Storage data model
- Data options, schemas/ ie tables, cols
- Client-server design 
- Long term vs easy-to-build short term design
- Accomodating for possible product changes


1. Clarify input and output. Ask lots of clarifying questions, figure out the problem's requirements. Any constraints? Ask Qs as we go.
Problem tree structure the problem. 
    User inputs URL
    Output is a file downloaded
    How many users
    How many files 
    How many downloads/ second

2. Design solution with boxes/arrows. 

2. We'd have a server that takes request and responds. 
What communication? Maybe HTTP is usually good. 
Pass in file name, user ID/ info if needed. 

Maybe include search API to search for files. Index with elastic search or build own index. 

3. Load balancer 
How to balance load. Round robin, weighted round robin, least connection. 

4. Cache 
Cache most frequently used docs, have eviction policy. 

5. Where are the files stored?
On cloud probably best. S3? Anything else?

6. How does files get to the location?

7. What are the size of the files? Can we download all in one go, or are the files large and we need to chunk them and send. 

