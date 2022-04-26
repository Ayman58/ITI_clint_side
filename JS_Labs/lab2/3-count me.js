// Write a function that take a tag name and style object and 
//apply this style to the DOM element which match the tag name.

var obj={Class:"",Id:"",Name:""}
function count(tag,obj)
{
    var name1=0;
    var id1=false;
    var class1=0;
    var out="";
    var div1 =document.getElementsByTagName(tag);
    var lenth= div1.length;
    for(var i=0; i<lenth;i++)
    {
        if (div1[i].getAttribute("name")==obj.Name)
        {
           name1++ ;
        }
        if (div1[i].getAttribute("id")==obj.Id)
        {
           id1=true ;
        }
        if (div1[i].getAttribute("class")==obj.Class)
        {
           class1++ ;
        }
    }
    out="all:"+lenth+",Class:"+class1+",id:"+id1+",Name:"+name1;
    console.log(out);
}
count("div",{Class:"myclass",Id:"myid",Name:"myname"});