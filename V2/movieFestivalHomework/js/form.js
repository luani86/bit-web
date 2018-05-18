//---------Create empty potential program and movie lists--------------------
var potentialMovies = [];
var potentialPrograms = [];

//---------------Create movie function-------------------
function createMovie() {
    var movieTitle = document.querySelector("#movie-title").value;
    var movieLength = document.querySelector("#movie-length").value;
    var movieGenre = document.querySelector("#movie-genre").value;
    var newMovie = new Movie(movieTitle, movieLength, movieGenre);
      //------------Validation--------------
      if(!movieTitle) {
        alert("Enter valid movie title!");
        return
    }
    if(movieLength < 1) {
        alert("Enter valid movie length!");
        return
    }
    if(movieGenre == "-") {
        alert("Select movie genre!");
        return
    }
    //----------Fill the list with movies-------------------
    var movieUl = document.querySelector(".movie-list");
    var movieLi = document.createElement("li");
    potentialMovies.push(newMovie);
    newMovie.value = potentialMovies.length;

    movieLi.textContent += newMovie.getData();
    movieUl.appendChild(movieLi);

   //----------------Reset movie inputs---------
    document.querySelector("#movie-title").value = "";
    document.querySelector("#movie-length").value = "";
    document.querySelector("#movie-genre").value = "";

      //----------------Fill the select with movies------------
      var movieSelect = document.querySelector("#listOfMovies");
      var movieOption = document.createElement("option");
      movieOption.textContent = newMovie.title;
      movieSelect.appendChild(movieOption);
}
var createMovieBtn = document.querySelector("#create-movie");
createMovieBtn.addEventListener("click", createMovie);

//---------------Create program function-------------------
function createProgram() {
    var programDate = document.querySelector("#program-date").value;
    var newProgram = new Program(programDate);
    potentialPrograms.push(newProgram);
    newProgram.value = potentialPrograms.length;

 //------------Validation--------------
 if(!programDate) {
    alert("Select valid program date!");
    return
}
    var programUl = document.querySelector(".program-list");
    var programLi = document.createElement("li");
    programLi.textContent += newProgram.getData();
    programUl.appendChild(programLi);

//----------------Fill the select with programs------------
      var programSelect = document.querySelector("#listOfPrograms");
      var programOption = document.createElement("option");
      programOption.textContent = newProgram.date;
      programSelect.appendChild(programOption);
   //----------------Reset program input---------
   document.querySelector("#program-date").value = "";
}

var createProgramBtn = document.querySelector("#create-program");
var listOfPrograms = document.querySelector(".program-list");
createProgramBtn.addEventListener("click", createProgram);

//----------------Add movie to program function-----------------
function addMovieToProgram () {
    var counterOfMoviesInProgram = 0;
    counterOfMoviesInProgram++;
    var movieUl = document.querySelector(".movie-list");
    var moviesInList = movieUl.querySelectorAll("li");

    var movieSelect = document.querySelector("#listOfMovies");
    var moviesinSelect = movieSelect.querySelectorAll("option");

    var programUl = document.querySelector(".program-list");
    var programsInList = programUl.querySelectorAll("li");

    var programSelect = document.querySelector("#listOfPrograms");
    var programsInSelect = programSelect.querySelectorAll("option");
   
    console.log(programsInList);
    programsInList[potentialPrograms.length-1].textContent = programsInSelect[potentialPrograms.length].textContent + " " + counterOfMoviesInProgram + " movies " + "duration: " + "?";
}
var addMovieBtn = document.querySelector("#add-movie");
addMovieBtn.addEventListener("click", addMovieToProgram);
