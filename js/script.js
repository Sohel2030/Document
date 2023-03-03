function demo(){
    document.getElementById('custom').innerHTML = Date();
}
// bulb 
function bulbon(){
    document.getElementById('bulb').src="img/on.png";
}
function bulboff(){
    document.getElementById('bulb').src="img/off.png";
}
// bulb off 
// font size start 
function txt(){
    document.getElementById('changetxt').style.fontSize="50px";
}
// font size end
// txt none start
 function txtdisplaynone(){
    document.getElementById('txtnone').style.display='none';
 }
// txt none end 
// display block start
 function txtdisplayblock(){
    document.getElementById('txtblock').style.display='block';
 }
// display block end 
// text change start
function txtchange(){
    document.getElementById('txt').innerHTML = "Hello world.";
} 
// text change end 
// demo
function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
} 
// naver
function txtchange(){
    document.write(5 + 6);
}
// statements
    function txtchange(){
let x, y, z;
x = 5;
y = 6; 
z = x + y;

document.getElementById("demo").innerHTML =
"The value of z is " + z + ".";
}
// sytext
function txtchange(){
document.getElementById("demo").innerHTML = 10.50;
}
// comment
function txtchange(){
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("tt").innerHTML =
"The value of z is: " + z;
}
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z
let z = x + y;
// Display z
document.getElementById("dem").innerHTML = "The sum of x + y is: " + z;

if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}