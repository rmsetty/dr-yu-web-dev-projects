// //You need to print numbers from 1 to 100.
// But if a number is divisible by 3, print "Fizz" instead of the number.
// If a number is divisible by 5, print "Buzz" instead of the number.
// If a number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

var output = [];
var count = 1;
fizBuzz();

function fizBuzz()
{
    while (count <= 100)
        {
            if ((count % 3 == 0) && (count % 5 == 0))
                {
            output.push("FizzBuzz");
        }
        
        else if(count % 3 == 0)
            {
                output.push("Fizz");
            }
            
            else if(count % 5 == 0)
                {
                    output.push("Buzz");
        }
        
        else
        {
            output.push(count);
        }
        count++;
    }
}