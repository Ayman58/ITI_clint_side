/* task 1 Write a function that take a number and check
if the given number is divided by 3 only, 5 only or both
and print the suitable sentence*/
function number  (num)
{
    if(num%3==0 && num%5!=0)
    {
        console.log("fizz")
    }
    else if( num%5==0 && num%3!=0)
    {
        console.log("buzz")
    }
    else if(num%3==0 && num%5==0)
    {
        console.log("fizz buzz")
    }
    else
    {
        console.log("none")
    }
}
 number (15)
