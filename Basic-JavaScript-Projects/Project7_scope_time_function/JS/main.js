var X = 2;                      //defining a global variable
function Multiply_numbers_1() { //applying multiplying function
    document.write(20 * X + "<br>");    //multiplication operation
}
Multiply_numbers_1(); //multiplication result

function Multiply_numbers_2() { //applying multiplying function
    var X = 3;                  //defining local variable
    document.write(20 * X + "<br>");    //multiplcation operation
}
Multiply_numbers_2(); //multiplication result


function Multiply_numbers_3() { //applying multiplication function
    console.log(Y * 10);        //multiplication operation
}                               //intetionally did not give the variable a value
Multiply_numbers_3();           //to pull error and debug with console.log



function get_Date() {
    if (new Date() .getHours() > 16) {
    document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}


function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 16) {
        Vote = "You are old enough to drive!";
    }
    else {
        Vote = "You are not old enough to drive!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {              //applying time funciton
    var Time = new Date().getHours();   //defining varialbe and new object
    var Reply;                          //defining variable reply if 
    if (Time < 12 == Time > 0) {        //time is between 12 am and 12 pm
        Reply = "It is mornig time!";
    }
    else if (Time >= 12 == Time < 18) { //defining variable reply if 
        Reply = "It is afternoon.";     //time is between 12 pm and 16 pm
    }
    else {                              //defining variable reply when
        Reply = "It is almost time for bed.";   //time is between 16 pm and 12 am
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}