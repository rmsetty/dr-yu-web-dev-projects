var year = parseInt(prompt("What year is it?"));

if((year % 4) == 0)
{
    if(year % 100 == 0)
    {
        if((year % 400 == 0))
            {
                console.log("Is a leap year");
            }
            else{
                console.log("Not a leap year");
            }
    }

    else{
        console.log("Is a leap year");

    }
}

else{
    console.log("Not a leap year");
}