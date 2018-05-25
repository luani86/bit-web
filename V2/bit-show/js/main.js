

const dataModule = (() => {
  sendRequest = successHandler => {
    var request = $.ajax({
      url: "http://api.tvmaze.com/shows",
      method: "GET"
    });
    request.done(response => {
      successHandler(response);
      response.sort((curr, next) => {
          if(next.rating.average > curr.rating.average) {
            return 1;
          }
          if(next.rating.average < curr.rating.average) {
            return -1;
          }
          if(next.rating.average == curr.rating.average) {
            return 0;
          }
          console.log(response)
      })
    });
    
  };


  return {
    sendRequest
  };
})();

const uiModule = (() => {
    const body = $("body");
    const $container = $(".container");
    const searchInput = document.querySelector("#searchInput");

  displayData = response => {
    const $row = $("<div class='row'>");

    for (let i = 0; i < 50; i++) {
        const $card = $(`
            <div class='col-4'>
                <img src='${response[i].image.original}'>
                <a class='showTitle' href='./single.html'><h5>${response[i].name}</h5></a>
            </div>`
        );

        $row.append($card);
    }
    
    $container.append($row);
    console.log(response)
  };

  return {
    displayData
  };
})();

const mainModule = ((data, ui) => {
  const searchBtn = document.querySelector("#searchBtn");

  dataModule.sendRequest(function(response) {
    uiModule.displayData(response);
  });
})(dataModule, uiModule);
