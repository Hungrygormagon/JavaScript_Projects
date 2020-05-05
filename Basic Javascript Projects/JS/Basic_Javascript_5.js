function infin() {
    var x = 10
        y=3;
document.getElementById("greater").innerHTML = x>y;
document.getElementById("less").innerHTML = x<y;
document.getElementById("equals").innerHTML = x==y;
document.getElementById("match").innerHTML = x===y;
document.getElementById("and").innerHTML = x>y && x-7==y;
document.getElementById("not").innerHTML = !(x=y);
document.getElementById("or").innerHTML = x>y || x==y;
//document.getElementById("numbers").innerHTML = x<y;
console.log(x*5);
}
document.write(typeof (3));
alert("x" + 5);