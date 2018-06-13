const uiModule = (() => {
    const $container = $(".container");

    const createPostListItem = (post) => {
        const $postListItem = $(`
        <br/>
            <p class="postListItem">${post.body.slice(0, 50)}...
            <hr/>
        `)
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
            $container.append(`<h3 class="singlePostTitle"><a href="#">Title ${i+1}</h3>`)
            $container.append(postListItem)
            postList.push(postListItem)
        }
    }

    const displaySinglePost = (post) => {
        const $singlePost = (`
        <h1>${post.title.toUppercase()}</h1>
        <h4>Author Name</h4>
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
            const $authorListItem = $(`<h3 class="singleAuthorTitle"><a href="#">${author.name} (number - posts)</a></h3> <hr/>`)
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
        <div class="col 6">
        <img src="http://via.placeholder.com/150x150" alt="">
        </div>

        <div>
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
        displayPostList,
        displaySinglePost,
        displayAuthorList,
        displayAboutPage
    }
})()