const fetchPosts = (successHandler) => {
    let request = $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET"
    })
    request.done((response) => {
        console.log(response)
        const postList = response.results
        // successHandler(postList)
    })
}
fetchPosts()