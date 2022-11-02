function Vehicle( Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var John = new Vehicle("Nissan", "Skyline R34", 2002, "Midnight Purple");
var Steve = new Vehicle("Noble", "M600", 2020, "Gun Metal Gray");
var Matt = new Vehicle("Honda", "Civic Type R", 1999, "White");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Steve drives a " + Steve.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}