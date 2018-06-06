const dataModule = (() => {

    class Person {
        constructor(name, surname, email, phone, photo, avatar, birthday) {
            this.name = name
            this.surname = surname
            this.email = email
            this.phone = phone
            this.photo = photo
            this.avatar = avatar
            this.birthday = `${new Date(birthday).getDate()}.${new Date(birthday).getMonth() - 1}.${new Date(birthday).getFullYear()}`
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

    fetchUserList = (successHandlerGrid) => {
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
                const user = new Person(userDatObj.name.first, userDatObj.name.last, userDatObj.email, userDatObj.phone, userDatObj.picture.large, userDatObj.picture.thumbnail, userDatObj.dob)
                myUsersList.push(user)
            }

            console.log("response", response);
            successHandlerGrid(myUsersList)
        });
    }

    return {
        fetchUserList
    }
})();

const uiModule = (() => {
    const body = $("body");
    const $container = $(".container");
    const $row = $(".row")
    const $list = $("#listContent")

    const createCardItem = (person) => {
        return $(`
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
    }

    const createListItem = (person) => {
        return $(`
        <li class="collection-item avatar">
      <img src="${person.avatar}" alt="" class="circle">
      <span class="title">${person.name} ${person.surname}</span>
      <p><i class="tiny material-icons">email</i> ${person.formatMail()}<br>
      <i class="tiny material-icons">cake</i> ${person.birthday}
      </p>
    </li>
        `)
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
            $gridBtn.removeClass(hiddenClass);
            $listBtn.addClass(hiddenClass);
            $gridContent.removeClass(hiddenClass);
            $listContent.addClass(hiddenClass);
            return;
        }

        if ($listBtn.hasClass(hiddenClass)) {
            $listBtn.removeClass(hiddenClass);
            $gridBtn.addClass(hiddenClass);
            $listContent.removeClass(hiddenClass);
            $gridContent.addClass(hiddenClass);
        }
    }

    const initDataList = () => {
        data.fetchUserList(function (userList) {
            ui.displayDataList(userList)
            $listBtn.click(toggleBtn)
        })
    }

    const initDataGrid = () => {
        data.fetchUserList(function (userList) {
            console.log("userList", userList);
            ui.displayDataGrid(userList)
            $gridBtn.click(toggleBtn)
        })
    }

    

    return {
        initDataList,
        initDataGrid
    }
})(dataModule, uiModule);


