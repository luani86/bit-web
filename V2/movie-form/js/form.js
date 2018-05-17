var potencialMovies = [];
var potencialPrograms = [];



function createMovie(){
    var movieTitleField = document.querySelector("#movie-title") ;
    var movieLengthField = document.querySelector("#movie-length"); 
    var movieGenreField = document.querySelector("#movie-genre");
    
    var movieTitle = movieTitleField.value;
    var movieLength = movieLengthField.value;
    var movieGenre = movieGenreField.value;

    //
    if (!movieTitle){
        alert("Please Enter Movie Title");
        return;
    }
    if (!movieLength || movieLength < 1){
        alert("Invalid movie length");
        return;

    }
    if(movieGenre == "-"){
        alert("Select valid Genre");
        return;
    }
    var createdMovie = new Movie(movieTitle,movieLength, movieGenre);
    var movieUL = document.querySelector(".movie-list") //innerHTML += createdMovie.getData() + "<br>";
    var movieLI = document.createElement("li");
    var movieTextNode = document.createTextNode(createdMovie.getData());
    movieLI.appendChild(movieTextNode);
    movieUL.appendChild(movieLI);

    //--------------------dodavenje filma u listu potencijalnih filmova--------------------
    potencialMovies.push(createdMovie);
    var selectTag = document.querySelector("#listOfMovies");
    var optionTag = document.createElement("option");
    var content = document.createTextNode(createdMovie.title);
    optionTag.appendChild(content);
    optionTag.value = potencialMovies.length;
    selectTag.appendChild(optionTag);

    //-----setovanje fildova na ""------------------
    movieTitleField.value = "";
    movieLengthField.value = "";
    movieGenreField.value = "-"

}
var createMovieButton = document.querySelector("#submit-movie");

createMovieButton.onclick = createMovie;

function createProgram(){
    var date = document.querySelector("#program-date").value;
    var formatedDate = new Date(date);
    if (!date || formatedDate.getTime() < Date.now()){
        alert("Invalid date!")
        return;
    }

    var createdProgram = new Program(date);
    var programUL = document.querySelector(".program-list");
    var programLI = document.createElement("li");
    programLI.value = potencialPrograms.length;
    var programTextNode = document.createTextNode(createdProgram.getData());
    programLI.appendChild(programTextNode);
    programUL.appendChild(programLI);

    potencialPrograms.push(createdProgram);
    var selectTag = document.querySelector("#listOfPrograms");
    var optionTag = document.createElement("option");
    var content = document.createTextNode(createdProgram.date.getDate() +"."+ createdProgram.date.getMonth() +"."+ createdProgram.date.getFullYear()+".");
    optionTag.appendChild(content);
    optionTag.value = potencialPrograms.length;
    selectTag.appendChild(optionTag);
}

var createProgramButton = document.querySelector("#create-program");
createProgramButton.onclick = createProgram;

function addMovieToProgram() {
    var programSelect = document.querySelector("#listOfPrograms");
    var movieSelect = document.querySelector("#listOfMovies");
    var programIndex = programSelect.value;
    var movieIndex = movieSelect.value;
    var currentProgram = potencialPrograms[programIndex - 1];
    var currentMovie = potencialMovies[movieIndex - 1];
    currentProgram.addMovie(currentMovie);

    var programUL = document.querySelector(".program-list");
    var programLis = programUL.querySelectorAll("li");
    programLis[programIndex - 1].textContent = currentProgram.getData();
}
var addMovieBtn = document.querySelector("#add-movie");
addMovieBtn.onclick = addMovieToProgram;
