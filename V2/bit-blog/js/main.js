const main = ((data, ui) => {
    const $aboutBtn = $("#aboutBtn")
    let postList = [];

    const setEventListeners = () => {
               $aboutBtn.on("click", ui.displayAboutPage)
    }

    const initApp = () => {
        setEventListeners()
        data.fetchPosts((myPostList) => {
            console.log(myPostList)});

        data.fetchAuthors((myAuthorList) => {
            console.log(myAuthorList)
           });
    }

    return {initApp}
})(dataModule, uiModule)