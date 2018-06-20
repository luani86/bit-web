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
        constructor(id, name, username, imgUrl, email, phone, address, company) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.imgUrl = imgUrl;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.company = company;
        };
    };

    class Address {
        constructor(street, city, zipcode) {
            this.street = street;
            this.city = city;
            this.zipcode = zipcode;
        }
    }

    class Company {
        constructor(name, catchPhrase) {
            this.name = name;
            this.catchPhrase = catchPhrase;
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
            // console.log(authorsData)
            const myAuthorList = createAuthorList(authorsData);
            console.log(myAuthorList)
            successHandler(myAuthorList);
        })
    }

    const createAuthorList = (authors) => {
        return authors.map((author) => {
            const { id, name, username, imgUrl, email, phone, company, address } = author

            const companyInstance = new Company(company.name, company.catchPhrase);
            const addressInstance = new Address(address.street, address.city, address.zipcode);

            return new Author(id, name, username, imgUrl, email, phone, addressInstance, companyInstance)
        })
    }

    const fetchSinglePost = (postId, successHandler) => {
        let request = $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
            method: "GET"
        })
        request.done((response) => {
            const fetchedSinglePost = response;
            successHandler(fetchedSinglePost);
        })
    }

    const fetchSingleAuthor = (authorId, successHandler) => {
        let request = $.ajax({
            url: `https://jsonplaceholder.typicode.com/users/${authorId}`,
            method: "GET"
        })
        request.done((author) => successHandler(author))
    }

    const fetchPostsBySingleAuthor = (userId, post, successHandler) => {
        let request = $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
            method: "GET"
        })
        request.done((response) => {
            const postsBySingleAuthor = response;
            successHandler(postsBySingleAuthor)
        })
    }

    const createNewPost = (post, successHandler) => {

        console.log(JSON.stringify(post));
        
        let request = $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "POST",
            body: JSON.stringify(post)
        })
        request.done((response) => {
            post.id = Math.floor(Math.random() * 10000000);
            successHandler(post);
        })
    }

    return {
        fetchPosts,
        fetchAuthors,
        fetchSinglePost,
        fetchSingleAuthor,
        fetchPostsBySingleAuthor,
        createNewPost
    }
})()