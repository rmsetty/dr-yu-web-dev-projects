function houseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function (){
      alert("I can clean");  
    };
}

var auntie = new houseKeeper(12, "Jane", ["bathroom", "lobby", "bedroom"]);
auntie.clean();