let playbtn= document.getElementById("id");
let repeatbtn= document.getElementById("repeat");
let shufflebtn= document.getElementById("shuffle");
let adio=document.getElementById("aud")

let playfun=function()
{
    adio.play();
}
playbtn.addEventListener("click",playfun);


let arr = ["game-show-suspense-waiting-667.wav",
            "arcade-retro-game-over-213.wav",
            "fast-small-sweep-transition-166.wav"];

let rand = function (arr)
{
    var ran=[Math.floor(Math.random()* arr.length)];

    return arr[ran];
}

let repeatfun=function()
{
    adio.loop=true;
    adio.play();
    
}
repeatbtn.addEventListener("click",repeatfun);

let shufflefun=function()
{
    adio.src=rand(arr); 
    adio.play();
}
shufflebtn.addEventListener("click",shufflefun);