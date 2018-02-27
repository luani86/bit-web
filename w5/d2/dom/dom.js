/*(function () {
    document.getElementsByTagName('ul:nth-of-type(2)').classList.add('color');

})()
*/
var a = document.getElementsByTagName("ul")[1];

a.className = 'bgcolor';

var b = document.getElementsByTagName("li");

b.className = "color";

for (var i =0; i< b.length; i++){
    b[i].className = "color"; 
}

var c = document.querySelectorAll("ul:nth-of-type(3) li");

for (var i =0; i< c.length; i++){
    c[i].className = "bgcolor1"; 
}

