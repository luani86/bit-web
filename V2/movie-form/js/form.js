
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
    document.querySelector(".movie-list").innerHTML += createdMovie.getData() + "<br>";
}
var createMovieButton = document.querySelector("#submit-movie");

createMovieButton.onclick = createMovie;

function createProgram(){
    var date = document.querySelector("#program-date").value;
    var createdProgram = new Program(date);
    document.querySelector(".program-list").innerHTML += createdProgram.getData() +"<br>";

}
var createProgramButton = document.querySelector("#create-program");
createProgramButton.onclick = createProgram;

