function whosPaying(names)
{
    var personIndex = Math.floor(Math.random() * names.length);

    var statement = names[personIndex] + " is going to buy lunch today!"
    return statement;
}