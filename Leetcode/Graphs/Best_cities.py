
Best cities 
You are given a set of cities, for each you know the anticipated 
excitement you get by visiting this city. You are also given a 
set bidirectional flights, and you need to choose 4 distinct 
cities A, B, C, D so there are direct flights between 
A-B, B-C, C-D and total excitement is maximized.

Input:

N cities:
New York 10000
San Francisco 1000
Texas 500
LA 20000
Chicago 3000
San Jose 900

M flights:
New York <-> San Francisco
New York <-> LA
Chicago <-> LA
San Jose <-> San Francisco

Output:
San Francisco -> New York -> LA -> Chicago
1000 + 10000 + 20000 + 3000 = 34000

Strategy:
- Make a bidirected graph using the flights to see the connections 
- Iterating through all the cities - 
    - DFS, looking to count all the excitment for a current path 
    of size 4
    - Update a max_excite variable based on this val 
- Time: O(num_of_cities * (num_of_cities + num_of_flights))
- Space: O(num_of_cities)

def get_best_cities(cities, excites, flights): 
    graph = collections.defaultdict(list)
    # graph initialized with list as val 
    max_excit = 0 
    cities_max_excit = ""

    # build a bi-directed graph using flights 
    for flight in flights: 
        cityA = flight[0]
        cityB = flight[1]
        graph[cityA].append(cityB)
        graph[cityB].append(cityA)

    # iterate through the cities and BFS
    for city in cities: 
        q = []
        q.append([city, [city], excites[city]])
        visited = set()
        while q: 
            curr_city, curr_path, curr_excit = q.pop(0)
            if len(curr_path) < 4: 
                # look at all the potential connections, add to q
                for connection in graph[curr_city]: 
            # exictement?? 
                    if connection not in visited: 
                        q.append([connection, curr_path.append(connection), curr_excit += excites[connection]])
                        visited.add(connection)
            elif len(curr_path) == 4: 
                if max_excit < curr_excit: 
                    max_excit = curr_excit
                    for city in curr_path: 
                        cities_max_excit += city 
                        cities_max_excit += " -> "

    return [cities_max_excit, max_excit]


    

        
