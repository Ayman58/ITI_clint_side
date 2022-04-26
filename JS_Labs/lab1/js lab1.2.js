/*task 2 Write a function that take an array of persons’
 names and return two random names of them*/

 function person(arr)
 {
    var ran=[Math.floor(Math.random() * arr.length)];
    console.log(arr[ran]);

    var ran2 =[Math.floor(Math.random() * arr.length)];
    console.log(arr[ran2]);
    
    while (ran===ran2)
    {
    ran2 =[Math.floor(Math.random() * arr.length)];
    console.log(arr[ran2]);
    }
 }

 var arr=["samir", "islam", "sandra", "Fatma","ali"];
 person(arr)