function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors){
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as witten on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
function Hello(){
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("Name");
var ctx = c.getContext("2d");

//create the gradient
var grd = ctx.createLinearGradient(00,0,200,00);
grd.addColorStop(0, "red");
grd.addColorStop(1,"white");

//fill
ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
