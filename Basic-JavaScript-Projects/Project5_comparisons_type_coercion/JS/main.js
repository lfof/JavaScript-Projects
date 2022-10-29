document.write("T" + 100);  //combining a string and a number

function second_Function(){
    document.getElementById("Test").innerHTML = 0/0, isNaN('True'); 
}

function third_function(){
    document.getElementById("Infinity").innerHTML = (2e310);
}

document.write(10>2);
document.write(10<2);

console.log(6+6); //using console log to display a math operation
console.log(3>4); //using console log to display a false statement

document.write(1+1 == 2) //using == to determine true and false using boolean logic
document.write(4 == 2+5)

X = 4                       //using ===  to return true by ensuring to match the data type and value.
Y = (2+2)
document.write(X === Y);

X = 4                        //using === to return false by writing a different data type but the same value for both.
Y = "2+2"
document.write(X === Y)

X = 4                       //using === to return false by writing a different data type but the same value for both.
Y = "Four"
document.write(X === Y)

X = "car"                   //using === to return false by writing Return false by writing the same data type but a different value for both.
Y = "vehicle"
document.write(X === Y)

document.write(10<20 && 2+2<5+5); //utilized the AND operator to display true and false.

document.write(10>20 || 8<10);    //Utilized the OR operator to display true and false.

function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); //utilized the NOT operator to display true and false.

}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10)
}