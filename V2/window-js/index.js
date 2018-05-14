function aaa() {
    console.log('aaaaaaaaa');

};
console.log(navigator.platform);

console.log(navigator.appVersion);

console.log(navigator.vendor);

(function isOnline() {
    if(navigator.onLine) {
        console.log('is online');
    }else {
        console.log('is not online');
    }
})();

(function dimensions() {
    console.log('width is ' + screen.width + 'px' + ' height is ' + screen.height + 'px');
    console.log('max height is ' + screen.availHeight +'px');

})();

(function loc() {
console.log(location.href);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.pathname);
})();

function reload() {
    return location.reload();
}

function redirect(url) {
 return location.assign(url);
}

function setStorage (key, value) {
     localStorage.setItem(key, value);
}

function readStorage () {
    if(localStorage.length > 0) {
        console.log(localStorage);
    } else{
        console.log("there is no data.")
    }
}

function delStorage () {
    localStorage.clear();
}

function setStorageSession (key, value) {
    sessionStorage.setItem(key, value);
}

function readStorageSession () {
   if(sessionStorage.length > 0) {
       console.log(sessionStorage);
   } else{
       console.log("there is no data.")
   }
}

function delStorageSession () {
   sessionStorage.clear();
}

function goBack() {
    history.back()
}
function goFwd() {
    history.forward()
}
function goAny(num) {
    history.go(num)
}