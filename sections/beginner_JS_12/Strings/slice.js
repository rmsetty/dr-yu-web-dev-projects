var tweet = prompt("How was your day?");
var slicedTweet = tweet.slice(0, 140);

alert("You have written " + tweet.length + " characters, you have " + (140 - tweet.length) + " characters remaining");

alert(slicedTweet);