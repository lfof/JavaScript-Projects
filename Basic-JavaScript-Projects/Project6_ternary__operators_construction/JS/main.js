function Vote_Function() {                      //name of ternary function
    var Age, Can_vote;                          //defining variable Age
    Age = document.getElementById("Age").value; //age input into HTML
    Can_vote = (Age<18) ? "You are not old enough":"You are old enough";        //response of input if younger or older than 18
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";         //concatenating "to vote" to input response
}


function Vehicle(Make, Model, Year, Color) {        //name of constructor function where "vehicle" is the constructor
    this.Vehicle_Make = Make;                       //values of Vehicle function
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Erik = new Vehicle("Nissan", "Skyline R34", 2002, "Midnight Purple"); //defining variables for new objects
var Steve = new Vehicle("Noble", "M600", 2020, "Gun Metal Gray");
var Matt = new Vehicle("Honda", "Civic Type R", 1999, "White");
function myFunction() {                                                   //calling function
    document.getElementById("New_and_This").innerHTML =                   //output for function
    "Steve drives a " + Steve.Vehicle_Color + "-colored " + Steve.Vehicle_Model +
    " manufactured in " + Steve.Vehicle_Year;
}

function count_Function() {                 //name of function
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {                      //name of nested function
        var Starting_point = 2;             //variable starting point for counting function
        function plus_two() {Starting_point += 2;}  //operation for nested function where we are adding 2 to starting point
        plus_two();
        return Starting_point;

    }
}