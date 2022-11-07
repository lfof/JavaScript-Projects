function Call_Loop() {      //Name of function
    var Digit = "";         //Variable for loop
    var X =1;               //Starting point for loop
    while (X<11) {          //defining while loop, value and operation
        Digit += "<br>" +X;
        X++
    }
    document.getElementById("Loop").innerHTML = Digit   //values of variable into HTML
}

function String_length() {      //Name of string
let text = "I've got two straws in here, in case one breaks down."; //value of text
let length = text.length;

document.getElementById("Length").innerHTML = length; //defining value into HTML
}

var Lambos = ["Gallardo", "Huracan", "Murcielago", "Aventador", "Sesto Elemento", "Countach"];  //variable and values
var Content = "";       //variable for loop
var X;                  //starting point for loop
function for_Loop() {   //name of loop function
    for (X = 0; X < Lambos.length; X++) {
        Content += Lambos[X] + "<br>";
    }
    document.getElementById("List_of_Lambos").innerHTML = Content;
}

function array_Function(){          //name of function
    var Work_Duties = [];           //naming variable
    Work_Duties[0] = "reply emails";            //elements, indexes and values
    Work_Duties[1] = "property inspections";
    Work_Duties[2] = "submit work orders";
    Work_Duties[3] = "review payables";
    document.getElementById("Array").innerHTML = "Today I will start with " + Work_Duties[1] + "."  //value or array into HTML
}

function constant_function(){
    const Exotic_Car = {brand:"Noble", model:"M600", color:"Light Blue"};
    Exotic_Car.color = "Orange";
    Exotic_Car.price = "$333,000";
    document.getElementById("Constant").innerHTML = "The cost of the " + Exotic_Car.brand + Exotic_Car.model + " was " + Exotic_Car.price;
}

let car = {
    make: "Pagani ",
    model: "Huayra ",
    year: "2020 ",
    color: "white ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        }

}
document.getElementById("Car_object").innerHTML = car.description();




