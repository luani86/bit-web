const $container = $(".container");
const createPostList = (postList) => {
    for(let i = 0; i < postList.length; i++) {
        const postBody = postListItem.body;
        const $postListItem = $(`
    <h3>${postListItem.name}</h3>
    <br/>
        <p>${postBody.slice(0, 50)}...
        <hr/>
    `)
    }
}