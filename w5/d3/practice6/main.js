(function () {
    var input = document.querySelectorAll("input");
    for (var i = 0; i < input.length; i++) {
        if (input[i].hasAttribute('required') && input[i].value === "") {
            input[i].classList.add('notext');
        }
    };

})();