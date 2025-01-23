var guestList = ["Rajiv", "Siddhartha", "Venkata", "Seshumani", "Sanjana", "Sumyu", "Veda"];

var guestName = prompt("What's your name?");

if (guestList.includes(guestName))
{
    alert("Welcome, " + guestName);
}

else
{
    alert("Sorry " + guestName + ", you're not on the list. Maybe next time");
}