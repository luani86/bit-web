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

const uiModule = (() => {
    const body = $("body");
    const $container = $(".container");
    const $row = $(".row")
    const $list = $("#listContent")

    const createCardItem = (person) => {
        const $cardItem = $(`
        <div class="col s4">
        <div class="card">
            <div class="card-image">
            <img src="${person.photo}">
            <span class="card-title">${person.name} ${person.surname}</span>
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
    if(person.gender === "female") {
        $cardItem.find(".card-content").css("background-color", "#ffebee")
    }
        return $cardItem;
    }

    const createListItem = (person) => {
        const $listItem = $(`
        <li class="collection-item avatar">
        <div class="listContentDiv">
      <img src="${person.avatar}" alt="" class="circle">
      <span class="title">${person.name} ${person.surname}</span>
      <p><i class="tiny material-icons">email</i> ${person.formatMail()}<br>
      <i class="tiny material-icons">cake</i> ${person.birthday}
      </p>
      </div>
    </li>
        `)
        if(person.gender === "female") {
            $listItem.css("background-color", "#ffebee")
        }
        return $listItem;
    }

    const displayDataList = (personList) => {
        for (let i = 0; i < 15; i++) {
            const person = personList[i]
            const $listItem = createListItem(person)

            $list.append($listItem)
        }
        $container.append($list)
    }


    const displayDataGrid = (personList) => {
        console.log("personList", personList);

        for (let i = 0; i < 15; i++) {
            const person = personList[i]
            const $card = createCardItem(person)

            $row.append($card)
        }
        $container.append($row)
        console.log(personList)
    }

  
    return {
        displayDataList,
        displayDataGrid
    }
})();

const mainModule = ((data, ui) => {
    const $gridBtn = $("#gridBtn");
    const $listBtn = $("#listBtn");
    const $gridContent = $("#gridContent");
    const $listContent = $("#listContent");
    const hiddenClass = "hidden";

    const toggleBtn = (event) => {
        event.stopPropagation();
        event.preventDefault();

        if ($gridBtn.hasClass(hiddenClass)) {
            localStorage.setItem('layout', 'grid');

            $gridBtn.removeClass(hiddenClass);
            $listBtn.addClass(hiddenClass);
            $gridContent.removeClass(hiddenClass);
            $listContent.addClass(hiddenClass);
            return;
        }

        if ($listBtn.hasClass(hiddenClass)) {
            localStorage.setItem('layout', 'list');

            $listBtn.removeClass(hiddenClass);
            $gridBtn.addClass(hiddenClass);
            $listContent.removeClass(hiddenClass);
            $gridContent.addClass(hiddenClass);
        }
    }
    
    const initAllUsersData = () => {
        data.fetchUsers(function (userList) {
            ui.displayDataList(userList)
            ui.displayDataGrid(userList)
            $listBtn.click(toggleBtn)
            $gridBtn.click(toggleBtn)
        })
    }
    return {
        initAllUsersData   
    }
})(dataModule, uiModule);


