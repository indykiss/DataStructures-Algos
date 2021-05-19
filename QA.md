
# Software Development Lifecycle 
Goal: to make high quality software in the lowest
amount of time & money that meets and exceeds customer expectations. 
Ensures all stakeholders have a chance to
give input in early stages. 
Shortens development timelines by preventing
after-the-fact fixes. 
Gives everyone on the cross-functional team an understanding of the costs/ resources needed. 
Ensures problems don't get compounded since each phase needs to be accomplished in order. 

Some drawbacks include: 
- can reduce communication between departments as it's a linear model. QA and UX might not be involved during the implementation which can create knowledge silos. 
- process heavy, not tons of flexibility
- creates a single poit of failure in the early stages. 
    - Agile is very people over process, but with SDLC it's hard to make quick adjustments 
- creates a single points of failure in the early stages
BUT SDLC gets incorporates into the agile dev methodology, using sprints to work through phases. 

In an ex of using a sprint to work through SDLC, the team will review backlog. ID a few strategic projects. Assign tasks. Focus on those tasks through the end of the sprint. Then next sprint. 


Diff models include: waterfall model, agile model, rapid prototyping, incremental, and spiral model. 

Stages:
- Gather requirements 
- Planning 
    - ID risks, use cases
- Software design
- Software development
- Testing
- Deployment 
- Maintainence 


Waterfall model: Oldest, most well known 


# Manual testing vs Automated testing 

# Lynda learning, programming fundamentals for QA

 

Add some QA details into these stories for me to brush up on:

- Testing across devices, can use HTML template story—need to gather some data about proper QA. Devices, email clients, did some of the programming + testing.

- Testing new platforms--- Intranet (reported bugs, manual testing, test strategy, more black box testing)

 

Imp:

- Define what it is to be “done”  shared understanding. Usually includes manual + automated testing, and sign off of acceptance criteria by product, design & QA.

 

Testing types:

- Box testing.

            - Black box: No need to know about the source code. Focus is to perform action on UI and expect results. Manual and automation

            - Gray box: Deeper understanding of the system. Integration testing, trigger UI action and see response.

            - White box. Focuses on internals of app, look at the code specifically. Tests the code itself. Unit and system testing.

 


Manual testing (black box testing):
- ID test scenarios before testing
- Build out user stories, all possible scenarios
- Happy path scenarios (all that work), sad path scenarios (weird things—search for things that break the system/ result in errors)



Automation tests:
- Automatically tests UI across browsers/ operating systems. Is a type of black box testing.
- Usually pretty slow, so don’t be too heavy on auto. Usually best for the main few happy path scenarios.

 

Integration testing:
- Focuses on the interaction between application components.
- Looks at how system reacts to actions.
- Type of gray box testing
- Built during build AND test phase. Above usually happen during Test more
- Very fast, faster than automation, so integration testing is great. Should be used a lot.

 

Performance testing:
- Less common than others, but valuable
- Loading testing checks app’s ability to work when there’s bottlenecks. Lots of users using apps during 1 time. Monitor spikes in load time when app is in heavy use.
- Endurance testing: checks how an app handles load over time. See if sessions degrade as people are using the system for a long time. Looks for memory leaks, similar to load testing but lasts longer
- Stress testing: extreme workloads. Looks at data processing. Tries to break system. Tests scalability. Slow internet, internet interruption, etc.
- Security testing: Check if users can hack. Ex: sql infection into text fields. DoS attack – break the server. Eliminate bot traffic fixes it.  

 

Bug reporting:
- Can be high or low impact bug
- Need to use a system to track bugs
- When we write bug reports, need name, descr, expected result, actual result, screenshots, browser/ version, logs, priority, status

- Triage bugs by figuring out: severity (how impactful) and priority (how fast to fix it) with business owners, design, QA.
- Communicate with team about which bugs are prioritized. Project board, new, ready for dev, in progress, QA, done. Get analytics on bugs created/ closed a month. See trends.

 