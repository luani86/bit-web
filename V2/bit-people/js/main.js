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
    const $row = $(".row")
    const $list = $("#listContent")

    //------------------------------Create Card Item----------------------------
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
      <p><i class="tiny material-icons">email</i> ${person.formatMail()}<br>
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
        
        for (let i = 0; i < 15; i++) {
            const person = personList[i]
            const $listItem = createListItem(person)

            $list.append($listItem)
        }
        $container.append($list)
    }

        //------------------------------Display Grid----------------------------
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

    // const createLoadingPage = () => {
    //     $(document).ready(() => {
    //         $(document).ajaxStart(() => {
    //             $("#wait").css("display", "block");
    //         });
    //         $(document).ajaxComplete(() => {
    //             $("#wait").css("display", "none");
    //         });
    //         $("#refreshBtn").click(() => {
    //             $("#txt").load("index.html")
    //         });
    //     })
    // }

    return {
        displayDataList,
        displayDataGrid
    }
})();
//----MAIN MODULE------------------
const mainModule = ((data, ui) => {
    const $gridBtn = $("#gridBtn");
    const $listBtn = $("#listBtn");
    const $gridContent = $("#gridContent");
    const $listContent = $("#listContent");
    const hiddenClass = "hidden";

    // const toggleBtn = (event) => {
    //     event.stopPropagation();
    //     event.preventDefault();

    //     if ($gridBtn.hasClass(hiddenClass)) {
    //         localStorage.setItem('layout', 'grid');

    //         $gridBtn.removeClass(hiddenClass);
    //         $listBtn.addClass(hiddenClass);
    //         $gridContent.removeClass(hiddenClass);
    //         $listContent.addClass(hiddenClass);
    //         return;
    //     }

    //     if ($listBtn.hasClass(hiddenClass)) {
    //         localStorage.setItem('layout', 'list');

    //         $listBtn.removeClass(hiddenClass);
    //         $gridBtn.addClass(hiddenClass);
    //         $listContent.removeClass(hiddenClass);
    //         $gridContent.addClass(hiddenClass);
    //     }
    // }

    //------------------------------Init DIsplay---------------------------
    const initAllUsersData = () => {
        let listLayout = localStorage.getItem("listLayout") === 'true';

        data.fetchUsers(function (userList) {

            const listSetStorage = () => {
                listLayout = true;
                $listContent.text("");
                localStorage.setItem("listLayout", listLayout)

                ui.displayDataList(userList)
                $gridContent.remove()
                // $listBtn.off("click", listSetStorage)
                $gridBtn.click(gridSetStorage)

                $gridBtn.removeClass(hiddenClass);
                $listBtn.addClass(hiddenClass);
            }

            const gridSetStorage = () => {
                listLayout = false;
                $gridContent.text("");
                localStorage.setItem("listLayout", listLayout)

                ui.displayDataGrid(userList)
                $listContent.remove()
                // $gridBtn.off("click", gridSetStorage)
                $listBtn.click(listSetStorage)

                $listBtn.removeClass(hiddenClass);
                $gridBtn.addClass(hiddenClass);
              
            }

            $gridBtn.click(gridSetStorage)
            $listBtn.click(listSetStorage)
            // $gridBtn.off("click", gridSetStorage)
            // $listBtn.off("click", listSetStorage)

            // $listBtn.click(toggleBtn)
            // $gridBtn.click(toggleBtn)
            if (listLayout) {
                listSetStorage();
            } else {
                gridSetStorage();
            }
        })
    }
//----------------Filter Users----------------------------
    // const filterUsers = () => {
    //     $(document).ready(() => {
    //         $searchInput = $(".searchInput");
    //         $searchInput.on("keyUp", () => {
    //             let value = $(this).val().toLowerCase();
    //             $($list).filter(() => {
    //                 $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //             })
    //         })
    //     })
    // }

    return {
        initAllUsersData,
        // filterUsers
    }
})(dataModule, uiModule);


