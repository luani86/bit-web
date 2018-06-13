const uiModule = (() => {
    const $container = $(".container");

    const createPostListItem = (post) => {
        const $postListItem = $(`
        <h3>${post.name}</h3>
        <br/>
            <p>${post.body.slice(0, 50)}...
            <hr/>
        `)
        return $postListItem;
    }

    const displayPostList = (postList) => {
        const $postListTitle = $(`
    <h1>POSTS</h1>
    `)
        $container.append($postListTitle);
        for (let i = 0; i < postList.length; i++) {
            const postListItem = createPostListItem(post)
            $container.append(postListItem)
            postList.push(postListItem)
        }
    }
    return {
        displayPostList
    }
})()