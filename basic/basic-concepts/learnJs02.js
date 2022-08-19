"use strict";

document.write("Starting for loop...<br>");

for(var count = 0; count < 10; count++)
{
	document.write(count+"<br>");
}

document.write("Loop completed.<br>")

for(var aProperty in navigator)
{
	document.write(aProperty+"<br>");
}

Outerloop:
for(var i = 0; i < 2; i++)
{
	document.write("Outerloop :"+i+"<br>");
	Innerloop:
	for(var j = 0; j < 2; j++)
	{
		if(j==1)continue Outerloop;
		document.write("Innerloop :"+j+"<br>");
	}
}

function add(a, b)
{
	var c = a + b;
	return c;
}

function addNumbers(a, b)
{
	document.write(add(a, b)+"<br>");
}

function mouseover()
{
	document.write("Mouse Over.");
}

function mouseout()
{
	document.write("Mouse Out.");
}

function redirect()
{
	window.location = "http://www.google.com";
}

function showTime()
{
	document.getElementById("time").innerHTML= Date();
}

let age = prompt("enter Age", 0);
function checkAge(){
	return (age>18) ? "true":confirm("Are u allowed?")
};
checkAge(age);