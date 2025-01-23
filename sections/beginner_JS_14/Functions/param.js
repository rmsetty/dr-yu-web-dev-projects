function getMilk(money) {
    var bottleCost = 1.5;
    
    var numberOfBottles = Math.floor(money / bottleCost);
    
    console.log("Buy " + numberOfBottles + " bottles of milk.");
}

getMilk(5);
