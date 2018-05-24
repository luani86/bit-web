// var ajax = new XMLHttpRequest();

// ajax.open(
//   "GET",
//   "http://thecatapi.com/api/images/get?format=xml"
// );
// ajax.onload = function() {
//     if(ajax.status === 200) {
//         var xmlResponse = ajax.responseXML
//         var image = document.createElement("img");
//         var imgsrc = xmlResponse.querySelector('url').textContent;
//         var body = document.querySelector("body");
//         body.appendChild(image);
//         image.setAttribute('src',imgsrc);
//         console.log(ajax);
//     }
// };
// ajax.send();


var request = new XMLHttpRequest();

request.open( "GET", "https://dog.ceo/api/breeds/image/random");

request.onload = function() {
    var image = document.createElement("img");
    var body = document.querySelector("body");
    if(request.status >= 200 && request.status <400){
        var data = JSON.parse(request.responseText);
        console.log(data)
      
        var imageSrc = data.message;
        image.setAttribute("src", imageSrc);
        body.appendChild(image)

        function handler() {
            var data = JSON.parse(request.responseText);
            var image = document.createElement("img");
            var body = document.querySelector("body");
            var imageSrc = data.message;
            image.setAttribute("src", imageSrc);
            body.appendChild(image)
        }
    }
    image.addEventListener("click", handler)
}

request.send();