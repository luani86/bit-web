// const dataModule = (() => {
//   sendRequest = () => {
//     var request = $.ajax({
//       url: "http://api.tvmaze.com/shows",
//       method: "GET"
//     });
//     request.done((response) => {
//       console.log(response);
    
//       const body = $("body");
//     const container = $(".container");
//     const row = document.createElement("div");
//     $(row).addClass("row");
//     const col = document.createElement("div");
//     $(col).addClass("col-4");
//     const showTitle = document.createElement("h5");
    

//     const searchInput = document.querySelector("#searchInput");
// for(let i = 0; i < response.length / 20; i++) {
//     showTitle.textContent = response[i].id;
//     let imageBig = document.createElement("img")
//     let imageSrc = response[i].image.original;
//     imageBig.setAttribute("src", imageSrc)
//     col.append(imageBig)
//     col.append(showTitle);
//     row.append(col);
//     container.append(row);
// }
        
//         body.append(container)
//     });
//   };
//   return {
//     sendRequest
//   };
// })();

// const uiModule = (() => {
//   collectData = () => {
//     const body = $("body");
//     const container = $(".container");
//     const row = document.createElement("div");
//     $(row).addClass("row");
//     const col = document.createElement("div");
//     $(col).addClass("col-4");
//     const showTitle = document.createElement("h5");

//     const searchInput = document.querySelector("#searchInput");
//   };
//   return {
//     collectData
//   };
// })();

// const mainModule = ((data, ui) => {
//   const searchBtn = document.querySelector("#searchBtn");
//   // init = (handleRequest) => {
//   // searchBtn.addEventListener("click", dataModule.sendRequest)
//   // }
//   // init()
//   dataModule.sendRequest();
// })(dataModule, uiModule);

const dataModule = (() => {
  
    sendRequest = (successHandler) => {
    var request = $.ajax({
      url: "http://api.tvmaze.com/shows",
      method: "GET"
    });
    request.done((response) => {
      console.log(response); 
        successHandler(response)
    });
  };
  return {
    sendRequest
  };
})();

const uiModule = (() => {

  displayData = (response) => {
    const body = $("body");
    const container = $(".container");
    const row = document.createElement("div");
   

    const searchInput = document.querySelector("#searchInput");
    for(let i = 0; i < 50; i++) {
        $(row).addClass("row");
        const col = document.createElement("div");
        $(col).addClass("col-4");
        const link = document.createElement("a")
        link.setAttribute("href", "#")
        const showTitle = document.createElement("h5");
        link.appendChild(showTitle)
        showTitle.textContent = response[i].name;
        let imageBig = document.createElement("img")
        let imageSrc = response[i].image.original;
        imageBig.setAttribute("src", imageSrc)
        col.append(imageBig)
        col.append(showTitle);
        row.append(col);
        container.append(row);
    }
  }
  return {
    displayData
  };
})();

const mainModule = ((data, ui) => {
  const searchBtn = document.querySelector("#searchBtn");

  dataModule.sendRequest(function (response) {
      uiModule.displayData(response)
      
  });

})(dataModule, uiModule);
