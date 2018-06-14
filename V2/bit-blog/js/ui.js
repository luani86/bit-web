const uiModule = (() => {
    const test1 = () => {
        console.log("jjj")
    }
    const $container = $(".container");
    const $footerText = $("#footerText");
    $singlePostTitleBtn = $(".singlePostTitle")
    const updateDate = () => {
        $footerText.html(`© Copyright Text <br> Date: ${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}. Time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`)
    }
    const updateFooter = () => {setInterval(updateDate, 1000)}
    const createPostListItem = (post) => {
        const $postListItem = $(`
        <br/>
            <p class="postListItem">${post.body.slice(0, 50)}...
            <hr/>
        `)
        $singlePostTitleBtn.on("click", test1)
        return $postListItem;
    }

    const displayPostList = (postList) => {
        $container.empty();
        const $postListTitle = $(`
    <h1>POSTS</h1>
    `)
        $container.append($postListTitle);
        for (let i = 0; i < postList.length; i++) {
            const post = postList[i];
            const postListItem = createPostListItem(post)
            $container.append(`<h5 class="singlePostTitle"><a href="#" data-id='${post.id}'>Title ${post.id}</h5>`)
            $container.append(postListItem)
            postList.push(postListItem)
        }
    }

    const displaySinglePost = (post) => {
        $container.empty();
        const $singlePost = (`
        <h1>${post.title}</h1>
        <h5><a class="authorName" data-id="${post.userId}" href="#">Author Name</a></h5>
        <p>${post.body}</p>
        <hr/>
        <h4>3 more posts from the same author</h4>
        <ul>
        <li>${post.title}</li>
        <li>${post.title}</li>
        <li>${post.title}</li>
        </ul>
        `)
        $container.append($singlePost)
    }

    const displayAuthorList = (authorList) => {
        let authorCounter = 0;
        $container.empty();
        for (let i = 0; i < authorList.length; i++) {
            const author = authorList[i];
            const $authorListItem = $(`<h5><a class="singleAuthorTitle" data-id="${author.id}" href="#">${author.name} (number - posts)</a></h5> <hr/>`)
            authorCounter += 1;
            $container.append($authorListItem)
        }
        const $authorListTitle = (`
        <h1>AUTHORS (${authorCounter})</h1>
        `)
        $container.prepend($authorListTitle);
    }

    const displaySingleAuthor = (author) => {
        $container.empty();
        const $singleAuthor = $(`
        <span id="allAuthorsDirectionBtn" class="directionBtn">&#9664; All authors</span>
        <h1>Single Author</h1>
        <div class="row">
        <div class="col s6">
        <img src="http://via.placeholder.com/200x200" alt="">
        </div>
        <div class="col s6">
        <h3 class="authorNameSingleAuthorPage">${author.name}</h3>
        <p>username: ${author.username}</p>
        <p>email: ${author.email}</p>
        <p>phone: ${author.phone}</p>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col s6">
        <h3>Address</h3>
        <p>street: ${author.address.street}</p>
        <p>city: ${author.address.city}</p>
        <p>zipcode: ${author.address.zipcode}</p>
        </div>
        <div class="col s6">
        <iframe width="500" height="300"
            sandbox="allow-scripts allow-same-origin"
            layout="responsive"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDG9YXIhKBhqclZizcSzJ0ROiE0qgVfwzI&q=${author.address.street}">
        </iframe>
        </div>
        </div>
        <hr/>
        <div class="row">
        <div class="col s6">
        <h3>Company</h3>
        <p>name: ${author.company.name}</p>
        <p>slogan: ${author.company.catchPhrase}</p>
        </div>
        </div>
        `)
        $container.append($singleAuthor);
    }

    const displayAboutPage = () => {
        $container.text("");
        const $aboutPage = $(`
        <div class="aboutParagraph">
        <h2>ABOUT</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quaerat dolorum et q
        uo saepe inventore distinctio enim iste temporibus, minus sint molestiae ab velit, al
        iquam explicabo obcaecati reiciendis. Ea asperiores aut beatae commodi rerum exercita
        tionem accusantium ducimus. Laboriosam hic, tenetur quas consequatur a reiciendis ear
        um illo eum perspiciatis explicabo reprehenderit id quisquam aliquid non animi omnis 
        obcaecati aliquam. Libero quo dolorum dolor enim illum, dolores nemo consequuntur. Eo
        s ducimus eligendi mollitia voluptatibus repudiandae ab velit! Harum, doloremque opti
        o aliquam ratione veniam, dignissimos numquam reiciendis, quo rem consectetur hic eli
        gendi aspernatur voluptate? Quo minima, doloribus laudantium, et, corrupti distinctio
         cum vel dolorum saepe quidem labore optio? Consequuntur hic laboriosam modi sed, arc
         hitecto provident molestiae quam eveniet voluptas optio voluptate illo obcaecati ips
         am, velit atque quibusdam voluptatum reprehenderit excepturi esse, blanditiis id! Pe
        s ducimus eligendi mollitia voluptatibus repudiandae ab velit! Harum, doloremque opti
        o aliquam ratione veniam, dignissimos numquam reiciendis, quo rem consectetur hic eli
        gendi aspernatur voluptate? Quo minima, doloribus laudantium, et, corrupti distinctio
         cum vel dolorum saepe quidem labore optio? Consequuntur hic laboriosam modi sed, arc
         hitecto provident molestiae quam eveniet voluptas optio voluptate illo obcaecati ips
         am, velit atque quibusdam voluptatum reprehenderit excepturi esse, blanditiis id! Pe
        o aliquam ratione veniam, dignissimos numquam reiciendis, quo rem consectetur hic eli
        gendi aspernatur voluptate? Quo minima, doloribus laudantium, et, corrupti distinctio
         cum vel dolorum saepe quidem labore optio? Consequuntur hic laboriosam modi sed, arc
         hitecto provident molestiae quam eveniet voluptas optio voluptate illo obcaecati ips
         am, velit atque quibusdam voluptatum reprehenderit excepturi esse, blanditiis id! Pe
        s ducimus eligendi mollitia voluptatibus repudiandae ab velit! Harum, doloremque opti
        o aliquam ratione veniam, dignissimos numquam reiciendis, quo rem consectetur hic eli
        gendi aspernatur voluptate? Quo minima, doloribus laudantium, et, corrupti distinctio
         cum vel dolorum saepe quidem labore optio? Consequuntur hic laboriosam modi sed, arc
         hitecto provident molestiae quam eveniet voluptas optio voluptate illo obcaecati ips
         am, velit atque quibusdam voluptatum reprehenderit excepturi esse, blanditiis id! Pe
         </p>
        </div>

        <div class="ourStoryParagraph">
        <h2>OUR STORY</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic quaerat dolorum et q
        uo saepe inventore distinctio enim iste temporibus, minus sint molestiae ab velit, al
        iquam explicabo obcaecati reiciendis. Ea asperiores aut beatae commodi rerum exercita
        tionem accusantium ducimus. Laboriosam hic, tenetur quas consequatur a reiciendis ear
        um illo eum perspiciatis explicabo reprehenderit id quisquam aliquid non animi omnis 
        obcaecati aliquam. Libero quo dolorum dolor enim illum, dolores nemo consequuntur. Eo
        s ducimus eligendi mollitia voluptatibus repudiandae ab velit! Harum, doloremque opti
        o aliquam ratione veniam, dignissimos numquam reiciendis, quo rem consectetur hic eli
        gendi aspernatur voluptate? Quo minima, doloribus laudantium, et, corrupti distinctio
         cum vel dolorum saepe quidem labore optio? Consequuntur hic laboriosam modi sed, arc
         hitecto provident molestiae quam eveniet voluptas optio voluptate illo obcaecati ips
         am, velit atque quibusdam voluptatum reprehenderit excepturi esse, blanditiis id! Pe
         </p>
         </div>
        `)
        $container.append($aboutPage);
    }
    return {
        updateFooter,
        displayPostList,
        displaySinglePost,
        displayAuthorList,
        displaySingleAuthor,
        displayAboutPage
    }
})()