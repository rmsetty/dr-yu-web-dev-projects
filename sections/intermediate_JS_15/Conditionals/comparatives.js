var name = prompt("What is your name?");
var crushName = prompt("What is your crush's name?"); 

var loveScore = (Math.floor((Math.random() * 100))) + 1;

if (loveScore === 100) {
    alert("Your love score is 100%. You love each other like Kanye loves Kanye!");
} else if (loveScore >= 90) {
    alert("Your love score is " + loveScore + "%. You're basically soulmates!");
} else if (loveScore >= 70) {
    alert("Your love score is " + loveScore + "%. You love each other like celebrities!");
} else if (loveScore >= 50) {
    alert("Your love score is " + loveScore + "%. It's a solid match!");
} else if (loveScore >= 30) {
    alert("Your love score is " + loveScore + "%. Not bad, but maybe try harder!");
} else {
    alert("Your love score is " + loveScore + "%. Better luck next time!");
}