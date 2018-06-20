const uiModule = (() => {
    const test1 = () => {
        console.log("jjj")
    }
    const $container = $(".container");
    const $footerText = $("#footerText");
    const $singlePostTitleBtn = $(".singlePostTitle");
    const $searchBarForPosts = $("#searchBarForPosts");
    const $searchBarForAuthors = $("#searchBarForAuthors");
    const $searchIconPosts = $("#searchIconPosts");
    const $searchIconAuthors = $("#searchIconAuthors");
    const $searchInputPosts = $("#searchInputPosts");
    const $searchInputAuthors = $("#searchInputAuthors");

    const $submitNewPostForm = $("#submitNewPostForm")


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
        if (currentSecondPlace < 10) {
            currentSecondPlace = `0${currentSecond}`
        } else {
            currentSecondPlace = currentSecond
        }
        if (currentMinutePlace < 10) {
            currentMinutePlace = `0${currentMinute}`
        } else {
            currentMinutePlace = currentMinute
        }
        if (currentHourPlace < 10) {
            currentHourPlace = `0${currentHour}`
        } else {
            currentHourPlace = currentHour
        }
        if (currentDayPlace < 10) {
            currentDayPlace = `0${currentDay}`
        } else {
            currentDayPlace = currentDay
        }
        if (currentMonthPlace < 10) {
            currentMonthPlace = `0${currentMonth}`
        } else {
            currentMonthPlace = currentMonth
        }

        $footerText.html(`<b>Date: ${currentDayPlace}.${currentMonthPlace}.${currentYear}. Time: ${currentHourPlace}: ${currentMinutePlace}: ${currentSecondPlace}<b>`)
    }
    const updateFooter = () => { setInterval(updateDate, 1000) };

    const createPostListItem = (post) => {
        const $postListItem = $(`
        <br/>
            <p class="postListItem">${post.body}...
            <hr/>
        `)
        $singlePostTitleBtn.on("click", test1)
        return $postListItem;
    }

    const displayPostList = (postList) => {
        $searchIconAuthors.hide()
        $searchBarForAuthors.hide()
        // $searchBarForPosts.show()
        $container.empty();
        const $postListTitle = $(`
    <h1>POSTS</h1>
    `)
        $container.append($postListTitle);
        for (let i = 0; i < postList.length; i++) {
            const post = postList[i];
            const postListItem = createPostListItem(post)
            $container.append(`<h5 class="singlePostTitle"><a href="#" data-id='${post.id}' data-userid='${post.userId}'>${post.title}</h5>`)
            $container.append(postListItem);
        }
        console.log(postList)
    }


    const displaySinglePost = (post, author) => {
        $searchIconAuthors.hide()
        $searchIconPosts.hide()
        $searchBarForPosts.hide()
        $searchBarForAuthors.hide()
        $container.empty();
        const $singlePost = (`
        <span id="allPostsDirectionBtn" class="directionBtn">&#9664; All posts</span>
        <h1>${post.title.slice(0, 20).toUpperCase()}</h1>
        <h5>Author: <a class="authorName" data-id="${post.userId}" href="#"> ${author.name}</a></h5>
        <p>${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body} ${post.body}</p>
        <hr/>
        <h5>More posts from the same author:</h5>
        `)
        $container.append($singlePost);
    }

    const displayMorePostsFromAuthor = (postsBySingleAuthor, post) => {
        let $morePostsList = $("<ul></ul>")
        for (let i = 0; i < postsBySingleAuthor.length; i++) {
            const $morePostsListItem = $(`
                <li><a href="#" class="singlePostTitle" data-id="${postsBySingleAuthor[i].id}">${postsBySingleAuthor[i].title.slice(0, 20).toUpperCase()}</a></li>
            `)
            $morePostsList.append($morePostsListItem);
            if (post.id === postsBySingleAuthor[i].id) {
                $morePostsListItem.empty()
            }
        }
        $container.append($morePostsList);
        console.log(postsBySingleAuthor)
    }

    const displayAuthorList = (authorList, postList) => {
        $searchIconPosts.hide()
        $searchIconAuthors.show()
        $searchBarForPosts.hide()
        // $searchBarForAuthors.show()
        let authorCounter = 0;
        $container.empty();
        for (let i = 0; i < authorList.length; i++) {
            let postsByAuthorCounter = 0;
            const author = authorList[i];
            for (let j = 0; j < postList.length; j++) {
                if (postList[j].userId === author.id) {
                    postsByAuthorCounter += 1;
                }
            }
            const $authorListItem = $(`<h5><a class="singleAuthorTitle" data-id="${author.id}" href="#">${author.name} (${postsByAuthorCounter} posts)</a></h5> <hr/>`)
            authorCounter += 1;

            $container.append($authorListItem)
        }
        const $authorListTitle = (`
        <h1>AUTHORS (${authorCounter})</h1>
        `)
        $container.prepend($authorListTitle);
    }

    const displaySingleAuthor = (author) => {
        $searchIconAuthors.hide()
        $searchIconPosts.hide()
        $searchBarForPosts.hide()
        $searchBarForAuthors.hide()
        $searchIconPosts.hide();
        $container.empty();
        const $singleAuthor = $(`
        <span id="allAuthorsDirectionBtn" class="directionBtn">&#9664; All authors</span>
        <h1>${author.name}</h1>
        <div class="row">
        <div class="col s6">
        <img src="http://via.placeholder.com/200x200" alt="">
        </div>
        <div class="col s6">
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
        $searchIconAuthors.hide()
        $searchIconPosts.hide()
        $searchBarForPosts.hide();
        $searchBarForAuthors.hide()
        $searchIconPosts.hide();
        $container.text("");
        const $aboutPage = $(`
        <div class="aboutParagraph">
        <h1>ABOUT</h1>
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

    const displayNewPostPage = () => {
        $searchIconAuthors.hide()
        $searchIconPosts.hide()
        $searchBarForPosts.hide();
        $searchBarForAuthors.hide()
        $searchIconPosts.hide();
        $container.text("");
        const $newPost = (`
        <h1>NEW POST</h1>
    <div class="row">
    <form id="submitNewPostForm" class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="input_text" type="text" data-length="100">
          <label for="input_text">Post Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="textarea2" class="materialize-textarea" data-length="1000"></textarea>
          <label for="textarea2">Post Content</label>
        </div>
      </div>
    </form>
  </div>

  <button id="newPostResetBtn" class="btn waves-effect waves-light" type="reset" name="action">Cancel
</button>

  <button id="newPostSubmitBtn" class="btn waves-effect waves-light" type="submit" name="action">Submit
</button>
        `)
        $(document).ready(function () {
            $('input#input_text, textarea#textarea2').characterCounter();
        });
        $container.append($newPost)
    }

    const collectNewPostData = () => {
        const $input_text = $("#input_text");
        const $textarea2 = $("#textarea2");
        const newPost = {
            title: $input_text.val(),
            body: $textarea2.val(),
            userId: Math.floor(Math.random()*10) + 1
        }
        return newPost;
    }

    const displayCanceledNewPost = () => {
        const $input_text = $("#input_text");
        const $textarea2 = $("#textarea2");
        alert("Are you sure you want to cancel new post?")
        $input_text.val("");
        $textarea2.val("");
    }

    const displaySearchBar = () => {
        $searchBarForPosts.show();
        $searchIconPosts.hide();
    }

    const filterPosts = (postList) => {
        $searchBarForPosts.show();
        let searchValuePosts = $searchInputPosts.val();
        let filteredPosts = [];
            for(let i = 0; i < postList.length; i++) {
                let post = postList[i];
                if(post.title.indexOf(searchValuePosts) > -1) {
                    filteredPosts.push(post)
                }
            }
         displayPostList(filteredPosts)
         if(filteredPosts.length < 1) {
             displayEmptyPage()
         }
    }

    const filterAuthors = (authorList, postList) => {
        let searchValueAuthors = $searchInputAuthors.val();
        let filteredAuthors = [];
        for(let i = 0; i < authorList.length; i++) {
            let author = authorList[i];
            if(author.name.indexOf(searchValueAuthors) > -1) {
                filteredAuthors.push(author)
            }
        }
        displayAuthorList(filteredAuthors, postList)
        if(filteredAuthors.length < 1) {
            displayEmptyPage()
        }
    }

    const displaySearchBarPosts = () => {
        $searchIconPosts.hide();
        $searchBarForPosts.show();
    }
    const displaySearchBarAuthors = () => {
        $searchIconAuthors.hide();
        $searchBarForAuthors.show();
    }


    const displayEmptyPage = () => {
        $container.empty()
        const $emptyPage = $(`
        <div class="emptyPageMessage">
        <i class="large material-icons">sentiment_dissatisfied</i>
        <br/>
        <p>
        We couldn't find any words matching your search.
        </p>
        `)
        $container.append($emptyPage);
    }

    return {
        updateFooter,
        displayPostList,
        displaySinglePost,
        displayAuthorList,
        displaySingleAuthor,
        displayMorePostsFromAuthor,
        displayAboutPage,
        displayNewPostPage,
        collectNewPostData,
        displayCanceledNewPost,
        displaySearchBar,
        filterPosts,
        filterAuthors,
        displaySearchBarPosts,
        displaySearchBarAuthors
    }
})()