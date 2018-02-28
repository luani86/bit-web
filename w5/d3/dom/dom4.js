var f = function () {
    var i = document.getElementsByTagName("li")[2].textContent;
    return alert(i);
}
f();

var f2 = function (novitext) {
    var t = document.querySelector("ul li:last-child");
    t.textContent = novitext;
}
f2("novitext");