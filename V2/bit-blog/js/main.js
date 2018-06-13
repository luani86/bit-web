const main = ((data, ui) => {
    const $homeBtn = $("#homeBtn");
    const $aboutBtn = $("#aboutBtn");
    const $authorsBtn = $("#authorsBtn");
    const $singlePostTitleBtn = $(".singlePostTitle");
    let postList = [];
    let authorList = [];

    ui.updateFooter();

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
// const renderSinglePost = (post) => {
//     localStorage.setItem("postId", post.id)
//     data.fetchSinglePost((singlePost) => {
//         console.log(singlePost);
//     })
// }


    data.fetchSinglePost((singlePost) => {
        console.log(singlePost);
    })

    
// $singlePostTitleBtn.on("click", renderSinglePost)
$authorsBtn.on("click", goToAuthorList)
    }

    return {
        initApp
    }
})(dataModule, uiModule)