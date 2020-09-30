

/*
Design Underground System

Implement the class UndergroundSystem that supports three methods:

1. checkIn(int id, string stationName, int t)
A customer with id card equal to id, gets in the station
stationName at time t.
A customer can only be checked into one place at a time.
2. checkOut(int id, string stationName, int t)

A customer with id card equal to id, gets out from the 
station stationName at time t.
3. getAverageTime(string startStation, string endStation) 

Returns the average time to travel between the startStation 
and the endStation.
The average time is computed from all the previous traveling 
from startStation to endStation that happened directly.
Call to getAverageTime is always valid.
You can assume all calls to checkIn and checkOut methods are 
consistent. That is, if a customer gets in at time t1 at some 
station, then it gets out at time t2 with t2 > t1. All events 
happen in chronological order.

 

Example 1:
Input
["UndergroundSystem","checkIn","checkIn","checkIn","checkOut",
"checkOut","checkOut","getAverageTime","getAverageTime",
"checkIn","getAverageTime","checkOut","getAverageTime"]
[[],[45,"Leyton",3],[32,"Paradise",8],[27,"Leyton",10],
[45,"Waterloo",15],[27,"Waterloo",20],[32,"Cambridge",22],
["Paradise","Cambridge"],["Leyton","Waterloo"],[10,"Leyton",24]
,["Leyton","Waterloo"],[10,"Waterloo",38],["Leyton","Waterloo"]]

Output
[null,null,null,null,null,null,null,14.00000,11.00000,null,11.00000,null,12.00000]

Explanation
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);
undergroundSystem.checkOut(27, "Waterloo", 20);
undergroundSystem.checkOut(32, "Cambridge", 22);
undergroundSystem.getAverageTime("Paradise", "Cambridge");       // return 14.00000. There was only one travel from "Paradise" (at time 8) to "Cambridge" (at time 22)
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000. There were two travels from "Leyton" to "Waterloo", a customer with id=45 from time=3 to time=15 and a customer with id=27 from time=10 to time=20. So the average time is ( (15-3) + (20-10) ) / 2 = 11.00000
undergroundSystem.checkIn(10, "Leyton", 24);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 11.00000
undergroundSystem.checkOut(10, "Waterloo", 38);
undergroundSystem.getAverageTime("Leyton", "Waterloo");          // return 12.00000
Example 2:

Input
["UndergroundSystem","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime","checkIn","checkOut","getAverageTime"]
[[],[10,"Leyton",3],[10,"Paradise",8],["Leyton","Paradise"],[5,"Leyton",10],[5,"Paradise",16],["Leyton","Paradise"],[2,"Leyton",21],[2,"Paradise",30],["Leyton","Paradise"]]

Output
[null,null,null,5.00000,null,null,5.50000,null,null,6.66667]

1. Checks someone into a station
2. Checks someone out of a station
3. Finds avg time between stations

People can only be at 1 station at a time.

 -Create a map called arrivals that tracks 
    an ID to an object with (id, station, t)
    that represents the person
    Every time we check in a customer, we add data to map
-Create a map that tracks averages 
    key as str of combined station names to an
    object that's (total, count) where total is sum of all 
    the travel that happened between the 2 stations and count 
    being # of people who had traveled so we can calc avg = total/ count
*/



// Definitely need to do me again Bloomb
class UndergroundSystem {
    
    constructor() {
        this.arrivals = new Map(); 
        // Customer : {stationName, time}
        this.averages = new Map(); 
    }
    
    // When someone checks in, add them in
    checkIn(id, stationName, t) {
        this.arrivals.set(id, {stationName, checkInTime: t});
    }
    
    checkOut(id, stationName, t) {
        // Look up customer from arrivals map 
        const startStation = this.arrivals.get(id);
        if(!startStation) {
            throw new Error(`That customer didn't check in`)
        }        
        // Figure the route from the start station
        const stationRoute = `${startStation.stationName}, ${stationName}`
        // But add it into the map that tracks averages 
            // If it already exists, increment, if not, add
        const duration = t - startStation.checkInTime;
        if(this.averages.has(stationRoute)) {
            this.averages.get(stationRoute).push(duration);
        } else {
            this.averages.set(stationRoute, [duration]);
        }
        // Remove this from arrivals, to save space
        this.arrivals.delete(id)
    }
    
    getAverageTime(startStation, endStation) {
        const route = this.averages.get(`${startStation}, ${endStation}`);
        let total = route.reduce((a,b) => a + b),
            count = route.length; 
        return total/count;
        
    }    
}

