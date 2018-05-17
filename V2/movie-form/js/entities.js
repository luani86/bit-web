function Movie(title, length, genre) {
  this.title = title;
  this.length = length;
  this.genre = genre;
}
Movie.prototype.getData = function() {
  var movieData =
    this.title +
    ", " +
    this.length +
    "min, " +
    this.genre[0].toUpperCase() +
    this.genre[this.genre.length - 1].toUpperCase();
  return movieData;
};

function Program(date) {
  this.date = new Date(date);
  this.listOfMovies = [];
}
Program.prototype.addMovie = function(movie) {
  if (!movie || !(movie instanceof Movie)) {
    console.log("Invalid input!!!");
    return;
  }
  this.listOfMovies.push(movie);
};

Program.prototype.getTotalMovies = function() {
  return this.listOfMovies.length;
};

Program.prototype.getFullLength = function() {
  var fullLength = 0;
  this.listOfMovies.forEach(function(movie) {
    fullLength += parseInt(movie.length);
  });
  return fullLength;
};
Program.prototype.getData = function() {
  var day = this.date.getDate();
  var month = this.date.getMonth() + 1;
  var year = this.date.getFullYear();
  var date = day + "." + month + "." + year;
  var resultStr =
    date + ", " +this.getTotalMovies()+" movies, duration " +this.getFullLength() + "min" + "\n";
//   this.listOfMovies.forEach(function(movie) {
//     resultStr +=
//       "\t" +
//       movie.title +
//       ", " +
//       movie.length +
//       ", " +
//       movie.genre.getData() +
//       "\n";
  //});
  return resultStr;
};

// var tockovi = new Movie("Tockovi", 90, "Drama")
// console.log(tockovi.getData())
