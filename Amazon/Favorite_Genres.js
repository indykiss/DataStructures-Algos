/*
Favorite Genres

Given a map Map<String, List<String>> userSongs with user names as keys and a list 
of all the songs that the user has listened to as values.

Also given a map Map<String, List<String>> songGenres, with song genre as keys and a list 
of all the songs within that genre as values. The song can only belong to only one genre.

The task is to return a map Map<String, List<String>>, where the key is a user name and the 
value is a list of the user's favorite genre(s). Favorite genre is the most listened to genre. 
A user can have more than one favorite genre if he/she has listened to the same number of songs per each of the genres.

Example:
Input:
userSongs = {  
   "David": ["song1", "song2", "song3", "song4", "song8"],
   "Emma":  ["song5", "song6", "song7"]
},
songGenres = {  
   "Rock":    ["song1", "song3"],
   "Dubstep": ["song7"],
   "Techno":  ["song2", "song4"],
   "Pop":     ["song5", "song6"],
   "Jazz":    ["song8", "song9"]
}

Output: {  
   "David": ["Rock", "Techno"],
   "Emma":  ["Pop"]
}
Explanation:
David has 2 Rock, 2 Techno and 1 Jazz song. So he has 2 favorite genres.
Emma has 2 Pop and 1 Dubstep song. Pop is Emma's favorite genre.

A Strategy: Classify each person's favorite songs' genres. Count and return. 
- Loop through the list of users  
  - For each user, look at each song 
    - Take each song and check what kind of genre it is. Push into arr/map
    - How to do this... 
  - Track each user's personal list of genres. Push it into a map
*/


function getFavoriteGenre(users, genres) {
  const answer = {};
  const songsToGenres = {};
  
  for (const genre in genres) {
    const songs = genres[genre];

    for (const song of songs) {
      songsToGenres[song] = genre;
    }
  }

  for (const user in users) {
    const songs = users[user];
    const counts = {};
    let max = 0;
    answer[user] = [];

    for (const song of songs) {
      const genre = songsToGenres[song];
      if(genre === null) {break};
      if(counts[genre] == null) {
       counts[genre] = 0; 
      }
      counts[genre]++;
      max = Math.max(max, counts[genre])
    }

    for (const genre in counts) {
      if(counts[genre] === max) {
        answer[user].push(genre);
      }
    }
  }
  return answer;
}




console.log(getFavoriteGenre({
  David: ['song1', 'song2', 'song3', 'song4', 'song8'],
  Emma: ['song5', 'song6', 'song7']
}, {
  Rock: ['song1', 'song3'],
  Dubstep: ['song7'],
  Techno: ['song2', 'song4'],
  Pop: ['song5', 'song6'],
  Jazz: ['song8', 'song9']
}));
