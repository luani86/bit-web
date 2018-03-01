var test = function () {
    var a = document.getElementsByClassName('active')[0].parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild
    var b = document.getElementsByClassName('active');
    b[0].className = ' ';
    a.className = 'active';
}

var test1 = function () {
    var a = document.getElementsByClassName('selected')[0].parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling;
    var b = document.getElementsByClassName('selected');

    b[0].className = ' ';
    a.className = 'selected';
}

setTimeout(test,1000);
setTimeout(test1,2000);