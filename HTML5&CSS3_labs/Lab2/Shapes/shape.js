




var btn_line=document.getElementById("Line")

var btn_circle=document.getElementById("Circle")

var btn_rectangle=document.getElementById("Rectangle")




function draw_line()
{
    var line=document.getElementById("line_");

    line.style.display="inline-block";
}

function draw_rectangle()
{
    var rect=document.getElementById("rect_");

    rect.style.display="inline-block";
}


function draw_circle()
{
    var circ=document.getElementById("circle_");

    circ.style.display="inline-block";
}










btn_line.addEventListener("click",draw_line);


btn_rectangle.addEventListener("click",draw_rectangle);


btn_circle.addEventListener("click",draw_circle);