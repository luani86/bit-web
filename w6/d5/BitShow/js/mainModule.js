const mainModule = (function (UICtrl, dataCtrl) {
    let request = $.ajax({
        url: "http://api.tvmaze.com/shows",
        method: "GET"
    });
    console.log

    let tvShows = new TVShows();

    request.done(function (response) {
        let nizShowObjekata = response.forEach(function (jedanJsonObjekat) {
            let show = new Show(jedanJsonObjekat.name, jedanJsonObjekat.image.medium, )
            tvShows.add(show);
        });

        UICtrl.updateView(tvShows);

    });


})(UIModule, dataModule);