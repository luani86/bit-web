function createMovie() {
    var movieTitle = document.querySelector("#movie-title").value;
    var movieLength = document.querySelector("#movie-length").value;
    var movieGenre = document.querySelector("#movie-genre").value;
    var newMovie = new Movie(movieTitle, movieLength, movieGenre);

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
    return newMovie;
}

var createMovieBtn = document.querySelector("#create-movie");
var listOfMovies = document.querySelector(".movie-list");

var newMovieOption = document.createElement("option");

createMovieBtn.onclick = function() {
    listOfMovies.textContent += createMovie().getData() + ", ";
    document.querySelector("#movie-title").value = "";
    document.querySelector("#movie-length").value = "";
    document.querySelector("#movie-genre").value = "";

    
}
// Problem su dva onclick eventa!

// createMovieBtn.onclick = function() {
//     document.querySelector("#listOfMovies").appendChild(newMovieOption);
//     newMovieOption.textContent += createMovie().getData();
// }



function createProgram() {
    var programDate = document.querySelector("#program-date").value;
    var newProgram = new Program(programDate);
    if(!programDate) {
        alert("Select valid program date!");
        return
    }
    return newProgram;
}

var createProgramBtn = document.querySelector("#create-program");
var listOfPrograms = document.querySelector(".program-list");

createProgramBtn.onclick = function() {
    listOfPrograms.textContent += createProgram().getData();
    document.querySelector("#program-date").value = "";
}
