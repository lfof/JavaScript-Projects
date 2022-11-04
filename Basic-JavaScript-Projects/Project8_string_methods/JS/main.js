function connected_Strings () {             //name of concat function
    var part_1 = "I am";                    //variables and values for function
    var part_2 = " connecting mutiple";
    var part_3 = " strings in";
    var part_4 = " this sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat_string").innerHTML = whole_sentence;    //value variable into HTML with
}                                                                           //concat method

function slice_Method() {                   //name of slice function
    var Sentence = "When in doubt, always follow your nose.";   //variable and value for function
    var Section = Sentence.slice(14, 21);                       //variable specifying function what to slice
    document.getElementById("Slice").innerHTML = Section;       //value of variable into HTML with
}                                                               //slice method


function string_Method() {                  //name of string fucntion
    var X =182;                             //applying value of 182 for X variable
    document.getElementById("Numbers_to_string").innerHTML = X.toString();  //value of variable into HTML with
}                                                                           //string method


function precision_Method() {               //name of precision funciton
    var X = 3.141592653589793238;           //applying value of pi for X variable
    document.getElementById("Precision").innerHTML = X.toPrecision(4);      //value of pi into HTML with
}                                                                           //precision method


function toFixed_Method() {                 //naem of fixed function
    var X = 9.3333                          //applying value of 9.333 for X variable
    document.getElementById("Fixed").innerHTML = X.toFixed(2)               //value of variable into HTML with
}                                                                           //toFixed method