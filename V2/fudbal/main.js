
var player = document.querySelector(".player");
var container = document.querySelector(".container");
var stopBtn = document.querySelector(".stop-btn");
container.addEventListener("click", move);
  
function move(e) {
    var xPosition = (e.clientX - 50) + "px";
    var yPosition = (e.clientY - 50) + "px";
    player.style.left = xPosition;
    player.style.top = yPosition;
}

function stopMoving() {
    container.removeEventListener("click", move);
}


