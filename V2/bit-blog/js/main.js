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
          
        

        // data.fetchSinglePost((singlePost) => {
        //     console.log(singlePost);
        // })

        const test = () => {
            console.log("hdhdhdh")
        }

        $(document).on("click", ".singlePostTitle", renderSinglePost);
        $homeBtn.on("click", ui.displayPostList)
        $aboutBtn.on("click", ui.displayAboutPage);
      
        $authorsBtn.on("click", goToAuthorList)
    }

    return {
        initApp
    }
})(dataModule, uiModule)