
var obj={color:"red", background:"blue"};
function sty(tag,obj)
{
    var div1=document.getElementById(tag);
    div1.style.color=obj.color
    div1.style.background=obj.background;
}
sty("myid",obj)