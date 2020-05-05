function Vehicle (Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2015, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
var Steven = new Vehicle("Ford", "Focus", 2007, "Silver");

function car_function() {
    document.getElementById("car").innerHTML=
    "Steven drives a " + Steven.Vehicle_Color + "-colored " + Steven.Vehicle_Model + 
    " manufactured in " + Steven.Vehicle_Year;
}
function vote_Function() {
    var Age, Can_Vote;
    Age=document.getElementById("Age").value;
    Can_Vote = (Age < 18)? "You are too young":"You are mature enough";
    document.getElementById("Vote").innerHTML = Can_Vote + " to vote during this election.";
}


function count_Function() {
    document.getElementById("Counting").innerHTML =Count();
    function Count() {
        var Start = 0;
        function Plus_One() {Start++;}
        Plus_One(); 
        return Start;
    }
}