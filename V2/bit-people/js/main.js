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
    const $row = $(".row");
    const $list = $("#listContent");
    const $searchBar = $(".searchBar")

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

        for (let i = 0; i < 15; i++) {
            const person = personList[i]
            const $listItem = createListItem(person)

            $list.append($listItem)
        }

        $container.append($list)
    }

    //------------------------------Display Grid----------------------------
    const displayDataGrid = (personList) => {

        for (let i = 0; i < 15; i++) {
            const person = personList[i]
            const $card = createCardItem(person)

            $row.append($card)
        }
        $container.append($row)
    }

    //-----------Display Loading Page---------------
    const displayLoadingPage = () => {
        $(document).ready(() => {
            let $loadingPage = $(`
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
        <h2>What we do</h2>
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
        $gridContent.css("display", "none");
        $listContent.css("display", "none");
        $searchBar.css("display", "none");
        $container.append($aboutPage);
    }

    return {
        displayDataList,
        displayDataGrid,
        displayLoadingPage,
        displayAboutPage
    }
})();
//----MAIN MODULE------------------
const mainModule = ((data, ui) => {
    const $gridBtn = $("#gridBtn");
    const $listBtn = $("#listBtn");
    const $aboutBtn = $("#aboutBtn");
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
        ui.displayLoadingPage()
    }

    const initAboutPage = (event) => {
        $aboutBtn.click(ui.displayAboutPage);
        event.stopPropagation();
        event.preventDefault()
    }
    //----------------Filter Users----------------------------
    // const filterUsers = (userList) => {
    //     let $searchInput = $("#search");
    //     let $filter = $searchInput.val().toUpperCase();
    //   for(let i = 0; i < userList.length; i++) {
    //       let liTitle = `${userList[i].name} ${userList[i].surname}`
    //       if(liTitle.toUpperCase().indexOf($filter) > -1) {
    //         liTitle[i].css("display", "inline");
    //         ui.displayDataList(userList)
    //       } else {
    //           liTitle[i].css("display", "none");
    //       }
    //   }
    // }
    //------------------Loading Page-----------------


    return {
        initAllUsersData,
        initAboutPage
        // filterUsers
    }
})(dataModule, uiModule);


