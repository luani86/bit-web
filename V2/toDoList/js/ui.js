const uiModule = (() => {

    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $totalTasksCounterSpan = $("#totalTasksCounterSpan");


    let counterTasks = 0;
    let counterCheckedTasks = 0;

    const createSingleTask = (event) => {
        let taskValue = $inputTask.val();
        let arrayOfTasks = [];
        const $tasksLeft = $(`
        <span> tasks left</span>
        `)

        if ($inputTask.val() && $inputTask.val()[0] !== " ") {
            let $singleTask = $(`
            <li data-index="${counterTasks}" class="singleTask">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                        ${counterTasks+1}: ${taskValue}
                            <button type="button" class="close" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </label>
                    </div>
                </li>
            `)
            if (event.keyCode === 13) {
                $listOfTasks.append($singleTask);
                $inputTask.val("")
                counterTasks += 1
                $totalTasksCounterSpan.text(counterTasks)
                $totalTasksCounterSpan.append($tasksLeft)
            }
            if ($("#defaultCheck1").is(':checked')) {
                counterCheckedTasks += 1;
            }

            return $singleTask
        }

    }

    const displayDeleteBtn = () => {
        const deleteBtn = $(".close");
        deleteBtn.show()
    }

    const hideDeleteBtn = () => {
        const deleteBtn = $(".close");
        deleteBtn.hide()
    }

    return {
        createSingleTask,
        displayDeleteBtn,
        hideDeleteBtn
    }
})();
