var dataModule = (function () {
    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }
    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + "min," + this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase();
    }

    function createMovie(title, length, genre) {
        var currentMovie = new Movie(title, length, genre)
        return currentMovie;
    }

    function updateList(movie) {
        var listOfMovies = [];
        listOfMovies.push(movie);
        return listOfMovies;
    }
    function calculateTotalLength() {
        var totalLength = 0;
        for (var i = 0; i < listOfMovies.length; i++) {
            parseInt(totalLength) += listOfMovies[i].length;
        }
        return totalLength;
    }

    return {
        createMovie: createMovie,
        updateList: updateList,
        calculateTotalLength: calculateTotalLength
    }
})();

var uiModule = (function () {
    function collectData() {
        var titleInput = document.querySelector("#movie-title");
        var lengthInput = document.querySelector("#movie-length");
        var genreInput = document.querySelector("#movie-genre");

        var movieTitle = titleInput.value;
        var movieLength = lengthInput.value;
        var movieGenre = genreInput.value;

        return {
            movieTitle: movieTitle,
            movieLength: movieLength,
            movieGenre: movieGenre
        }
    }

    function displayMovies(movie) {
        var movieList = document.querySelector(".movie-list");
        movieList.textContent += movie + "</br>";
    }

    function displayTotalLength(totalLength) {
        var totalLengthInput = document.querySelector("#total-length");
        totalLengthInput.textContent += totalLength
    }

    return {
        collectData: collectData,
        displayMovies: displayMovies,
        displayTotalLength: displayTotalLength
    }

})();

var mainModule = (function (dataModule, uiModule) {
    var submitBtn = document.querySelector("#submit-movie");
    submitBtn.addEventListener("click", init)

    function init() {
        // collect data
        var formData = uiModule.collectData();
        // create movie and add it to the list of movies
        var createdMovie = dataModule.createMovie(formData.movieTitle, formData.movieLength, formData.movieGenre);
        dataModule.updateList(createdMovie);
        // display movie
        uiModule.displayMovies(dataModule.createMovie());
        uiModule.displayTotalLength(dataModule.calculateTotalLength());
    }

})(dataModule, uiModule);