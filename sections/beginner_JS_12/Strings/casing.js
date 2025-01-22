var name = prompt("What is your name?");

var nameLength = name.length;

var firstLetter = name.slice(0, 1);

var otherLetters = name.slice(1, name.length);

alert(firstLetter.toUpperCase() + otherLetters.toLowerCase());