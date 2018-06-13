const main = ((data, ui) => {
    const $homeBtn = $("#homeBtn");
    const $aboutBtn = $("#aboutBtn");
    const $authorsBtn = $("#authorsBtn");
    const $singlePostTitleBtn = $(".singlePostTitle");
    let postList = [];
    let authorList = [];

    ui.updateFooter();

    const initApp = () => {
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
 

            data.fetchSinglePost((singlePost) => {
                // localStorage.setItem("postId", post.id)
                ui.displaySinglePost(singlePost)
                console.log(singlePost);
            })
        

        // data.fetchSinglePost((singlePost) => {
        //     console.log(singlePost);
        // })

        const test = () => {
            console.log("hdhdhdh")
        }

        $homeBtn.on("click", ui.displayPostList)
        $aboutBtn.on("click", ui.displayAboutPage);
      
        $authorsBtn.on("click", goToAuthorList)
    }

    return {
        initApp
    }
})(dataModule, uiModule)