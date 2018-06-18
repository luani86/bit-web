const main = ((data, ui) => {
    const $homeBtn = $("#homeBtn");
    const $aboutBtn = $("#aboutBtn");
    const $authorsBtn = $("#authorsBtn");
    const $singlePostTitleBtn = $(".singlePostTitle");
    const $allAuthorsDirectionBtn = $("#allAuthorsDirectionBtn");
    let postList = [];
    let authorList = [];

    const initApp = () => {
        ui.updateFooter();

        data.fetchPosts((myPostList) => {
            
            ui.displayPostList(myPostList);
        });
        
        const goToAuthorList = () => {
            data.fetchAuthors((myAuthorList) => {
                data.fetchPosts((myPostList) => {
                    ui.displayAuthorList(myAuthorList, myPostList);
                })
            });
        };

        const goToPostList = () => {
            data.fetchPosts((myPostList) => {

                ui.displayPostList(myPostList);
            });
        };
        
        const renderSinglePost = (event) => {
            event.preventDefault();
            const postId = event.target.getAttribute('data-id');
            
            data.fetchSinglePost(postId, (singlePost) => {
                const authorId = singlePost.userId;

                data.fetchSingleAuthor(authorId, (singleAuthor) => {
                    data.fetchPostsBySingleAuthor(authorId, singlePost, (postsBySingleAuthor) => {
                        ui.displaySinglePost(singlePost, singleAuthor)
                        ui.displayMorePostsFromAuthor(postsBySingleAuthor, singlePost)
                    })
                })
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

        const renderMorePostsFromAuthor = (userId) => {
            data.fetchPostsBySingleAuthor(userId, (postsBySingleAuthor) => {
                ui.displayMorePostsFromAuthor(postsBySingleAuthor)
            })
        }
    
        // $(document).on("click", ".singlePostTitle", renderMorePostsFromAuthor)
        $(document).on("click", ".singlePostTitle", renderSinglePost);
        $(document).on("click", ".singleAuthorTitle", renderSingleAuthor);
        $(document).on("click", "#allAuthorsDirectionBtn", goToAuthorList);
        $(document).on("click", "#allPostsDirectionBtn", goToPostList);
        $(document).on("click", ".authorName", renderSingleAuthor);
        $homeBtn.on("click", ui.displayPostList)
        $aboutBtn.on("click", ui.displayAboutPage);
        $authorsBtn.on("click", goToAuthorList);
    }

    return {
        initApp
    }
})(dataModule, uiModule)