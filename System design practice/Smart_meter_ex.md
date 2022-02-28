
Systems design for a smart electric meter system for an apartment building with one dashboard for tenants to show hourly/weekly/monthly/yearly readings to their specific units, and another dashboard for the owner with similar readings but only by floors or building electricity usage… Started with big components, and was allowed to delve into specifics in any other area per interviewee comfort and expertise. 

Create a design where you have electric meters at unit and they send the information to central service. Your web-app should display the information for the customers and admin to see thier usage utility.

# Product requirements
- Dashboard for tenant
  - Daily, weekly, monthly, yearly readings? Historical data past 5 years.  
    - Are we dividing utility usage by electric, water, gas or just 1 dashboard for all? Each. 
    - Are we potentially using the data to provide tips to tenants on how to save money? Sure, extended feature. 
  - UI/ UX is important. Data visualization clear for gen popul.
- Dashboard for landlord 
  - Summarize information for all tenants 
    - Multiple buildings? Each building has its own? 
- User login for both tenants and landlords 
- Connection to the hardware that monitors the utilies 
  - Existing architecture to connect to as we add this smart meter 
- Room by room usage 

# API Endpoints, public/ private 
- Public 
  - /water_vis, params: time_frame, water_data 
  - /gas_vis, params: time_frame, gas_data 
  - /elec_vis, params: time_frame, elec_data 
  - 

- Private 
  - /create_account, params: email, pw (secure), name, unit
  - /login, params: email, pw 
- ?????
  - /collect_data, params: data_point, util_type 
  - /water_data, params: 
  - /gas_data 
  - /elec_data 

# Scale 


# Data schema 


# High level architecture, UI/ UX
- Web app (React maybe) -> backend server -> database 
