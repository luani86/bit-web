// // Constructor function for movie
// function Movie(title, length, genre) {
//     this.title = title;
//     this.length = length;
//     this.genre = genre;
// }
// Movie.prototype.getData = function() {
//     var movieData = this.title + ", " + this.length + "min, " + this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase();
//     return movieData;
// }

// // UI MODULE
// // Collect data
// var uiModule = (function() {
//   function collectFormData() {
//     var movieTitleElement = document.querySelector("#movie-title");
//     var movieLengthElement = document.querySelector("#movie-length");
//     var movieGenreElement = document.querySelector("#movie-genre");
   
//     var totalMoviesLength = document.querySelector("#total-length");

//     var movieTitle = movieTitleElement.value;
//     var movieLength = movieLengthElement.value;
//     var movieGenre = movieGenreElement.value;
//   }

//   // Instance of Movie constructor
//   var batman = new Movie("Batman", 90, "Drama");


//   function displayMovie() {
//     var movieList = document.querySelector(".movie-list");
//     var movieListElement = document.createElement("li");
//     movieListElement.textContent = Movie.getData();
//   }
  
//   return {
//     collectData: collectFormData,
//     displayMovie: displayMovie
//   };
 
// })();

// // DATA MODULE 
// var dataModule = (function() {
//     function createMovie(title, length, genre) {
//         var allMovies = [];
//         var currentMovie = new Movie(title, length, genre);
//         allMovies.push(currentMovie);
//         return currentMovie;
//     }
//     return {
//         currentMovie: createMovie
//     }
// })();

// // MAIN MODULE
// var mainModule = (function(uiModule, dataModule) {
//     var submitMovieBtn = document.querySelector("#submit-movie");
//     submitMovieBtn.addEventListener("click", function() {
//         var createNewMovie = dataModule.currentMovie;
//         uiModule.displayMovie();
//         var instanceMovie = createNewMovie(createNewMovie.title, createNewMovie.length, createNewMovie.genre)
//         console.log(instanceMovie)
//     })

// })(uiModule, dataModule)

//--------------------------------------Dario resenje-------------------
var uiModule = (function() {
    function collectData() {
        var movieTitleInput = document.querySelector("#movie-title");
        var movieLengthInput = document.querySelector("#movie-length");
        var movieGenreInput = document.querySelector("#movie-genre");
    
        var movieTitle = movieTitleInput.value;
        var movieLength = movieLengthInput.value;
        var movieGenre = movieGenreInput.value;

        return {
            title: movieTitle,
            length: movieLength,
            genre: movieGenre
        }
      }
      function updateMovieList(movie) {
          var movieList = document.querySelector(".movie-list");
          movieList.innerHTML = movie.getData() + "</br>";
      }
      return {
          collectData: collectData,
          updateMovieList: updateMovieList
      }
})();

var dataModule = (function() {
    var listOfMovies = [];

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getData = function() {
        var movieData = this.title + ", " + this.length + "min, " + this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase();
    return movieData;
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    function addMovieToList(movie) {
        listOfMovies.push(movie);
    }
    return {
        createMovie: createMovie,
        addMovieToList: addMovieToList
    }
})();

var mainModule = (function(data, ui) {
    var submitMovieBtn = document.querySelector("#submit-movie");
    submitMovieBtn.addEventListener("click", function() {
        // collect data
var formData = uiModule.collectData();
// create movie, add to movie list
var createdMovie = dataModule.createMovie(formData.title, formData.length, formData.genre);
dataModule.addMovieToList(createdMovie);
// update movie list (ui)
uiModule.updateMovieList(createdMovie);
    })



})(dataModule, uiModule);


