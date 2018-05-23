
var object = $(".object");

function moveRight(event) {
    if (event.keyCode == 39) {
        object.animate({ left: "+=10px" }, 1);
    }
}
function moveLeft(event) {
    if (event.keyCode == 37) {
        object.animate({ left: "-=10px" }, 1);
    }
}

function moveDown(event) {
    if (event.keyCode == 40) {
        object.animate({ top: "+=10px" }, 1);
    }
}

function moveUp(event) {
    if (event.keyCode == 38) {
        object.animate({ top: "-=10px" }, 1);
    }
}

function decrease(event) {
    if (event.keyCode == 13) {
        object.animate({ width: "-=200px", height: "-=200px" }, 1);
    }
}

function increase(event) {
    if (event.keyCode == 13) {
        object.animate({ width: "+=200px", height: "+=200px" }, 1);
    }
}
function jump(event) {
    if (event.keyCode == 32) {
        object.animate({ top: "-=200px" }, 10);
    }
}

function jumpBack(event) {
    if (event.keyCode == 32) {
        object.animate({ top: "+=200px" }, 10);
    }
}

$(document).bind("keydown", moveRight)
$(document).bind("keydown", moveLeft)
$(document).bind("keydown", moveDown)
$(document).bind("keydown", moveUp)
$(document).bind("keydown", decrease)
$(document).bind("keyup", increase)
$(document).bind("keydown", jump)
$(document).bind("keyup", jumpBack)