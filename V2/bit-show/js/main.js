const dataModule = (() => {
  sendRequestHomepage = successHandler => {
    let request = $.ajax({
      url: "http://api.tvmaze.com/shows",
      method: "GET"
    });
    request.done(response => {
      response.sort((curr, next) => next.rating.average - curr.rating.average);
  
      successHandler(response);
    });
  };

  return {
    sendRequestHomepage,

  };
})();

const uiModule = (() => {
  const body = $("body");
  const $container = $(".container");
  const searchInput = document.querySelector("#searchInput");

  displayDataHomepage = response => {
    const $row = $("<div class='row'>");

    for (let i = 0; i < 50; i++) {
      const $card = $(`
            <div class='col-4'>
                <img src='${response[i].image.original}'>
                <a class='showTitle' href='./single.html'data-id='${response[i].id}'><h5>${
                  response[i].name
                }</h5></a>
            </div>`);

      $row.append($card);
    }

    $container.append($row);
    console.log(response);
  };

  displayDataSinglepage =(response) => {
    
    const $row = $("<div class='row'>");
    const $card = $(`
    <div class='col-6'>
        <img src='#'>
    </div>
    <div class='col-6'
            <h3>Seasons (#)</h3>
        <ul class='seasons'>
            <li>###</li>
        </ul>
             <br>
            <h3>Cast</h3>
        <ul class='cast'>
            <li>###<li>
        </ul>
    <div class='col-12'>
        <h3>Show Details</h3>
        <p>####</p>
    </div>
    `);
    $row.append($card)
    $container.append($row);
  };

  return {
    displayDataHomepage,
    displayDataSinglepage
  };
})();

const mainModule = ((data, ui) => {
  const searchBtn = document.querySelector("#searchBtn");

  const initHomepage = () => {
    dataModule.sendRequestHomepage(function(response) {
      uiModule.displayDataHomepage(response);
    });
  };
  const initSinglePage = () => {
    dataModule.sendRequestHomepage(function(response) {
        uiModule.displayDataSinglepage();
        $(document).on('click', ".showTitle", function(event) {
            event.preventDefault();
            const id = $(this).attr('data-id');
            localStorage.setItem("id", id);
            location.assign('single.html');
           
          });
      });

  }

  return {
    initHomepage,
    initSinglePage
  };
})(dataModule, uiModule);
