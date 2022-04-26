



var btn_line=document.getElementById("Line");

var btn_circle=document.getElementById("Circle");

var btn_rectangle=document.getElementById("Rectangle");

var btn_free=document.getElementById("Free_draw");

var btn_erase=document.getElementById("Eraser");

var color=document.getElementById("color_input");

var canvas = document.getElementById("my-canvas"); 

var art_board = canvas.getContext("2d");

var drawflag=false;

var drawtype=1;

var f_point_x;

var f_point_y;

function draw_line()
{
    drawtype=1;
}

function draw_free()
{
    drawtype=2;
}


function draw_rectangle()
{
    drawtype=3;
}

function draw_circle()
{
    drawtype=4;
}

function draw_erase()
{
    drawtype=5;
}


canvas.addEventListener('mousedown', function (e) {
     
    

    switch(drawtype)
    {
        case 1:
            art_board.strokeStyle=color.value;
            art_board.moveTo(e.offsetX, e.offsetY);
            
        break;
        
        case 2:
            art_board.strokeStyle=color.value;
            art_board.moveTo(e.offsetX, e.offsetY);
            drawflag = true;
        break;

        case 3:
            art_board.fillStyle=color.value;
            f_point_x= e.offsetX;
            f_point_y= e.offsetY;
        case 4:
            
            f_point_x= e.offsetX;
            f_point_y= e.offsetY;
        break;

        case 5:
            art_board.strokeStyle="white";
            art_board.lineWidth=3;
            art_board.moveTo(e.offsetX, e.offsetY);
            drawflag = true;
            
        break;
    }

    
});
// canvas.addEventListener('mouseup', function (e) {
//     drawflag = false;

// });
// canvas.addEventListener('mousemove', function (e) {
//     if (drawflag) {
//         artArea.lineTo(e.offsetX, e.offsetY);
//         artArea.stroke();
//     }
// });


canvas.addEventListener('mouseup', (e) => {


    switch(drawtype)
    {
        case 1:
            art_board.lineTo(e.offsetX, e.offsetY);
            art_board.stroke();
            art_board.beginPath();         
        break;
        
        case 2:
            drawflag = false;
        break;

        case 3:
            art_board.fillRect(f_point_x,f_point_y,e.offsetX-f_point_x,e.offsetY-f_point_y);
            art_board.stroke(); 
            art_board.beginPath(); 
        break;

        case 4:
            art_board.beginPath();
            art_board.arc(f_point_x,f_point_y,Math.sqrt((Math.pow(e.offsetX-f_point_x,2)) + (Math.pow(e.offsetY-f_point_y,2))),0,2*Math.PI);
            
            art_board.fill();
            art_board.stroke();
            art_board.beginPath(); 
        break;

        case 5:
            drawflag = false;
        break;
    }

});

canvas.addEventListener('mousemove', function (e) {
        if (drawflag) {
            art_board.lineTo(e.offsetX, e.offsetY);
            art_board.stroke();
            art_board.beginPath();
            art_board.moveTo(e.offsetX, e.offsetY); 
        }
    });






btn_line.addEventListener("click",draw_line);

btn_free.addEventListener("click",draw_free);

btn_rectangle.addEventListener("click",draw_rectangle);


btn_circle.addEventListener("click",draw_circle);


btn_erase.addEventListener("click",draw_erase);


