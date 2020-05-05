var Str= "The quick brown fox quickly jumped over the lazy dog on the log."

function basic_8(){
    //concatenate
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a ";
    var part_4 = "complete sentence.";
    var whole= part_1.concat(part_2, part_3, part_4);
    document.getElementById("conca").innerHTML=whole
    //slice method
    var Section = Str.slice(20,33);
    document.getElementById("Slice").innerHTML=Section
    //toUppercase
    var Upper = Str.toUpperCase();
    document.getElementById("Upper").innerHTML=Upper
    //Search
    var search = Str.search("quickly");
    document.getElementById("Search").innerHTML=search
    //numbers to string
    var X=182
    document.getElementById("Numbers").innerHTML=X.toString();
    //To Precision
    var X=182.02568987741552145688897995432135648444
    document.getElementById("Precise").innerHTML=X.toPrecision(10);
    //to Fixed
    var X=182.02568987741552145688897995432135648444
    document.getElementById("Fixed").innerHTML=X.toFixed(100);
    //valueOf
    var X=182.02568987741552145688897995432135648444
    document.getElementById("Value").innerHTML=X.valueOf();
}