function My_First_Function () {                             //name of first function
    var str = "This is the button text!";                   //defining variable and value of the first string
    document.getElementById("Button_Text").innerHTML = str; //value of variable into HTML elementByID
                                                            //with "Button_Text" id
}

function myFunction() {                                     //name of second function
    var sentence = "I am learning";                         //definning variable of string
    sentence += " a lot from this course!";                 //concatenanting string using += operator
    document.getElementById("Concatenate").innerHTML = sentence;    //value of variable into HTML elementbyID
}                                                                   //with "Concatenate" id