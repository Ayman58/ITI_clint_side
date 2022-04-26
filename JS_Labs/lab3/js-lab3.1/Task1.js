var x = 1;
var change = function () {
    Switch(x)
    x++
    if (x > 3) {
        x = 1
    }
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
function Switch(x) {
    switch (x) {
        case 1:
            document.getElementById("img1").src = "red.png";
            sleep(50);
            document.getElementById("img2").src = "gray.png";
            sleep(50);
            document.getElementById("img3").src = "gray.png";
            sleep(50);
            document.getElementById('ready').innerHTML = '<h2 style="color: red; margin-left:10%">Ready</h2>'
            
            document.getElementById('steady').innerHTML = '<h2 style="color: orange; margin-left: 40%;"></h2>'
            
            document.getElementById('go').innerHTML = '<h2 style="color: green; margin-left: 70%;"></h2>'
            break;
        case 2:
            document.getElementById("img2").src = "orange.png";
            sleep(50);
            document.getElementById("img1").src = "gray.png";
            sleep(50);
            document.getElementById("img3").src = "gray.png";
            sleep(50);
            document.getElementById('steady').innerHTML = '<h2 style="color: orange; margin-left: 40%;">Steady</h2>'
            document.getElementById('ready').innerHTML = '<h2 style="color: red; margin-left:10%"></h2>'
            document.getElementById('go').innerHTML = '<h2 style="color: green; margin-left: 70%;"></h2>'
            break;
        case 3:
            document.getElementById("img3").src = "green.png";
            sleep(50);
            document.getElementById("img1").src = "gray.png";
            sleep(50);
            document.getElementById("img2").src = "gray.png";
            sleep(50);
            document.getElementById('go').innerHTML = '<h2 style="color: green; margin-left: 70%;">Go</h2>'
            document.getElementById('ready').innerHTML = '<h2 style="color: red; margin-left:10%"></h2>'
            document.getElementById('steady').innerHTML = '<h2 style="color: orange; margin-left: 40%;"></h2>'
            break;
        default:
            document.getElementById("img1").src = "gray.png";
            sleep(50);
            document.getElementById("img2").src = "gray.png";
            sleep(50);
            document.getElementById("img3").src = "gray.png";
            sleep(50);
    }
}
var interval;
function run() {
    var count = document.getElementById("myNumber").value;
    count = parseInt(count);
    interval = setInterval(change, count)


} 
function stop() {
    clearInterval(interval)
}