var mario = document.querySelector("#mario");
var marioRunning = document.querySelector("#mario_running");
var body = document.querySelector("body");
document.addEventListener("keydown", moving);
document.addEventListener("keyup", stop);
function moving(event) {
    if(event.keyCode === 39) {
        mario.classList.remove("exist")
        mario.classList.add("disapear");
        marioRunning.classList.remove("disapear");
        marioRunning.classList.add("exist");
    }
}

function stop(event) {
    if(event.keyCode === 39) {
        mario.classList.remove("disapear")
        mario.classList.add("exist");
        marioRunning.classList.remove("exist");
        marioRunning.classList.add("disapear");
    }
}
