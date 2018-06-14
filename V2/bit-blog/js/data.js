const dataModule = (() => {
    class Post {
        constructor(title, body, id, userId) {
            this.title = title;
            this.body = body;
            this.id = id;
            this.userId = userId;
        }
    }

    class Author {
        constructor(id, name, username, imgUrl, email, phone, city, street, zipCode, companyName, companyCatchFrase) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.imgUrl = imgUrl;
            this.email = email;
            this.phone = phone;
            this.city = city;
            this.street = street;
            this.zipCode = zipCode;
            this.companyName = companyName;
            this.companyCatchFrase = companyCatchFrase;
        }
    }
    
    const fetchPosts = (successHandler) => {
        let request = $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET"
        })
        request.done((response) => {
            const postsData = response;
            const myPostList = createPostList(postsData);
            // console.log(myPostList);
            successHandler(myPostList);
        })
    }

    const createPostList = (posts) => {
        return posts.map((post) => {
            const { title, body, id, userId } = post;
            return new Post(title, body, id, userId);
        })
    }

    fetchAuthors = (successHandler) => {
        let request = $.ajax({
            url: "https://jsonplaceholder.typicode.com/users",
            method: "GET"
        })
        request.done((response) => {
            const authorsData = response;
            const myAuthorList = createAuthorList(authorsData)
            successHandler(myAuthorList);
        })
    }

    const createAuthorList = (authors) => {
        return authors.map((author) => {
            const {id, name, username, imgUrl, email, phone, city, street, zipCode, companyName, companyCatchFrase} = author
            return new Author(id, name, username, imgUrl, email, phone, city, street, zipCode, companyName, companyCatchFrase)
        })
    }

    const fetchSinglePost = (postId, successHandler) => {
        let request = $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            method: "GET"
        })
        request.done((response) => {
            const fetchedSinglePost = response
            successHandler(fetchedSinglePost)
        })
    }
    
    return {
        fetchPosts,
        fetchAuthors,
        fetchSinglePost
     }
})()