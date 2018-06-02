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
  //---------Request for single page-----------
  sendRequestSinglepage = (successHandlerSingle) => {
    let request = $.ajax({
      url: `http://api.tvmaze.com/shows/${localStorage.id}`,
      method: "GET"
    });
    request.done(responseSingle => {
      successHandlerSingle(responseSingle)
    });
  };

  //---------Request for seasons-----------
  sendRequestSeasons = (successHandlerSingle) => {
    let request = $.ajax({
      url: `http://api.tvmaze.com/shows/${localStorage.id}/seasons`,
      method: "GET"
    });
    request.done(responseSeasons => {
      successHandlerSingle(responseSeasons)
    });
  };

  //---------Request for cast-----------
  sendRequestCast = (successHandlerSingle) => {
    let request = $.ajax({
      url: `http://api.tvmaze.com/shows/${localStorage.id}/cast`,
      method: "GET"
    });
    request.done(responseCast => {
      successHandlerSingle(responseCast)
    });
  };

  return {
    sendRequestHomepage,
    sendRequestSinglepage,
    sendRequestSeasons,
    sendRequestCast
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
                <a class='showTitle' href='./single.html' data-id='${
        response[i].id
        }'><h5>${response[i].name}</h5></a>
            </div>`);

      $row.append($card);
    }

    $container.append($row);
    console.log(response);
  };

  displayDataSinglepage = (responseSingle) => {
    const $row = $("<div class='row'>");
    const $card = $(`
    <div class='col-6'>
    <h1 class="title">${responseSingle.name}</h1>
        <img src='${responseSingle.image.original}'>
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
        <p>${responseSingle.summary}</p>
    </div>
    `);
    $row.append($card);
    $container.append($row);
    // console.log(response)
  };

  // displaySeasons = (responseSeasons, responseSeasons) => {
  //   const $row = $("<div class='row'>");
  //   const $card = $(`
  //   <div class='col-6'>
  //   <h1 class="title"></h1>
  //       <img src=''>
  //   </div>
  //   <div class='col-6'
  //           <h3>Seasons (${responseSeasons.length})</h3>
  //       <ul class='seasons'>
  //           <li>###</li>
  //       </ul>
  //            <br>
  //           <h3>Cast</h3>
  //       <ul class='cast'>
  //           <li>###<li>
  //       </ul>
  //   <div class='col-12'>
  //       <h3>Show Details</h3>
  //       <p></p>
  //   </div>
  //   `);
  //   $row.append($card);
  //   $container.append($row);
  // };

  return {
    displayDataHomepage,
    displayDataSinglepage,
    // displaySeasons
  };
})();

const mainModule = ((data, ui) => {
  const searchBtn = document.querySelector("#searchBtn");

  const initHomepage = () => {
    dataModule.sendRequestHomepage(function (response) {
      uiModule.displayDataHomepage(response);
    });

    $(document).on("click", ".showTitle", function (event) {
      event.preventDefault();
      const id = $(this).attr("data-id");
      console.log(id);
      localStorage.setItem("id", id);
      location.assign("single.html");
      displayDataSinglepage()
    });
  };

  const initSinglePage = () => {
    dataModule.sendRequestSinglepage((responseSingle) => {
      console.log(responseSingle);
      uiModule.displayDataSinglepage(responseSingle);
    });

    dataModule.sendRequestSeasons((responseSeasons) => {
      console.log(responseSeasons);
      // uiModule.displaySeasons(responseSeasons);
    });

    dataModule.sendRequestCast((responseCast) => {
      console.log(responseCast);
    });

    const $document = $(document);
  };

  return {
    initHomepage,
    initSinglePage
  };
})(dataModule, uiModule);
