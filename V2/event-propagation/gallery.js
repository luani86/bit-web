
var gallery = document.querySelector(".container");



function getClass(event) {
    var clickedElement = event.target;
    if (clickedElement.tagName.toLowerCase() !== 'img') {
        return;
    }

    clickedElement.classList.add("clicked");
    
    if(clickedElement.width < 300) {
        event.stopPropagation();
    }
}

gallery.addEventListener("click", getClass);

document.addEventListener("click", function(event) {
    console.log(event.target);
})