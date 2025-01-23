function fibonacciGenerator (n)
{   
    var output = [];
    
    if (n == 0 || n == 1)
        {
            output = [0];
        }
            
    else
    {
        output = [0, 1];
        for (var i = 2; i < n; i++)
        {
            output.push(output[i-2] + output[i-1]);
        }
    }

return output;


}