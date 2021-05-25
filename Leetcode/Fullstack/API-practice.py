

# Rest API Basics:
# Make HTTP request, convert to JSON string, parse it

# https://www.hackerrank.com/test/md1hiktjtk/questions/32gbiihfdea


# Question 1: 
import json 
import requests 

# Annoying. Passing tests, but didn't let me use helper methods. Good enough
def getTotalGoals(team, year): 
    totalGoals = 0 
    try:
        # Step 1: Define our URL, requests.get(url) to get data
        url = ("https://jsonmock.hackerrank.com/api/football_matches?year={}&team1={}&page=1".format(year,team))
        requestData = requests.get(url).json(); 
        totalPages = requestData["total_pages"]
        matchesPerPage = requestData["per_page"]
        
        # Step 2: Convert to JSON so we can do things 
        for i in range(1, totalPages+1):
            correctedURL = ("https://jsonmock.hackerrank.com/api/football_matches?year={}&team1={}&page={}".format(year,team,i))
            pageData = requests.get(correctedURL).json() 
            try:
                for j in range(0, matchesPerPage): 
                    matchGoals = pageData['data'][j]['team1goals']
                    totalGoals += int(matchGoals)
            except: 
                pass

        url2 = ("https://jsonmock.hackerrank.com/api/football_matches?year={}&team2={}&page=1".format(year,team))
        requestData2 = requests.get(url2).json(); 
        totalPages2 = requestData2["total_pages"]
        matchesPerPage2 = requestData2["per_page"]
        
        for k in range(1, totalPages2+1):
            correctedURL2 = f"https://jsonmock.hackerrank.com/api/football_matches?year={year}&team2={team}&page=" + str(k);
            pageData2 = requests.get(correctedURL2).json() 
            try: 
                for m in range(0, matchesPerPage2): 
                    matchGoals2 = pageData2['data'][m]['team2goals']
                    totalGoals += int(matchGoals2)
            except:
                pass
    except:
        pass    
    
    return totalGoals


# Not passing tests :(
# import urllib.request 
# import json 

# def makeRequest(url): 
#     with urllib.request.urlopen(url) as response: 
#         html = response.read()
#     jsonData = json.loads(html)
#     return jsonData 

# def countHomeGoals(url, pages): 
#     totalGoals = 0
#     # For each page in home games
#     for i in range(1, pages+1): 
#         try: 
#             pagedURL = url + str(i); 
#             data = makeRequest(pagedURL)  
#             print(data)         
#             # Add each match within each page 
#             for matchGoals in data['data']: 
#                 totalGoals += int(matchGoals["team1goals"])
#         except: 
#             pass 
#     return totalGoals

# # Not ideal, need to abstract
# def countAwayGoals(url, pages): 
#     totalGoals = 0
#     # For each page in home games
#     for i in range(1, pages+1): 
#         try: 
#             pagedURL = url + str(i); 
#             data = makeRequest(pagedURL)  
#             # Add each match within each page 
#             for matchGoals in data['data']: 
#                 totalGoals += int(matchGoals["team2goals"])
#         except: 
#             pass 
#     return totalGoals
    
# def getTotalGoals(team, year):
#     # URLs for home and away games
#     urlHome = f"https://jsonmock.hackerrank.com/api/football_matches?year={year}&team1={team}&page="
#     urlAway = f"https://jsonmock.hackerrank.com/api/football_matches?year={year}&team2={team}&page="
    
#     # All data for home/ away pages
#     dataHome = makeRequest(urlHome)
#     dataAway = makeRequest(urlAway)
    
#     # How many pages each home/away page has?
#     pagesHome = dataHome["total_pages"]
#     pagesAway = dataAway["total_pages"]
    
#     # For all these pages, how many total goals?
#     homeGoals = countHomeGoals(urlHome, pagesHome)
#     awayGoals = countAwayGoals(urlAway, pagesAway)
    
#     return homeGoals + awayGoals



# Question 2: Not passing tests, not super close 

import json 
import requests 

def getNumDraws(year): 
    totalDraws = 0 
    # IDK!!!! So close but not really. maybe math? should be 500.ish

    for page in range(1, 2): 
        data = numOfMatches(year, page, lotsOfPages?)
        # Add by 10 matches, all draws, if we have a lot of pages
        if page < data["total_pages"]: 
            totalDraws += ((data["total_pages"]) * 10)
        else: 
            totalDraws += len(data["data"]) 
        if page == data["total_pages"]: 
            break 
        page = data["total_pages"]
    return totalDraws
         
def numOfMatches(year, page, goals):
    url = ("https://jsonmock.hackerrank.com/api/football_matches?year={}&team1goals={}&teams2goals={}page={}".format(year, goals, goals, page))   
    requestData = requests.get(url).json(); 
    return requestData 
    

# Too slow 
# def getNumDraws(year): 
#     totalDraws = 0 
#     try:
#         url = ("https://jsonmock.hackerrank.com/api/football_matches?year={}&page=1".format(year))
#         requestData = requests.get(url).json(); 
#         totalPages = requestData["total_pages"]
#         matchesPerPage = requestData["per_page"]
        
#         # For each page
#         for i in range(1, totalPages+1):
#             correctedURL = ("https://jsonmock.hackerrank.com/api/football_matches?year={}&page={}".format(year,i))
#             pageData = requests.get(correctedURL).json() 
#             try:
#                 # Check if draw for each match
#                 for j in range(0, matchesPerPage): 
#                     team1Goals = pageData['data'][j]['team1goals']
#                     team2Goals = pageData['data'][j]['team2goals']
#                     if team1Goals == team2Goals: 
#                         totalDraws + 1
#             except: 
#                 pass
#     except:
#         pass    