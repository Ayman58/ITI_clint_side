/*task 3 Write a function that takea sentence and a letter
to search for it in the given sentence and return its
locations in that sentence.*/
var arr = [];
function search (str, letter)
{
    
    for( var i=0; i < str.length; i++)
    {
        if (str[i]==letter)
        {
            arr.push(i);
        }
    }
}
console.log(arr);
search("this is javascript" ,'i');