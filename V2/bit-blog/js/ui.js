const uiModule = (() => {
    const test1 = () => {
        console.log("jjj")
    }
    const $container = $(".container");
    const $footerText = $("#footerText");
    const $singlePostTitleBtn = $(".singlePostTitle");

    const updateDate = () => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();
        const currentHour = new Date().getHours();
        const currentMinute = new Date().getMinutes();
        const currentSecond = new Date().getSeconds();

        let currentMonthPlace = currentMonth || `0${currentMonth}`
        let currentDayPlace = currentDay || `0${currentDay}`
        let currentHourPlace = currentHour || `0${currentHour}`
        let currentMinutePlace = currentMinute || `0${currentMinute}`
        let currentSecondPlace = currentSecond || `0${currentSecond}`
if(currentSecondPlace < 10) {
     currentSecondPlace = `0${currentSecond}`
} else {
    currentSecondPlace = currentSecond
}
if(currentMinutePlace < 10) {
     currentMinutePlace = `0${currentMinute}`
} else {
    currentMinutePlace = currentMinute
}
if(currentHourPlace < 10) {
     currentHourPlace = `0${currentHour}`
} else {
    currentHourPlace = currentHour
}
if(currentDayPlace < 10) {
     currentDayPlace = `0${currentDay}`
} else {
    currentDayPlace = currentDay
}
if(currentMonthPlace < 10) {
     currentMonthPlace = `0${currentMonth}`
} else {
    currentMonthPlace = currentMonth
}

        $footerText.html(`<b>Date: ${currentDayPlace}.${currentMonthPlace}.${currentYear}. Time: ${currentHourPlace}: ${currentMinutePlace}: ${currentSecondPlace}<b>`)
    }
    const updateFooter = () => {setInterval(updateDate, 1000)};

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
            $container.append(`<h5 class="singlePostTitle"><a href="#" data-id='${post.id}' data-userid='${post.userId}'>Title ${post.id}</h5>`)
            $container.append(postListItem);
        }
    }

    const displaySinglePost = (post) => {
        $container.empty();
        const $singlePost = (`
        <span id="allPostsDirectionBtn" class="directionBtn">&#9664; All posts</span>
        <h1>${post.title.slice(0, 10)}</h1>
        <h5><a class="authorName" data-id="${post.userId}" href="#">Author Name</a></h5>
        <p>${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body}</p>
        <hr/>
        <h4>All posts from the same author</h4>
        `)
        $container.append($singlePost);
    }

    const displayMorePostsFromAuthor = (postsBySingleAuthor) => {
        let $morePostsList = $("<ul></ul>")
        for(let i = 0; i < postsBySingleAuthor.length; i++) {
            const $morePostsListItem = $(`
                <li><a href="#" class="singlePostTitle" data-id="${postsBySingleAuthor[i].id}">${postsBySingleAuthor[i].title}</a></li>
            `)
            $morePostsList.append($morePostsListItem);
        }
        $container.append($morePostsList);
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

    displayAuthorName = (author) => {
        return author.name();
    }
    return {
        updateFooter,
        displayPostList,
        displaySinglePost,
        displayAuthorList,
        displaySingleAuthor,
        displayMorePostsFromAuthor,
        displayAboutPage
    }
})()