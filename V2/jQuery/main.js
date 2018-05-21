$(function() {
    console.log("Miletić");

$("li:first").addClass("border-miletic");
$("li").css('text-transform' , 'uppercase');
$('.active').css('color' , 'purple');

var l = parseInt($('li').length / 2);
$('li:eq(' + l + ')').css("background-color", "yellow");
console.log($("li"))
})