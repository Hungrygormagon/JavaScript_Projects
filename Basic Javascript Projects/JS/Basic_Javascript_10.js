function count_To_Ten() {
    var Digit = "";
    var X= 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
function strlength() {
    var string=document.getElementById("string").value;
    var X= string.length;
    document.getElementById("return").innerHTML =X;
}

var instruments=["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content= "";
var Y;
function for_loop() {
    for (Y=0; Y< instruments.length; Y++){
        Content += instruments[Y] + "<br>";
    }
    document.getElementById("Lise_Of_Instruments").innerHTML=Content;
}

function cat_pics(){
    var X=Math.floor(Math.random() * 4);
    var Cat_Pictures = [];
    Cat_Pictures[0] = "sleeping";
    Cat_Pictures[1] = "playing";
    Cat_Pictures[2] = "eating";
    Cat_Pictures[3] = "purring";
    document.getElementById("Cat").innerHTML="In this picture, the cat is "+
        Cat_Pictures[X] + ".";
}

function constant_function() {
    const X=32;
    x=24;
    document.getElementById("Constant").innerHTML =X;
}

function Let() {
    var x=32;
    document.getElementById("Let").innerHTML = x;
    {
        let x=920;
        document.getElementById("Letx").innerHTML = x;
    }
    document.getElementById("Let2").innerHTML = x;
}

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "Red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
function Break() {
    var Digit = ""
    var X= Math.floor(Math.random() *101);
    while (X < 100) {
        Digit += "<br>" + X;
        X++;
        if (X===65) {continue;}
    }
    document.getElementById("break").innerHTML = Digit;
}