const dataModule = (() => {

    class Person {
        constructor(name, surname, email, phone, photo) {
            this.name = name
            this.surname = surname
            this.email = email
            this.phone = phone
            this.photo = photo
        }
    }

    fetchUserList = (successHandler) => {
        let request = $.ajax({
            url: "https://randomuser.me/api/?results=15",
            method: "GET"
        });

        request.done((response) => {

            const usersData = response.results
            const myUsersList = []

            for (let i = 0; i < usersData.length; i++) {
                const {name, email, phone, picture} = usersData[i];
                const userDatObj = usersData[i];
                const user = new Person(userDatObj.name.first, userDatObj.name.last, userDatObj.email, userDatObj.phone, userDatObj.picture.large)
                myUsersList.push(user)
            }

            console.log("myUsersList", myUsersList);
            
            successHandler(myUsersList)
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
                Email: ${person.email}
                \n
                Phone: ${person.phone}
                </p>
                </div>
            </div>
            </div>
        `)
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
        displayDataGrid
    }
})();

const mainModule = ((data, ui) => {
    const initDataGrid = () => {

        data.fetchUserList(function (userList) {
            console.log("userList", userList);
            ui.displayDataGrid(userList)
        })

    }

    return {
        initDataGrid
    }
})(dataModule, uiModule);


