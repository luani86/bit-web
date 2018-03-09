const UIModule = (function () {

    let UISelectors = {
        searchBoxInput: "#search-box",
    }

    let searchBoxInput = document.querySelector(UISelectors.searchBoxInput);


    function displayMainPage(shows) {

    }

    var updateView = function(tvShows){
        tvShows.getShows().forEach(show => {
            
        });
    }

    return {
        updateView : updateView
    }
})();