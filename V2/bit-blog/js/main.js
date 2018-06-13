const main = ((data, ui) => {
    let postList = [];

    const initApp = () => {
        data.fetchPosts((fetchedPosts) => {
            ui.displayPostList(postList)});

        data.fetchAuthors((fetchedAuthors) => {
           });
    }

    return {initApp}
})(dataModule, uiModule)