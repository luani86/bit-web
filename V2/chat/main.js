var message = document.querySelector("#chat")
var displayField = document.querySelector("#display");

function submit(){
    var newMessageBox = document.createElement("p");
    newMessageBox.textContent = message.value;

    displayField.appendChild(newMessageBox);
    message.value = "";

    newMessageBox.scrollIntoView();
}

var btn = document.querySelector("button");
btn.onclick = submit;
message.addEventListener("keydown", function(){
    if (event.keyCode === 13){
        btn.click();
    }
})