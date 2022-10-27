function addition_Function() {                                          //name of function
    var addition = 2+10;                                                //defining addition variable 
    document.getElementById("Math").innerHTML = "2 + 10 =" + addition;  //value of variable into HTML
}

function substraction_Function() {                                          //name of function
    var substraction = 12-2;                                                //defining substraction variable
    document.getElementById("Math1").innerHTML = "12 - 2 =" + substraction; //value of variable into HTML
}

function multiplication() {                                                 //name of function
    var simple_Math = 6 * 2;                                                //defining multiplication variable
    document.getElementById("Math2").innerHTML = "6 x 2 =" + simple_Math    //value of variable into HTML
}

function division() {                                                       //name of function
    var simple_Math = 12 / 6;                                               //defining division variable
    document.getElementById("Math3").innerHTML = "12 / 6 =" + simple_Math   //value of variable into HTML
}

function more_Math() {                                                      //name of function
    var simple_Math = (10+2) * 2 / 6 -1;                                    //defining math operation variable
    document.getElementById("Math4").innerHTML = "10 plus 2, multiplied by 2, divided by six and then substracted by 1 =" + simple_Math;    //value of variable into HTML
}

function modulus_Operator() {                                               //name of function
    var simple_Math = 7 % 3;                                                //defining modulus variable
    document.getElementById("Math5").innerHTML = "When you devide 7 by 3 you have a remainder of: " + simple_Math //value of modules into HTML
}

function negation_Operator() {                          //name of negation function
    var x=10;                                           //defining negation x variable
    document.getElementById("Math6").innerHTML = -x;    //defining value of variable x into HTML
}

var X=5;            //defining variable for increment operator
X++;                //increment operator
document.write (X); //defining value of increment

var X=5.25;         //defining variable for decrement operator
X--;                //decrement operator
document.write (X); //defining value of decrement

window.alert(Math.random() * 50); //random number alert between 0 and 50
