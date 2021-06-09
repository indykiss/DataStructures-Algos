
# General points:
- Basics (computational thinking, sorting, data structures) - they never ask directly but understanding will help with the other topics)
- Database design (Centralized vs decentralized, sharding, factors influencing the number of replicas - the volume of data, future scale, growth, data structure, desired speed, etc)
- Technology stacks (front, back,api, database, etc)
- Cloud (cloud vs own servers pro and cons, uptime % SLAs, load balancing, etc)
- Server storage - major cost buckets - remember about additional replicas and cooling electricity costs
- Security (encryption basics, public keys, password change policy, cloud security and encryption on your computer)
- Agile and development (Agile principles, Environments: Developing, testing, production, Native apps / web apps / hybrid apps, etc)
- M&A and IT (Will it be one system or two systems? Is it "Adopt and go" approach or we take the best of both systems and create a new one? Integrate now, innovate later? Or Innovate now, when you have time?)
- IT strategy and Digital transformation (Similar to M&A)
- IoT (Mainly the use of IoT in operations - Process steps completion, measuring temperature, maintenance measurements, other measurements, predicative algorithms, etc)


# Process
1. Define the problem. Listen and ask clarifying questions. Paraphrase to confirm. 
2. Structure an approach. Build issue tree, be MECE. 
Describe the overall approach before going into the details 
3. Analyze data - math question. 
Can break down problem, round if needed, scale is important not the exact nums. 
4. Develop a conclusion. Synthesize implications. Relate them back to the 
client problem. Answer the Q that was asked. 
 

# Must-know math formulas
Revenue = Volume x Price

Cost = Fixed costs + Variable costs

Profit = Revenue - Cost

Profit margin (aka Profitability) = Profit / Revenue

Return on investment (ROI) = Annual profit / Initial investment

Breakeven (aka Payback period) = Initial investment / Annual profit


# Practice case 

1. collection/ transmission of travler health data
2. aggregate to analyze where high risk of outbreak 

Build a prototype of system that tracks people traveling 


Clarifying questions?
- Global? National? Global. 
- Data: temperature, symptoms, contact w/ infected individuals, 
age/ gender, other data 

? Factors to consider when building end to end technical architecture? 

* My initial, waaayy too detailed thoughts: 
- Functional / non-functional requirements. 
    - Functional: Data collection form, saved to DB. If reports/ dashboards are up, new data gets sent/ updated in the reports
    - Non-functional: CAP theorem-- consistent, partionable data, available. 
        - Consistency, accuracy 
        - Highly available. Down a little bit is okay 
        - Heavy data bc global, but each data point is fairly small. Partionable. 
        - Scalable, maintainable, reliable

- Data - store possibly massive amounts of info. How storing data? Cloud-based, data centers located throughout the world. 
SQL- relational information - locations. 
Redundant copies of data in case system goes down. 

- Use a quick technology architecture to build. Focus on functionality vs UX/ UI. Which tech to use? 
Web app? Desktop app? Mobile app? 
Web app -> RoR, JS/HTML/CSS, Python bc of the data visualization
Desktop app -> Electron (JS/HTML/CSS), C#, Java
Mobile app -> React, Mobile Angular 

- Dashboard/ reports creation : data visualization tech (lean into libs to save time). Python might be good
- Load of data -> need load balancers? 

Architecture:
- AgencyLocation1 -> App server -> DB
- Dashboard info to agency, coming from app server 


* Correct factors:
- Need to use a quick technology for MVP version and subsequent rapid updates  
    - Flexible data modeling, continuous feature releases to users 
- Data collection: volume, users collecting data- tech savy or not, devices provided for data collection-- assume devices are rolled out to all users
- Data transmission: load balancing, internet speed, proxmity to data centers/ servers
- Data aggregation: Automation of aggregating data, unstructured/ structured data, data quality
- Analytics: Automated reports/ dashboards, or manual creation capability of reporting needed, data persistence strategies 
- Human/ environmental constraints: Language barriers, internet bandwidth, infrastructure. 
- Systems integration: Need to integrate w/ prev systems 


? Focus on accuracy and timeliness of data ? 
- Human factor: Train all users to accurately input data. Easy interface for data collection in MVP. 
- Mobile app and/or cloud-based web app because of ability to scale and easy to use, can leverage mobile device capabilities 
- Central DB for ease of data querying. Single source of truth 
- Supporting devices all in place, temperature guns need to be accurate 
- Timeliness: speed of data transmission, global data centers strategically placed to maximize speed. 
- Built in reporting/ dashboards for FAQs
- Integration with existing traveler data (ticketing), social media for info (FB/ insta check ins for locations/ symptoms scan for twitter/ fb)


? Maths option 1:
- traveler vol: 2 million ppl/ day
- 1/10K rate of infection among traveling vol
- 1 infected traveler -> 30% chance of infecting 1 person/ 1 day 

- Estimated: 20% chance of infecting 1 person/ 1 day 

2 mil ppl/ day  * 1/10K rate of infec

- 200 ppl / day are likely infected
- Increase of 30% of prev day infected 

3 days of no-action: 
- 260 after day 1, 
- 340 after day 2
- 450 ppl infected after day 3

3 days of our system:
- 240, day 1
- 290, day 2
- 350 day 2

Follows exponential growth. 



? Maths option 2: Wrong 
- 1 infected -> 1 person/ day 
- 2 mil ppl/day
- 1/ 10K rate of infection 

200 of ppl infected  -> will infect another 200 ppl 

3 days of no-action:
- 0 (200 orig -> 200 new infected)
- 0 (400 orig -> 400 new)
- 200 (800 orig -> 800 new) 
total infected: 1600

3 days of our new system: 
- 0 (200 orig -> 200 new)
- 200 (200 -> 200 new)
- 400 (200 -> 200 new)
total infected: 600 

1000 spared infections with new system 

After day 3, exponential growth of infected. 