
# Basic notes for a general OOD 
# Non-diagram building, just talking through and notes

Build a thing

1. Define product requirements. Ask Qs 
2. Defining what the user interface basically-- web app or mobile app, interfacing with a backend server 
    API: 
    - Public endpoints (2-3):
        - /doThisThingToUser
            - What data we need to input 
                - Params: id, start, end 
            - What data to output 
                - Return something 
    - Private endpoints (2-3), to match public:
        - /doInternalThingToManipulateData
            - Params: id, user_id, etc 
            - Returns: something 
        - Creating account (hashing to save pws, security for credit cards, etc). Can implement third party SSO option
        - Login endpoint
3. Scale discussion 
    - CAP 
    - Do we need distributed system 
        - Maybe if massive (mils), so discuss
    - Upper bounds
4. Data schema 
    - MySQL or no-SQL 
    - What do our SQL data tables look like
        - User:
            - id: int 
            - email: str
            - pw: str (hashed/ secure)
            - time_joined: timestamp
5. High level architecture
    - Application UI
    - Backend server
    - Database 
    - LB
    - Maybe making a diagram here 

Really talking through all the variables to consider, detail oriented, when we're looking at the system. Honestly, maybe just steps 1-2 total for the hour. 


Build a smart electric meter system for apartment building. 