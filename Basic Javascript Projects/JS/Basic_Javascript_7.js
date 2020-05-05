function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 ==Time >0){
        Reply= "Good Morning!";
    }
    else if (Time >12 == Time < 18){
        Reply="Good Afternoon";
    }
    else {
        Reply="Good Evening.";
    }
        document.getElementById("Greeting").innerHTML=Reply;
    
};

function vote_Function() {
    var Age, Can_Vote;
    Age=document.getElementById("Age").value;
    if (Age>=18){
        Can_Vote="You are mature enough to vote during this election.";
    }
    else if (Age<18) {
        Can_Vote="You are too young to vote during this election.";
    }
    else {
        Can_Vote="Please enter your age.";
    }
    document.getElementById("Vote").innerHTML = Can_Vote;
};

function add(){
    var x=4;
    document.getElementById("Add").innerHTML=x+4;
};

function Sub(){
    console.log(x-906);
}