var icon1 = document.getElementById("icon1");
var icon2 = document.getElementById("icon2");
var top1 = document.getElementById("top1");
var toggle = document.getElementById("toggle");
var reset = document.getElementById("reset");
var left1 = document.getElementById("left1");
var left2 = document.getElementById("left2");
var container = document.getElementById("container");
var x1 = 0;
var x2 = 450;
var y3 = 350;
var dx1 = 3;
var dx2 = -3;
var dy3 = -3;
var moving = true;

function updateLabels() {
    left1.innerHTML = "Icon1 Left = " + x1 + "px";
    left2.innerHTML = "Icon2 Left = " + x2 + "px";
}

function moveImages() {
    x1 += dx1;
    x2 += dx2;
    y3 += dy3;
    if (x1 <= 0 || x1 >= container.clientWidth - icon1.width)
        dx1 *= -1;
    if (x2 <= 0 || x2 >= container.clientWidth - icon2.width)
        dx2 *= -1;
    if (y3 <= 0 || y3 >= container.clientHeight - top1.height)
        dy3 *= -1;
    icon1.style.left = x1 + "px";
    icon2.style.left = x2 + "px";
    top1.style.top = y3 + "px";
    updateLabels();
}

var timer = setInterval(moveImages, 20);

toggle.addEventListener("click", function () {
    if (moving) {
        clearInterval(timer);
        toggle.innerHTML = "Go";
        moving = false;
    }
    else {
        timer = setInterval(moveImages, 20);
        toggle.innerHTML = "Stop";
        moving = true;
    }
});

reset.addEventListener("click", function () {
    x1 = 0;
    x2 = 450;
    y3 = 350;
    dx1 = 3;
    dx2 = -3;
    dy3 = -3;
    icon1.style.left = x1 + "px";
    icon2.style.left = x2 + "px";
    top1.style.top = y3 + "px";
    updateLabels();
    clearInterval(timer);
    timer = setInterval(moveImages, 20);
    moving = true;
    toggle.innerHTML = "Stop";
});
updateLabels();