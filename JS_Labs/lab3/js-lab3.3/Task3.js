let img = document.getElementById("img")
let play = document.getElementById("play")
let pause = document.getElementById("pause")

let previous = document.getElementsByClassName("previous")[0]
let next = document.getElementsByClassName("next")[0]
let counter=1;
let interval;

                           //unfade
var playc =function(e){
  console.log("clicked");
  interval=setInterval(startSlidshow, 1000);
}
play.addEventListener("click",playc);

var pausec =function(e){
  console.log("pause clicked");
  clearInterval(interval);
}
pause.addEventListener("click",pausec);

var nextc =function(e){
  console.log("next clicked");
  if (counter==4) {
    counter=1;
  }else {
    counter++;
  }
  unfade(img)
  img.src=counter+'.jpg';
}
next.addEventListener("click",nextc);

var previousc =function(e){
  console.log("next clicked");
  if (counter==1) {
    counter=4;
  }else {
    counter--;
  }
  unfade(img)
  img.src=counter+'.jpg';
}
previous.addEventListener("click",previousc);

function startSlidshow(){
  if (counter==4) {
    counter=1;
  }else {
    counter++;
  }
  unfade(img)
  img.src=counter+'.jpg';

}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        if (op>=0.15) {
          op -= op * 0.1;
          
        }

    }, 10);
    unfade(element)
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}
