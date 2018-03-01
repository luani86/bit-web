
(function () {
    console.log(navigator.platform);
    console.log(navigator.userAgent);
})();

(function () {
    if (navigator.onLine) {
        console.log("browser is online");
    }
    else
        console.log("browser is offline");

    console.log(screen.height, screen.width, screen.availHeight, screen.availWidth);

    console.log(location.href, location.hostname, location.protocol, location.search);

    // console.log(location.href = "https://www.google.rs/?gws_rd=cr&dcr=0&ei=0jOUWpWwLMG6UI3mh4AN");
    //console.log(location.reload())

})();

var storage = sessionStorage;
var save_data = function (key, value) {
    storage.setItem = (key, value)
}
var storage = sessionStorage;
var get_data = function (key) {
    var value = storage.getData(key);
    if (value == null) {
        console.log('no data')
    } else console.log(value);
}

get_data('stevan');

