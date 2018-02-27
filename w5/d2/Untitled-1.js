function hello() {
    alert("Zdravo Stevane!");
}

(function () {

   hello();

    // userChoice will be true of false 
    var userChoice = prompt('Kako ste danas');

    var userChoice1 = confirm('Are you sure that ...?' +userChoice);

    if (userChoice1)
    {

        alert('Successful');
    }

})();