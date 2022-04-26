// Write a function that follow the below rule. Take the 
//given number and light the corresponding circle.
var div = document.getElementById('myDiv')
var value = prompt()
switch (value)
{
case '1':
document.getElementById("img1").setAttribute("src","green.png");
break;
case '2':
document.getElementById("img2").setAttribute("src","orange.png");
break;
case '3':
document.getElementById("img3").setAttribute("src","red.png");
break;
}