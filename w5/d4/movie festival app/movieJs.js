//logika aplikacije
//pbjekat film
//lisa filmova

function Movie(movieTitle, movieLength, movieGenre) {
    this.movieTitle = movieTitle;
    this.movieLength = movieLength;
    this.movieGenre = movieGenre;

    this.getAbb = function () {
        var firstIndex = 0;
        var lastIndex = this.movieGenre.length - 1;
        var output = this.movieGenre.charAt(firstIndex) + this.movieGenre.charAt(lastIndex);
        return output.toUpperCase();
    }

    this.getData = function () {
        var c = "";

        c = this.movieTitle + " " + this.movieLength + "min" + " " + this.getAbb();
        return c;
    }
}

//lista filmova
var allMovies = [];
var allMoviesLength = 0;
//funkcionalni interfejs
//definistati klik add movei

document.querySelector(".btn").addEventListener("click", function (event) {

    //1--- procitati unete podatke
    var movieTitle = document.querySelector("#movie_title").value;
    var movieLength = document.querySelector("#movie_length").value;
    //var movieGenre = document.querySelector(".form-control").value;

    var movieGenreIndex = document.querySelector("#luka").selectedIndex;
    movieGenreValue = document.querySelector("#luka").options[movieGenreIndex].value;

    //2--- validacija
    //3--- napravtiti onjekat koji predstavlja film



    var movie = new Movie(movieTitle, movieLength, movieGenreValue);
    //4--- dodajemo film u listu filmova (na nivou aplilacike)
    allMovies.push(movie);
    //5--- azuriramo interfejs - prikazumo novi film
    // var myInput = function () {

    var newEl = document.createElement('li');
    var newText = document.createTextNode(movie.getData());
    newEl.appendChild(newText);
    someList = document.getElementById('movie-list');
    someList.appendChild(newEl);

    var moviesLengthCount = function(){
        var mLength = parseInt(movie.movieLength);
        allMoviesLength += mLength;
    }

    moviesLengthCount();

    var counterNode = document.getElementsByClassName("counter")[0];
    counterNode.textContent = allMoviesLength;

    //6--- azuriramo inerfejs




});