const main = ((data, ui) => {
    const $homeBtn = $("#homeBtn");
    const $aboutBtn = $("#aboutBtn");
    const $authorsBtn = $("#authorsBtn");
    const $newPostBtn = $("#newPostBtn");
    const $singlePostTitleBtn = $(".singlePostTitle");
    const $allAuthorsDirectionBtn = $("#allAuthorsDirectionBtn");
    const $newPostSubmitBtn = $("#newPostSubmitBtn");
    const $newPostResetBtn = $("#newPostResetBtn");
    const $submitNewPostForm = $("#submitNewPostForm")
    const $input_text = $("#input_text");
    const $textarea2 = $("#textarea2");
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

        const submitNewPost = (event) => {
            event.preventDefault()
            console.log("jjgjg");
            // $input_text.val("");
            // $textarea2.val("");
            $submitNewPostForm.submit();
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
        $newPostBtn.on("click", ui.displayNewPostPage);
        $(document).on("click", "#newPostSubmitBtn", submitNewPost);

    }

    return {
        initApp
    }
})(dataModule, uiModule)