var potentialMovies = [];
var potentialPrograms = [];

function createMovie() {
    var movieTitle = document.querySelector("#movie-title").value;
    var movieLength = document.querySelector("#movie-length").value;
    var movieGenre = document.querySelector("#movie-genre").value;
    var newMovie = new Movie(movieTitle, movieLength, movieGenre);

    
    var movieUl = document.querySelector(".movie-list");
    var movieLi = document.createElement("li");
    potentialMovies.push(newMovie);
    newMovie.value = potentialMovies.length;

    movieLi.textContent += newMovie.getData();
    movieUl.appendChild(movieLi);
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
    document.querySelector("#movie-title").value = "";
    document.querySelector("#movie-length").value = "";
    document.querySelector("#movie-genre").value = "";
}

var createMovieBtn = document.querySelector("#create-movie");
createMovieBtn.addEventListener("click", createMovie);

function createProgram() {
    var programDate = document.querySelector("#program-date").value;
    var newProgram = new Program(programDate);
    potentialPrograms.push(newProgram);
    newProgram.value = potentialPrograms.length;

    var programUl = document.querySelector(".program-list");
    var programLi = document.createElement("li");
    programLi.textContent += newProgram.getData();
    programUl.appendChild(programLi);

    if(!programDate) {
        alert("Select valid program date!");
        return
    }
    return newProgram;
}

var createProgramBtn = document.querySelector("#create-program");
var listOfPrograms = document.querySelector(".program-list");

createProgramBtn.addEventListener("click", createProgram);