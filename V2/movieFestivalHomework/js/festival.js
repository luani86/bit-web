"use strict";
(function(){

//---------------------------genre constructor----------------------------
    function Genre(name){
        this.name = name;
    }
    Genre.prototype.getData = function(){
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();
        return  firstLetter + lastLetter;
     }


    function Movie(title,genre,length) {
        if (!genre || !(genre instanceof Genre)) {
            console.log("invalid input");
            return;
        }
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    Movie.prototype.getData = function(){
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }

    //---------------program constructor---------------------------

    function Program(date){
        this.date = new Date(date);
        this.listOfMovies = [];  
    }
    Program.prototype.addMovie = function(movie) {
        if (!movie || !(movie instanceof Movie)){
            console.log("Invalid input!!!");
            return;
        }
        this.listOfMovies.push(movie);
    }

    Program.prototype.getTotalMovies = function () {
        return this.listOfMovies.length;
    };

    Program.prototype.getFullLength = function(){
        var fullLength = 0;
        this.listOfMovies.forEach(function(movie){
            fullLength += parseInt(movie.length);
        })
        return fullLength;
    }
    Program.prototype.getData = function(){
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        var date = day + "." + month + "." + year;
        var resultStr = date + ", program duration " + this.getFullLength() + "min" + "\n";
        this.listOfMovies.forEach(function(movie){
            resultStr += "\t" + movie.title + ", " + movie.length + ", " + movie.genre.getData() + "\n";
        })
        return resultStr;
    }  
    //-----------------------Festival constructor----------------------

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        
    Festival.prototype.getNumOfMovies = function(){
        var count = 0;
        this.listOfPrograms.forEach(function(program){
            count+= program.getTotalMovies();
        });
        return count;
    }
    Festival.prototype.addProgram = function(program){
        if (!program || !(program instanceof Program)){
            console.log("Invalid input!!!");
            return;
        }
        this.listOfPrograms.push(program);
    }
    Festival.prototype.getData = function(){
        var resultsStr = this.name + " has " + this.getNumOfMovies() + " movie titles \n";
        this.listOfPrograms.forEach(function(program){
            resultsStr += "\t" + program.getData() + "\n";
        })
        return resultsStr;
    }
}

    //----------------creator functions-----------------------

    function createMovie(movieTitle, movieLength, genre){
        return new Movie(movieTitle, new Genre(genre), movieLength);
    }

    function createProgram(date){
        return new Program(date);
    }

    
    //------------creating festival----------------
    var kustendorf = new Festival("Kustendorf");
    var mondayProgram = createProgram("11/5/2018");
    var tuesdayProgram = createProgram("12/5/2018");
    var transporter = createMovie("Transporter", "95min", "action");
    var blow = createMovie("Blow", "92min", "triller");
    var inception = createMovie("Inception", "125min", "science fiction");
    var mrBean = createMovie("Mr. Bean", "98min", "comedy");

    mondayProgram.addMovie(transporter);
    mondayProgram.addMovie(blow);
    mondayProgram.addMovie(inception);
    mondayProgram.addMovie(mrBean);
    tuesdayProgram.addMovie(transporter);
    tuesdayProgram.addMovie(blow);
    tuesdayProgram.addMovie(inception);
    tuesdayProgram.addMovie(mrBean);

    kustendorf.addProgram(mondayProgram);
    kustendorf.addProgram(tuesdayProgram);

    //---------------------execution-------------------
    console.log(kustendorf.getData());

})();