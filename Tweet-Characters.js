var userTweet = prompt("Enter your tweet:").slice(0, 280);

console.log(userTweet);

var writtenCharacters = userTweet.length;

var remainingCharacters = 280 - writtenCharacters

// console.log ("You have written " + writtenCharacters + " characters and have " + remainingCharacters + " remaining.")
alert("You have written " + writtenCharacters + " characters and have " + remainingCharacters + " remaining.")


var name = prompt("Please enter your name: ");
var firstLetter = name.slice(0, 1).toUpperCase();
var restOfName = name.slice(1, name.length);
restOfName = restOfName.toLowerCase();
alert("Hello " + firstLetter + restOfName);
