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
        displayAboutPage
    }
})()