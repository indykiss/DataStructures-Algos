
Interviewing.io practice 
iMessenger system
---------------------

Requirements & goals
High level design 
Estimations of capacity
  - Traffic, storage, bandwidth? 
API & schemas(good to have)


1. Requirements
Functional: 
- Real time conversation between 2 users 
- Sending videos/ images/ files 
- Store conversation (1 year)
- See status of other users (offline vs online) 
- See status of message - sent, delivered, read 

Non-functional: 
- Low latency 
- CAP theorem ; partitionable, consistent, 
reduce availability. 3-4 ninths available (theory, impossible to know for sure) *
- Reliable & management 
- security/privacy * 

Extended system:
- Group chatting


Methods of communication: [REST, Websockets between client & server: persistent connections, long polling? ]
- File storage 4 databases
- Think about status throughout system 
- DB shard = 1 table / by shards bc its too big. We'd want new tables for 
sent vs delivered vs sent. Two separate tables are needed here 
- Check how to optimize for latency. 
- CDN --> content delivery network. Why used & how it's used.
- Security -> encryption (look this up). Before message is sent to chat server, it
encrpyts the message. The DB is also storing encryption. User2 has a key to un-encrypt 
the message. Security = who can see the message, privacy = only users can understand the message 

Grokking - older. Read through the techniques, but think about each problem individually 
Why and how components are being used within a system. 
Youtube for components