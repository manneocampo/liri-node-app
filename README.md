# liri-node-app

This project incorporates application building with Node and the use of external NPM packages. 

Overview: 
LIRI is a Language Interpretation and Recognition Interface. 
LIRI is a command line node app that takes in parameters and gives you back data. 

LIRI displays the latest tweets from a Twitter account, search for songs from the Spotify API, search for movies from the OMDB API, and the last command uses the fs node package to take the text inside of a random.txt file and use it to call one of the LIRI commands.  

The my-tweets command will show your last 20 tweets and when they were created at in your terminal/bash window. 
The spotify-this-song '<song name here>' command will show information about the song in your terminal/bash window; the artist(s), the song's name, a preview link of the song from spotify, and the album that the song is from. 
The movie-this '<movie name here>' command will show information in your terminal/bash window about the movie; title of the  movie, year the movie came out, IMDB rating of the movie, Rotten Tomatoes Rating of the movie, Country where the movie was produced, language of the movie, plot of the movie, and actors in the movie.
The do-what-it-says command uses the fs node package to take the text inside of a random.txt file and use it to call one of the LIRI commands.

This project uses the command line in git bash, Twitter, Spotify, OMDB APIs, JavaScript, request and fs node packages. 


