function ShowAnswer() {
var a1 = document.getElementById("a1").value;
var b1 = document.getElementById("b1").value;
var c1 = document.getElementById("c1").value;
var a2 = document.getElementById("a2").value;
var b2 = document.getElementById("b2").value;
var c2 = document.getElementById("c2").value;
y = ((c2 * a1)-(a2 * c1))/((a1 * b2)-(a2 * b1));
 x = (1/a1)*(c1 - (b1*y));
//document.write(a1 + b1 + c1 + a2 + b2 + c2 )
//document.write(y)
document.getElementById("answer").innerHTML = "y = " + y + " " + " " + " x = " + x; 
}
/*var a1;
var b1;
var c1;
var a2;
var b2;
var c2;
var x;
var y;
a1 = prompt(" "+"    a1=");
b1 = prompt("b1=");
c1 = prompt("c1=");
a2 = prompt("a2=");
b2 = prompt("b2=");
c2 = prompt("c2=");
 
 y = ((c2 * a1)-(a2 * c1))/((a1 * b2)-(a2 * b1));
 x = (1/a1)*(c1 - (b1*y));
 
prompt("x ="+" "+x);
prompt("y ="+" "+y);
alert( " x= "+x +" and "+" y= "+ y)*/