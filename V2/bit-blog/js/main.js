const main = ((data, ui) => {
    const $homeBtn = $("#homeBtn");
    const $aboutBtn = $("#aboutBtn");
    const $authorsBtn = $("#authorsBtn");
    const $singlePostTitleBtn = $(".singlePostTitle");
    let postList = [];
    let authorList = [];

    const initApp = () => {
        ui.updateFooter();

        data.fetchPosts((myPostList) => {
            console.log(myPostList)
            ui.displayPostList(myPostList);
        });
        
        const goToAuthorList = () => {
            data.fetchAuthors((myAuthorList) => {
                console.log(myAuthorList)
                ui.displayAuthorList(myAuthorList);
            });
        };
        
        const renderSinglePost = (event) => {
            event.preventDefault();
            const postId = event.target.getAttribute('data-id');
            
            data.fetchSinglePost(postId, (singlePost) => {
                ui.displaySinglePost(singlePost)
                console.log(singlePost);
            });
        };

        const renderSingleAuthor = (event) => {
            event.preventDefault();
            const authorId = event.target.getAttribute("data-id");

            data.fetchSingleAuthor(authorId, (singleAuthor) => {
                ui.displaySingleAuthor(singleAuthor)
                console.log(singleAuthor)
            })
        }

        $(document).on("click", ".singlePostTitle", renderSinglePost);
        $(document).on("click", ".singleAuthorTitle", renderSingleAuthor);
        $homeBtn.on("click", ui.displayPostList)
        $aboutBtn.on("click", ui.displayAboutPage);
      
        $authorsBtn.on("click", goToAuthorList)
    }

    return {
        initApp
    }
})(dataModule, uiModule)