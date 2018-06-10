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
  //---------Request for search results-------
  const sendRequestForSearch = ((successSearchHandler) => {
    let query = $("#searchInput").val();
    let request = $.ajax({
      url: "http://api.tvmaze.com/search/shows?q=" + query,
      method: "GET"
    });
    request.done((response) => {
      // console.log(response);
      
      successSearchHandler(response)
    })

  })
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
    sendRequestCast,
    sendRequestForSearch
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

  const createListItem = (singleShow) => {
    let listItem = `<li class="searchItem" data-id="${singleShow.show.id}">${singleShow.show.name}</li>`;
    return listItem;
  }

  const showSearchResults = (showList) => {
let searchResultsList = $("#search-results");
searchResultsList.hide();
searchResultsList.html("");
showList.forEach((singleShow) => {
  searchResultsList.append(createListItem(singleShow));
  searchResultsList.fadeIn(500);
})
  }

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
    showSearchResults
    // displaySeasons
  };
})();

const mainModule = ((data, ui) => {
  const searchBtn = document.querySelector("#searchBtn");

  const initHomepage = () => {
    dataModule.sendRequestHomepage(function (response) {
      uiModule.displayDataHomepage(response);
      enableSearch()
    });

  };

  const enableSearch = () => {
    const goToSinglePage = (event) => {
      localStorage.setItem("id", $(event.target).data("id"));
      location.assign("single.html")
    }
const addListenersToSearchItems = () =>{
  $(".searchItem").on("click", goToSinglePage);
}
    function search() {
      dataModule.sendRequestForSearch( (response)=>{
        uiModule.showSearchResults(response)
        addListenersToSearchItems() 
      } );

    }

    $("#searchInput").on("keyup",search);

    $(document).on("click", ".showTitle", function (event) {
      event.preventDefault();
      const id = $(this).attr("data-id");
      console.log(id);
      localStorage.setItem("id", id);
      location.assign("single.html");
      displayDataSinglepage()
    });
  }

    
 

  const initSinglePage = () => {
    dataModule.sendRequestSinglepage((responseSingle) => {
      console.log(responseSingle);
      uiModule.displayDataSinglepage(responseSingle);
      enableSearch();
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
