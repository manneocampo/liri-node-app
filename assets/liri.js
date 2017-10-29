var keys = require("./keys.js");
var Twitter = require("twitter");
var args = process.argv;
var Spotify = require("node-spotify-api");
var request = require("request");

switch (args[2]) {
	case "my-tweets":
		getTweets();
		break;
	case "spotify-this-song":
		spotify();
		break;
	case "movie-this":
		omdb();
		break;
	case "do-what-it-says":
		bossy();
		break; 
}

function getTweets(){
	console.log("twitter request", keys);
	var client = new Twitter(keys.twitterKeys);
	 
	var params = {screen_name: 'coding_cactus1'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    tweets.forEach(function(tweet, i) {
	    	console.log('--------------------------------------------\n');
	    	console.log('Tweet #',i+1 + ': ' + tweet.text + '\n');
	    });
	  }
	});
}

function spotify() {
	var search = process.argv[3] || "The Sign by Ace of Base";
	console.log("spotify request");
	var spotify = new Spotify(keys.spotifyKeys);
	 
	spotify.search({ type: 'track', query: search }, function(err, data) {
	  if (err) {
	    return console.log('Error occurred: ' + err);
	  }
	  for (var i=0; i<data.tracks.items.length; i++) {
	  	console.log("Album:       ", data.tracks.items[i].album.name); 
		console.log("Artist:      ", data.tracks.items[i].artists[0].name);
		console.log("Preview url: ", data.tracks.items[i].preview_url);
		console.log("Song name:   ", data.tracks.items[i].name + "\n");
	  }
	});
}

function omdb(){
	var search = process.argv[3];
	var url = "http://www.omdbapi.com/?apikey=" + keys.omdbKey + "&type=movie&t=" + search 
	request(url, function (error, response, body) {
	  if (error){
	  	console.log("error");
	  }   

 	var body = JSON.parse(body);
	  console.log('body:', body); // Print the HTML for the Google homepage.
	  console.log("Title:", body.Title);
	  console.log("Year:", body.Year);
	  console.log("IMDB Rating:", body.imdbRating);
	  console.log("Rotten Tomatoes Rating:", body.Ratings[1].Value);
	  console.log("Country:", body.Country);
	  console.log("Language:", body.Language);
	  console.log("Plot:", body.Plot);
	  console.log("Actors:", body.Actors);

	});
	console.log("movie request");

}

function bossy(){
	console.log("bossy request");
}


