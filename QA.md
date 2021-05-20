
# Software Development Lifecycle 
Goal: to make high quality software in the lowest amount of time & money that meets and exceeds customer expectations. 
Ensures all stakeholders have a chance to give input in early stages. 
Shortens development timelines by preventing after-the-fact fixes. 
Gives everyone on the cross-functional team an understanding of the costs/ resources needed. 
Ensures problems don't get compounded since each phase needs to be accomplished in order. 

Some drawbacks include: 
- can reduce communication between departments as it's a linear model. QA and UX might not be involved during the implementation which can create knowledge silos. 
- process heavy, not tons of flexibility
- creates a single point of failure in the early stages. 
    - Agile is very people over process, but with SDLC it's hard to make quick adjustments 
- creates a single points of failure in the early stages
BUT SDLC gets incorporates into the agile dev methodology, using sprints to work through phases. 

In an ex of using a sprint to work through SDLC, the team will review backlog. ID a few strategic projects. Assign tasks. Focus on those tasks through the end of the sprint. Then next sprint. 


* SDLC stages:
- Gather requirements 
- Planning 
    - ID risks, use cases
- Software design
- Software development
- Testing
- Deployment 
- Maintainence 

# Testing methodologies: Strategies that are used to certify that the 'Application under test' meets client expectations

- Waterfall model: Going through the stages (requirements,design, implementation, verification, maintenance) sequentially. 
Pros: Very simple to plan and manage. 
Cons: Must wait for the previous stage to finish before starting the next. Not great for uncertainties or if requirements might change. 

- Iterative/ incremental: A big project is divided into small parts. Each part is subjected to multiple iterations of the waterfall model. At the end of each iteration, a new module is developed or an existing module is enhanced. Module is integrated into software architecture and the entire system is tested all together. 
Pros: Feedback is immediately available at the end of each cycle
Cons: Increases communication overhead since at the end of each cycle, feedback about deliverables happen. Based on waterfall method, so slightly sequential

- Agile model: Software is developed in incremental, rapid cycles. Interactions between customers, developers, and client are emphasized. Continuous evolution of requirements. 
Pros: Possible to make changes at any time to evolve with evolving requirements. Minimizes risks. 
Cons: Constant client interaction adds time pressure on all stakeholders- devs, testers, client themselves. 

- Rapid prototyping: 

Others:
- Spiral model, extreme programming

Pick methodology based on scheduling, defined deliverables, test approach, reporting.



# Functional testing vs non-functional testing 
Functional: unit testing, integrating testing, system testing, acceptance testing 

Non-functional: performance, security, usability, compatibility testing 


# Lynda learning, programming fundamentals for QA
 
Imp:
- Define what it is to be “done” = shared understanding. Usually includes manual + automated testing, and sign off of acceptance criteria by product, design & QA.
 
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

Telemetry = using data to build analytics. Provides insights on which features get used most, detection of bugs, offers better visibility into performance. You can use Azure for telemetry. 

# Unit testing 
First level of testing. Unit testing can be done manually, but can be automated. Ensures individual components of software at the code level are working. Like LC tests for algos are unit tests. Usually devs build. 

# Integration testing 
After each unit gets tested, it gets integrated with other units to create modules that are needed to perform specific tasks. Then the module gets tested to ensure the whole segment works. Tests are framed by user scenarios, like logging in or opening files. Integrated tests are conducted by devs or testers. Usually comprised of automated functional and manual tests. 

# System testing 
Black box testing used to test the entire system as a whole. System is tested end to end before going to production. Usually done by testers.

# Acceptance testing 
Last part of functional testing. Checks that piece of software is ready for delivery. Double checks that product meets business criteria. Product is tested both internally and externally. Beta testing happens here.  

# Performance testing 
Non-functional testing-- sees how application behaves under various conditions. 
- Load testing (lots of users-- can app handle it?)
- Stress testing (overload app on purpose until it breaks by applying both realistic and unrealistic load situations)
- Endurance testing  (works with load over extended period of time - uncovers memory leaks ie when program incorrectly manages memory allocation in a way that memory which is no longer needed doesnt get released). 
- Spike testing (determines how software will response to large bursts of activity over varying amounts of time)

# Security testing 
Non-functional req. 
- Data needs to get saved in app. Security testing looks to find loopholes in the system that could compromise the system. 
- 6 principles of security: integrity, confidentiality, authentication, authorization, availability, non-repudiation 

# Usability testing 
Tests use of ease from a user standpoint

# Compatibility testing 
How does the app work across multiple operating systems, platforms, browsers, resolution configurations. 

# Regression testing 
Testing existing software applications to make sure a change/ addition doesn't break any existing functionality. Rerunning functional/ non-functional tests  

# QA Metrics 
Total number of test cases, passing test cases, failed test cases, # of IDed bugs, rejected bugs, critical bugs, number of test hours, bugs detected after release, hours spent on testing, hours expected to spend on testing.  

Basically all different ways to quantify the success of the QA process. 

Helps us set baselines. Example: 

Test design efficiency = # tests designed / total time 
Test review efficiency = # tests reviewed / total time 
Number of bugs per test = # of defects / # of tests
Total allocated cost, actual cost of testing, budget variance, time variance, 
cost per bug, cost of not testing 
