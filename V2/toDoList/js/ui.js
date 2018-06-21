const uiModule = (() => {

    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $totalTasksCounterSpan = $("#totalTasksCounterSpan");
    const $plusBtn = $("#plusBtn");

    let counterTasks = 0;

    const createSingleTask = (event) => {
        let taskValue = $inputTask.val();
        let arrayOfTasks = [];
        const $tasksLeft = $(`
        <span> tasks left</span>
        `)
     
        if($inputTask.val() && $inputTask.val()[0] !== " ") {
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
                counterTasks += 1
                $totalTasksCounterSpan.text(counterTasks)
                $totalTasksCounterSpan.append($tasksLeft)
            }
            
            return $singleTask
        }

    }

    return {
        createSingleTask,
    }
})();
