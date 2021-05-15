





// ALL SUPER INCORRECT. JS PROMISES IS BEING WEIRD, I CAN'T FIGURE IT OUT
// PLEASE LOOK AT PYTHON API-PRACTICE.PY FOR THIS CORRECT ANSWER



//https://www.hackerrank.com/test/md1hiktjtk/questions/32gbiihfdea


const request = require('request');


async function getTotalGoals(team, year) {

    // false hits: 
    // let requestData = request.get('http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team1='+team+'&page=1');
    // let requestData = https.request('http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team1='+team+'&page=1', (res) => { }); 
        

    // Did our team win for home games
    const apiRequests = {
        url: 'http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team1='+team+'&page=1',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    };
    
    // messy and weird, but works!! 
    request(apiRequests, function(error, res, body) {
        var json = JSON.parse(body);
        var totalGoals = 0;
        
        let total_pages = json['total_pages'],
            matches = json['total']; 
            
            
        // multiple pages maybe 
        for(let i = 1; i <= total_pages; i++) {
                        
            // on each page, multiple matches
            for(let j = 0; j < matches; j++) {
                let matchGoals = json['data'][j]['team1goals'];
                totalGoals += Number(matchGoals);
            }
        }
        
        console.log(totalGoals);
    });
        
    
    // Did our team win for away games
    const apiRequests2 = {
        url: 'http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team2='+team+'&page=1',
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    };
    
    request(apiRequests2, function(error, res, body) {
        var json2 = JSON.parse(body);
        var totalGoals2 = 0;
        
        let total_pages2 = json2['total_pages'],
            matches2 = json2['total']; 
            
        // multiple pages maybe 
        for(let i = 1; i <= total_pages2; i++) {
            // on each page, multiple matches
            for(let j = 0; j < matches2; j++) {
                let matchGoals2 = json2['data'][j]['team2goals'];
                totalGoals2 += Number(matchGoals2);
            }
        }
        
        console.log(totalGoals2);
    });

    return totalGoals2 + totalGoals; 
    // unhandled promise rejection error????
    // so close!! 

}




// NOPE
// https://www.hackerrank.com/test/md1hiktjtk/questions/32gbiihfdea


var request = require('request');

async function getTotalGoals(team, year) {

    let urlHome = 'http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team1='+team+'&page=1'; 

    let urlAway = 'http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team2='+team+'&page=1'; 

    var totalGoals = 0;

    // Did our team win for home games
    request(urlHome, function(error, res, body) {
        var json = JSON.parse(body);
          
        let total_pages = json['total_pages'],
            matches = json['total']; 
              
              
        // multiple pages maybe 
        for(let i = 1; i <= total_pages; i++) {
                        
            // on each page, multiple matches
            for(let j = 0; j < matches; j++) {
                let matchGoals = json['data'][j]['team1goals'];
                totalGoals += Number(matchGoals);
            }
        }
    })
    
    // Did our team win for away games
    var totalGoals2 = 0;
    
    request(urlAway, function(error, res, body) {
      var json2 = JSON.parse(body);
        
      let total_pages2 = json2['total_pages'],
          matches2 = json2['total']; 
            
      // multiple pages maybe 
      for(let i = 1; i <= total_pages2; i++) {
          // on each page, multiple matches
          for(let j = 0; j < matches2; j++) {
              let matchGoals2 = json2['data'][j]['team2goals'];
              totalGoals2 += Number(matchGoals2);
          }
      }
    })

    return totalGoals2 + totalGoals; 
}

    
console.log(getTotalGoals("Barcelona", 2011))



// Fuc promises :(
var request = require('request');

async function getTotalGoals(team, year) {

    let requestHome = request.get('http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team1='+team+'&page=1', (res) => { }); 

    let requestAway = request.get('http://jsonmock.hackerrank.com/api/football_matches?year='+year+'&team2='+team+'&page=1', (res) => { }); 


    var totalGoals = 0;
    var totalGoals2 = 0;

    var json = JSON.parse(requestHome);
 
    let total_pages = json['total_pages'],
        matches = json['total']; 
                        
    // multiple pages maybe 
    for(let i = 1; i <= total_pages; i++) {
        // on each page, multiple matches
        for(let j = 0; j < matches; j++) {
            let matchGoals = json['data'][j]['team1goals'];
            totalGoals += Number(matchGoals);
        }
    }

    return totalGoals2 + totalGoals; 
}

    
console.log(getTotalGoals("Barcelona", 2011))