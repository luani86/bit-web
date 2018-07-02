//--------DATA MODULE-------------
const dataModule = (() => {

    class Person {
        constructor(name, surname, email, phone, photo, avatar, birthday, gender) {
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.photo = photo;
            this.avatar = avatar;
            this.birthday = `${new Date(birthday).getDate()}.${new Date(birthday).getMonth() - 1}.${new Date(birthday).getFullYear()}`;
            this.gender = gender;
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

    fetchUsers = (successHandlerGrid, forceFetch = false) => {
        const cachedUserList = JSON.parse(localStorage.getItem("userList"));

        if (cachedUserList && !forceFetch) {
            const myUsersList = adaptUsersFromStorage(cachedUserList);
            successHandlerGrid(myUsersList);
            return;
        }

        let request = $.ajax({
            url: "https://randomuser.me/api/?results=15",
            method: "GET"
        });

        request.done((response) => {
            localStorage.setItem("fetchedTime", new Date().getTime());
            localStorage.setItem("userList", JSON.stringify(response.results));

            const usersData = response.results
            console.log(usersData)
            const myUsersList = adaptUsersFromStorage(usersData);

            successHandlerGrid(myUsersList)
        });

    }

    adaptUsersFromStorage = (usersData) => {
        const myUsersList = []

        for (let i = 0; i < usersData.length; i++) {
            const { name, email, phone, picture } = usersData[i];
            const userDatObj = usersData[i];
            const user = new Person(userDatObj.name.first, userDatObj.name.last, userDatObj.email, userDatObj.phone, userDatObj.picture.large, userDatObj.picture.thumbnail, userDatObj.dob.date, userDatObj.gender)
            myUsersList.push(user)
        }

        return myUsersList;
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
    const $refreshTime = $("#refreshTime");
    const $genderCounter = $("#male-female-counter")
    const $loading = $("#loading")

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
    console.log(person)
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
                <span class="title">${person.formatName()} ${person.formatSurname()}</span>
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
    const showLoading = () => {
        $container.hide();
        $loading.show();
    }

    const hideLoading = () => {
        $loading.hide();
        $container.show();
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

    const displayTime = () => {
        let fetchedTime = parseInt(localStorage.getItem("fetchedTime"));

        let secondsDifference = Math.floor((new Date().getTime() - fetchedTime) / 1000);
        let minutesDifference = Math.floor((new Date().getTime() - fetchedTime) / 60000);
        let hoursDifference = Math.floor((new Date().getTime() - fetchedTime) / (60000 * 3600));
        let daysDifference = Math.floor((new Date().getTime() - fetchedTime) / (60000 * 3600 * 24));
        let monthsDifference = Math.floor((new Date().getTime() - fetchedTime) / (60000 * 3600 * 24 * 30));
        let yearsDifference = Math.floor((new Date().getTime() - fetchedTime) / (60000 * 3600 * 24 * 30 * 12));

        if (secondsDifference < 60) {
            return $refreshTime.text(`${secondsDifference} seconds`);
        }

        if (secondsDifference >= 60 && secondsDifference < 3600) {
            return $refreshTime.text(`${minutesDifference} minutes`)
        }

        if (secondsDifference >= 3600 && secondsDifference < 86400) {
            return $refreshTime.text(`${hoursDifference} hours`)
        }

        if (secondsDifference >= 86400 && secondsDifference < 2592000) {
            return $refreshTime.text(`${daysDifference} days`)
        }

        if (secondsDifference >= 2592000 && secondsDifference < 31556926) {
            return $refreshTime.text(`${monthsDifference} months`)
        }

        if (secondsDifference >= 31556926) {
            return $refreshTime.text(`${yearsDifference} years`)
        }
    }

    const displayGenderCounter = (personList) => {
        const $maleCounter = $("#male-counter");
        const $femaleCounter = $("#female-counter");
        let maleCounterValue = 0;
        let femaleCounterValue = 0;
        for (let i = 0; i < personList.length; i++) {
            const person = personList[i];
            if (person.gender === "male") {
                maleCounterValue++
            }
            if (person.gender === "female") {
                femaleCounterValue++
            }
        }
        $maleCounter.html(maleCounterValue);
        $femaleCounter.html(femaleCounterValue);
    }

    return {
        displayDataList,
        displayDataGrid,
        showLoading,
        hideLoading,
        displayAboutPage,
        displayEmptyPage,
        displayTime,
        displayGenderCounter
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
    const $refreshBtn = $("#refreshBtn");
    const $refreshTime = $("#refreshTime");

    const activateListView = (listViewActive) => {
        listLayout = listViewActive;
        localStorage.setItem("listLayout", listLayout)

        renderPeoplePage();
    }

    renderPeoplePage = (filteredUsers) => {
        const usersList = filteredUsers || users;
        console.log(filteredUsers)

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
        ui.displayGenderCounter(filteredUsers)

        return filteredUsers;
    }

    const fetchUsers = (force = false) => {
        ui.showLoading();

        data.fetchUsers((fetchedUsers) => {
            users = fetchedUsers;
            ui.hideLoading();
            renderPeoplePage(users);
            ui.displayGenderCounter(fetchedUsers)
        }, force)
    }

    const initApp = () => {
        $gridBtn.on("click", () => activateListView(false))
        $listBtn.on("click", () => activateListView(true))
        $refreshBtn.on("click", (e) => {
            e.preventDefault();
            fetchUsers(true);
        });
        $aboutBtn.click(ui.displayAboutPage);

        $search.on("keyup", () => {
            const filteredUsers = filterUsers(users);
            renderPeoplePage(filteredUsers);
            filterUsers(users)
        })

        fetchUsers();

        ui.displayTime();
    }

    return {
        initApp
    }
})(dataModule, uiModule);


