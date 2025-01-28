function houseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
}

var auntie = new houseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"])