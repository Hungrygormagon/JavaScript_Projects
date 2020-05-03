function addFunction() {
    var X=2, Y=2;
        sum= X + Y
    document.getElementById("Add").innerHTML=sum;
}
function subFunction() {
    var X=100, Y=72;
        diff= X - Y
    document.getElementById("Sub").innerHTML=diff;
}
function multFunction() {
    var X=100, Y=58;
        Prod= X * Y
    document.getElementById("Mult").innerHTML=Prod;
}
function divFunction() {
    var X=6520, Y=72;
        quot= X / Y
    document.getElementById("div").innerHTML=quot;
}
function remainder() {
    var X=6520, Y=72;
        rem= X % Y
    document.getElementById("rema").innerHTML=rem;
}
function random() {
    window.alert(Math.random()*100);
}
function increment() {
    var incr= ++sum;
    document.getElementById("inc").innerHTML=incr;
}
function decrement() {
    var decr= --sum;
    document.getElementById("dec").innerHTML=decr;
}