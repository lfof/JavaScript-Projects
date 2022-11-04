function connected_Strings () {
    var part_1 = "I am";
    var part_2 = " connecting mutiple";
    var part_3 = " strings in";
    var part_4 = " this sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concat_string").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "When in doubt, always follow your nose.";
    var Section = Sentence.slice(14, 21);
    document.getElementById("Slice").innerHTML = Section;
}


let text = "I'm falling asleep"
let result = text.toUpperCase();
document.getElementById("upper case");

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}


function precision_Method() {
    var X = 3.141592653589793238;
    document.getElementById("Precision").innerHTML = X.toPrecision(4);
}


function toFixed_Method() {
    var X = 9.3333
    document.getElementById("Fixed").innerHTML = X.toFixed(2)
}