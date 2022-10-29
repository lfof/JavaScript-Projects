function car_Dictionary() {                //defining the name of the function
    var Car = {                            //name of the variable
        Brand:"Subaru",                    //Keys and Values
        Color:"White",
        Model:"WRX",
        Flake_Color:"White",
        Year:2013,
        Sound:"Vroom Vroom"
    };
    delete Car.Flake_Color;                 //delete statement
    document.getElementById("Dictionary").innerHTML = Car.Flake_Color; //value of variable into HTML
}