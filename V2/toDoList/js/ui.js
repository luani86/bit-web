const uiModule = (() => {

    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");

    const createSingleTask = (event) => {
        let taskValue = $inputTask.val();
        let $singleTask = $(`
        <li class="singleTask">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        ${taskValue}
                    </label>
                </div>
            </li>
        `)
       
        if(event.keyCode === 13) {
            $listOfTasks.append($singleTask);
            $inputTask.val("")
        }

    }

    return {
        createSingleTask
    }
})();
