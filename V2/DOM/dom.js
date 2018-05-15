
// function applyRed() {
//     var lists = document.querySelectorAll("ul");
//     lists[1].className = "selectedList";
// }
// applyRed()

// function selectLi() {
//     var allLi = document.querySelectorAll("li");
//     for(var i = 0 ; i < allLi.length ; i++) {
//         allLi[i].className += "colorGreen";
//     }  
// }
// selectLi();
function thirdList () {
    var lists = document.querySelectorAll("ul");
    var thirdList = lists[2];
    var thirdLievi = thirdList.children;
    console.log(thirdLievi)
    for(var i = 0 ; i < thirdLievi.length ; i++) {
        thirdLievi[i].className = "orange";
    }
}
thirdList();

function selectActive() {
    var activeLi = document.querySelector(".active");
    activeLi.className = "";

    var activeLiParent = activeLi.parentElement.parentElement;
    var firstDiv = activeLiParent.previousElementSibling;
    var firstUl = firstDiv.firstElementChild.firstElementChild;
    firstUl.className = "active"
}
selectActive();