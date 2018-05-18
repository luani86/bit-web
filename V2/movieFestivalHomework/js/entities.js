function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}
Movie.prototype.getData = function () {
    var movieData = this.title + ", " + this.length + "min, " + this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase();
    return movieData;
}

function Program(date) {
    this.listOfMovies = [];
    this.date = date;
}
Program.prototype.getData = function() {
    var totalMoviesLength = 0;
    for(var i = 0; i< this.listOfMovies.length; i++) {
        totalMoviesLength += this.listOfMovies[i].length.value;
    }
    var programData = this.date + ", " + this.listOfMovies.length + " movies, duration: " + totalMoviesLength;
    return programData;
}

