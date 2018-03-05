// Kreiranje objekta film, skracenica, getData

function Film(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;
    this.abreviation = function () {
        var firstIndex = 0;
        var lastIndex = this.movieGenre.length - 1;
        return this.movieGenre.charAt(firstIndex).toUpperCase() + this.movieGenre.charAt(lastIndex).toUpperCase()
    }
    this.getData = function () {
        var data = "";
        data = this.movieTitle + ", " + this.movieLength + " min " + this.abreviation();
        return data;
    }
}

// Definisanje liste filmova, na pocetku prazan niz
// Definisanje ukupne duzine filmova, na pocetku 0

var allMovies = [];



var counter = 0;
// Dogadjaj (klik na dugme) dohvatanje elemenata u html pomocu js

document.querySelector("#btn1").addEventListener("click", function (event) {

    var movieTitle = document.querySelector("#movie_title").value;
    var movieLength = document.querygSelector("#movie_length").value;
    var movieGenreIndex = document.querySelector("#lista_zanrova").selectedIndex;
    var movieGenreValue = document.querySelector("#lista_zanrova").options[movieGenreIndex].value;
// Kreiranje objekta film

//validacija zanra filma
if(movieGenreIndex == 0){
    movieGenreValue = "Unknown";
}
    
var film = new Film(movieTitle, movieLength, movieGenreValue);


// Kreiranje elemenata liste filmova i dodavanje novih filmova u listu
var moviesList = document.querySelector("#movie-list");
var newListElement = document.createElement("li");
//var newText = document.createTextNode(film.getData());
newListElement.textContent = film.getData();
moviesList.appendChild(newListElement);
allMovies.push(film);

// do ovde je delimicno OK, ovo ispod ne valja

// Ukupna duzina filmova
var totalLength = function (){
    var movieLength = parseInt(film.movieLength);
    if(isNaN(movieLength) == true){
        return "Greska!";
    }
    else{
        counter += movieLength;
    }
return (counter);
}

var lengthCounter = document.querySelector("#counter");
lengthCounter.textContent = totalLength();


    
});
