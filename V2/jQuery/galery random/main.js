var body = $("body");

var links = [
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150",
    "http://via.placeholder.com/350x150"
];

var $container = $("<div>");
links.forEach(function (imageSrc) {
    var $image = $("<img>").attr("src", imageSrc);
    $image.width(10 + Math.floor(Math.random() * 500))
    $container.append($image);
    if ($image.width() < 200) {
        $image.css("border", "1px solid green");
        return false;
    }
});
$container.prepend("<h1>Amazing galery</h1>")
body.append($container);
