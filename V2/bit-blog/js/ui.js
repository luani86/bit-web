const uiModule = (() => {
    const test1 = () => {
        console.log("jjj")
    }
    const $container = $(".container");
    const $footerText = $("#footerText");
    $singlePostTitleBtn = $(".singlePostTitle")
    const updateDate = () => {
        $footerText.html(`© Date: ${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()} Time: ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()} Copyright Text`)
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
            $container.append(`<h3><a class="singlePostTitle" href="#" data-id='${post.id}'>Title ${post.id}</h3>`)
            $container.append(postListItem)
            postList.push(postListItem)
        }
    }

    const displaySinglePost = (post) => {
        $container.empty();
        const $singlePost = (`
        <h1>${post.title}</h1>
        <h4 class="authorName"><a href="#">Author Name</a></h4>
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
            const $authorListItem = $(`<h3><a class="singleAuthorTitle" data-id="${author.id}" href="#">${author.name} (number - posts)</a></h3> <hr/>`)
            authorCounter += 1;
            $container.append($authorListItem)
        }
        const $authorListTitle = (`
        <h1>AUTHORS (${authorCounter})</h1>
        `)
        $container.prepend($authorListTitle);
    }

    const displaySingleAuthor = (author) => {
        const $row = (`<div class="row"></div>`)
        const $singleAuthor = (`
        <h1>Single Author</h1>
        <div class="col s6">
        <img src="http://via.placeholder.com/150x150" alt="">
        </div>
        <div class="col s6">
        <h3>${author.name}</h3>
        <p>username: ${author.username}</p>
        <p>email: ${author.email}</p>
        <p>phone: ${author.phone}</p>
        </div>
        <hr/>
        <div class="col s6">
        <h3>Address</h3>
        <p>street: ${author.street}</p>
        <p>city: ${author.city}</p>
        <p>zipcode: ${author.zipCode}</p>
        </div>
        <div class="col s6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.638064199868!
        2d28.98380661564024!3d41.0331737258409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m
        2!1s0x14cab7634272b4ff%3A0xbe287f8d04f00308!2zQmHFn2t1cnQgU2suLCBCZXlvxJ9sdS_EsHN0YW5
        idWwsINCi0YPRgNGB0LrQsA!5e0!3m2!1ssr!2srs!4v1528905036151" width="150" height="300" f
        rameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <hr/>
        <div class="col s6 offset-s6">
        <h3>Company/h3>
        <p>name: ${author.companyName}</p>
        <p>slogan: ${author.companyCatchFrase}</p>
        </div>
        `)
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