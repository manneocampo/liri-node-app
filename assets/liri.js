var keys = require("./keys.js");
var Twitter = require("twitter");
var args = process.argv;

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
	var client = new Twitter(keys);
	 
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
	console.log("spotify request");
}

function ombd(){
	console.log("movie request");
}

function bossy(){
	console.log("bossy request");
}


