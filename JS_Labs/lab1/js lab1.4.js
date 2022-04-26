// 4-Write a function that take a number and follow the below rule
// to convert it into dollars, quarters, dime,nickels and cents.


function greedy( num)
{
    var cent=num*100;
    var dollar =0;
    var quart =0;
    var dime =0;
    var nikel =0;
    
    while(cent>=100)
    {
        cent-=100;
        dollar++;

    }
    while (cent<100 && cent>=25)
    {
        cent-=25;
        quart++;
    }
    while (cent<25 && cent >=10)
    {
        cent-=10;
        dime++;
    }
    while (cent<10 && cent >=5)
    {
        cent-=5;
        nikel++;
    }
     var result = "you have" + dollar + " dollar, " + quart + " quarter, " + dime + " dime ," + nikel + " nikel and "
      + cent + " cent";
    // console.log("you have",dollar,"dollar,", quart ,"quarter,",dime,"dime,", nikel,"nikel and",cent,"cent");
    return  result;
    // return  0;
}

var result = greedy(15.92);
console.log(result);