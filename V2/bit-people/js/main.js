//--------DATA MODULE-------------
const dataModule = (() => {

    class Person {
        constructor(name, surname, email, phone, photo, avatar, birthday, gender) {
            this.name = name
            this.surname = surname
            this.email = email
            this.phone = phone
            this.photo = photo
            this.avatar = avatar
            this.birthday = `${new Date(birthday).getDate()}.${new Date(birthday).getMonth() - 1}.${new Date(birthday).getFullYear()}`
            this.gender = gender
        }
        formatName() {
            return this.name[0].toUpperCase() + this.name.slice(1);
        }
        formatSurname() {
            return this.surname[0].toUpperCase() + this.surname.slice(1);
        }
        formatMail() {
            let splittedMail = this.email.split("@");
            let mailFirstPart = splittedMail[0];
            let formatedFirstPartMail = "";
            for (let i = 0; i < mailFirstPart.length; i++) {
                formatedFirstPartMail = `${mailFirstPart[0]}${mailFirstPart[1]}${mailFirstPart[2]}...${mailFirstPart[mailFirstPart.length - 3]}${mailFirstPart[mailFirstPart.length - 2]}${mailFirstPart[mailFirstPart.length - 1]}`;
            }
            let formatedSecondPartMail = `@${splittedMail[1]}`
            let formatedMail = `${formatedFirstPartMail}${formatedSecondPartMail}`
            return formatedMail;
        }
    }

    fetchUsers = (successHandlerGrid) => {
        let request = $.ajax({
            url: "https://randomuser.me/api/?results=15",
            method: "GET"
        });

        request.done((response) => {

            const usersData = response.results
            const myUsersList = []

            for (let i = 0; i < usersData.length; i++) {
                const { name, email, phone, picture } = usersData[i];
                const userDatObj = usersData[i];
                const user = new Person(userDatObj.name.first, userDatObj.name.last, userDatObj.email, userDatObj.phone, userDatObj.picture.large, userDatObj.picture.thumbnail, userDatObj.dob, userDatObj.gender)
                myUsersList.push(user)
            }

            console.log("response", response);
            successHandlerGrid(myUsersList)
        });
    }

    return {
        fetchUsers
    }
})();
//--------------UI MODULE-------------------------------------
const uiModule = (() => {
    const body = $("body");
    const $container = $(".container");
    const $row = $(".row");
    const $searchBar = $(".searchBar")
    const $gridContent = $("#gridContent");
    const $listContent = $("#listContent");
    const $gridBtn = $("#gridBtn");
    const $listBtn = $("#listBtn");
    const $aboutBtn = $("#aboutBtn");

    //------------------------------Create Card Item----------------------------
    const createCardItem = (person) => {
        const $cardItem = $(`
        <div class="col s4">
        <div class="card">
            <div class="card-image">
            <img src="${person.photo}">
            <span class="card-title">${person.formatName()} ${person.formatSurname()}</span>
            </div>
            <div class="card-content">
            <p>
            Email: ${person.formatMail()} </br>
            Phone: ${person.phone}
            </p>
            </div>
        </div>
        </div>
    `)
        if (person.gender === "female") {
            $cardItem.find(".card-content").css("background-color", "#ffebee")
        }
        return $cardItem;
    }
    //------------------------------Create List Item----------------------------
    const createListItem = (person) => {
        const $listItem = $(`
        <li class="collection-item avatar">
            <div class="listContentDiv">
                <img src="${person.avatar}" alt="" class="circle">
                <span class="title">${person.name} ${person.surname}</span>
                <p>
                    <i class="tiny material-icons">email</i> ${person.formatMail()}<br>
                    <i class="tiny material-icons">cake</i> ${person.birthday}
                </p>
            </div>
        </li>
        `)
        if (person.gender === "female") {
            $listItem.css("background-color", "#ffebee")
        }
        return $listItem;
    }

    //------------------------------Display List----------------------------
    const displayDataList = (personList) => {
        $gridBtn.show();
        $listBtn.hide();

        const $list = $(`<ul id="listContent" class="collection"></ul>`);

        for (let i = 0; i < personList.length; i++) {
            const person = personList[i]
            const $listItem = createListItem(person)

            $list.append($listItem)
        }
        $container.append($list)
    }

    //------------------------------Display Grid----------------------------
    const displayDataGrid = (personList) => {
        $gridBtn.hide();
        $listBtn.show();

        const $grid = $('<div id="gridContent" class="row"></div>');

        for (let i = 0; i < personList.length; i++) {
            const person = personList[i]
            const $card = createCardItem(person)

            $grid.append($card)
        }

        $container.append($grid)
    }

    //-----------Display Loading Page---------------
    const displayLoadingPage = () => {
        $(document).ready(() => {
            let $loadingPage = $(`
            <h1>WAIT A MINUTE!</h1>
            <div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
</div>
            `)

            $container.append($loadingPage)

            $(document).ajaxStart(() => {
                $($loadingPage).css("display", "block");
            });
            $(document).ajaxComplete(() => {
                $($loadingPage).css("display", "none");
            });
            // $("#refreshBtn").click(() => {
            //     $("#txt").load("index.html")
            // });
        })
    }

    //-----------------Display About Page (not working)--------------
    const displayAboutPage = () => {
        $container.text("");
        const $aboutPage = $(`
        <div class="aboutParagraph">
        <h1>About</h1>
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
         rspiciatis accusamus enim dolorem facere animi corporis atque ipsa, eius odit illum 
         tenetur numquam. In placeat itaque corporis, iusto unde, voluptatibus commodi saepe 
         </p>
        </div>

        <div class="whatWeDoParagraph">
        <h3>What we do</h3>
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
         rspiciatis accusamus enim dolorem facere animi corporis atque ipsa, eius odit illum 
         tenetur numquam. In placeat itaque corporis, iusto unde, voluptatibus commodi saepe 
         </p>
         </div>
        `)
        $listBtn.hide();
        $gridBtn.hide();
        $gridContent.css("display", "none");
        $listContent.css("display", "none");
        $searchBar.css("display", "none");
        $container.append($aboutPage);
        $aboutBtn.html(`<a href="index.html">Home</a>`);

    }

    const displayEmptyPage = () => {
        const $emptyPage = $(`
        <div class="emptyPageMessage">
        <i class="large material-icons">sentiment_dissatisfied</i>
        <br/>
        <p>
        We couldn't find any people matching your search.
        </p>
        `)
        $listBtn.hide();
        $gridBtn.hide();
        $gridContent.hide();
        $listContent.hide();
        $container.append($emptyPage);
    }

    return {
        displayDataList,
        displayDataGrid,
        displayLoadingPage,
        displayAboutPage,
        displayEmptyPage
    }
})();
//----MAIN MODULE------------------
const mainModule = ((data, ui) => {
    let listLayout = localStorage.getItem("listLayout") === 'true';
    let users = [];

    const $container = $(".container");
    const $search = $("#search");
    const $gridBtn = $("#gridBtn");
    const $listBtn = $("#listBtn");
    const $aboutBtn = $("#aboutBtn");
    const $gridContent = $("#gridContent");
    const $listContent = $("#listContent");
    const hiddenClass = "hidden";

    const activateListView = (listViewActive) => {
        listLayout = listViewActive;
        localStorage.setItem("listLayout", listLayout)

        renderPeoplePage();
    }

    renderPeoplePage = (filteredUsers) => {
        const usersList = filteredUsers || users;

        $container.empty();

        if (listLayout) {
            ui.displayDataList(usersList);
        } else {
            ui.displayDataGrid(usersList);
        }
    }

    const filterUsers = (userList) => {
        let $searchInput = $("#search");
        let searchValue = $searchInput.val();

        const filteredUsers = [];
        for (let i = 0; i < userList.length; i++) {
            let liTitle = `${userList[i].formatName()} ${userList[i].formatSurname()}`
            if (liTitle.indexOf(searchValue) > -1) {
                filteredUsers.push(userList[i]);
            }
        }
        if (filteredUsers.length < 1) {
            ui.displayEmptyPage();
        }

        return filteredUsers;
    }

    const initApp = () => {
        $gridBtn.on("click", () => activateListView(false))
        $listBtn.on("click", () => activateListView(true))
        $aboutBtn.click(ui.displayAboutPage);

        $search.on("keyup", () => {
            const filteredUsers = filterUsers(users);
            renderPeoplePage(filteredUsers);
            filterUsers(users)
        })

        data.fetchUsers((fetchedUsers) => {
            users = fetchedUsers;
            renderPeoplePage(users);
        })

        ui.displayLoadingPage()
    }

    return {
        initApp
    }
})(dataModule, uiModule);


