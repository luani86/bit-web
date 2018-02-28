//var welcome = " Second Hello";
//console.log(welcome);

var test = function () {
    console.log(navigator.platform);
    console.log(navigator.appVersion);
    console.log(navigator.vendor);
    console.log("width screen is: " + screen.width);
    console.log("max possible height is: " + screen.availHeight);
    console.log("url addres is " + location.href);
    console.log("domain name is"+location.hostname)
    console.log("protocol is--"+location.protocol)
    console.log("parts of url:"+location.search)

}
test();

var isOnline = function () {
console.log(navigator.onLine);
}
isOnline();

//location.reload();
// var redirect = function(){
//     location.href = "http://www.bgit.rs/";
// }
// redirect();

var saveInlocalStorage = function(key, value){
    localStorage.setItem(key, value);
}

// saveInlocalStorage("sessionId", "45687454846453egdf564hd6gf5")

var saveInSesion = function(key, value){
    sessionStorage.setItem(key, value);
}

// saveInSesion("hhhh", "uuuu");