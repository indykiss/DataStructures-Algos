
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
- Let's say it writes once a day
  - Other option could be a continuous delivery 

# Start with building UI based on product requirements
- Draw out the tenants dashboard:
  - 6 graphs total. 3 for change over time in usage. 3 for change in cost over time 
- Draw out the landlord dashboard:
  - Drop down for building 
    - Within each building:
      - 6 graphs. 3 for change over time usage and 3 in change over time cost.  

# API Endpoints. Communication between components 
# Write -- reading -- updating -- deleting

  # Apt hardware is pulling data from apts into a table
  - /write_water_metric, params: dateTime, water_data, aptID  
  - /write_gas_metric, params: dateTime, gas_data, aptID 
  - /write_elec_metric, params: dateTime, elec_data, aptID

  # Uses data to build tenant dashboards 
  - /dashboard_ten_get_water, params: startDate, endDate, water_data, aptID
  - /dashboard_ten_get_gas, params: startDate, endDate, gas_data, aptID
  - /dashboard_ten_get_elec, params: startDate, endDate, elec_data, aptID 

  # Uses data to build landlord dashboards 
  - /dashboard_ll_get_water, params: startDate, endDate, water_data, buildingID
  - /dashboard_ll_get_gas, params: startDate, endDate, gas_data, buildingID
  - /dashboard_ll_get_elec, params: startDate, endDate, elec_data, buildingID

  # Calculate data to make dashboards 
  - /calc_apt_cost_over_time, params: startDate, endDate, type_of_util, cost_of_util, aptID
  - /calc_apt_usage_over_time, params: startDate, endDate, type_of_util, aptID 
  - /calc_build_cost_over_time, params: startDate, endDate, type_of_util, cost_of_util, buildingID
  - /calc_build_usage_over_time, params: startDate, endDate, type_of_util, buildingID  

  # Build visualization: Dashboard converts the data to charts

  # Build accounts
  - /create_account, params: email, pw (secure), name, unit, userType
  - /login, params: email, pw, userType  

  # Dropdown for building
  - /get_building_by_landlard, params: buildingID, landlordID

# Scale 
Small scale, 


# Data schema: SQL because relational 
Tenant user table: userID, aptID, buildingID, email, pw
Landlord user table: userID, email, pw 
Building table: buildingID, ownedByLandlordID

Water metric table: aptID, buildingID, dateTime (by day), usage_field, cost_of_water 
Gas metric table: aptID, buildingID, dateTime (by day), usage_field, cost_of_gas
Electric metric table: aptID, buildingID, dateTime (by day), usage_field, cost_of_electric 
  - These three data tables can be very big; if doing daily
  - Can these all fits into one DB or do we need to vertical (1 server getting larger)/ horiztonal scaling (multiple servers)? 


# High level architecture, UI/ UX
- Web app (React maybe) -> backend server -> database 
- Load balancing, caching
- 

# Data flow, there are two ways: 
Request/ response HTTP data flow 
  HTTP = get, post, put
Publish/ subscribe data flow
