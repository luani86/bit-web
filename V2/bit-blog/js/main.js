const main = ((data, ui) => {
    const $homeBtn = $("#homeBtn");
    const $aboutBtn = $("#aboutBtn");
    const $authorsBtn = $("#authorsBtn");
    let postList = [];
    let authorList = [];

    const setEventListeners = () => {
        $homeBtn.on("click", ui.displayPostList)
        $aboutBtn.on("click", ui.displayAboutPage);
    }

    const initApp = () => {
        setEventListeners()
        data.fetchPosts((myPostList) => {
            console.log(myPostList)
            ui.displayPostList(myPostList);
        });
const goToAuthorList = () => {
    data.fetchAuthors((myAuthorList) => {
        console.log(myAuthorList)
        ui.displayAuthorList(myAuthorList);
    });
}
$authorsBtn.on("click", goToAuthorList)
    }

    return {
        initApp
    }
})(dataModule, uiModule)