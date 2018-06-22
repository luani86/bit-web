const uiModule = (() => {

    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $totalTasksCounterSpan = $("#totalTasksCounterSpan");


    
    // let countCheckedTasks = 0;

    const renderTasks = (tasks) => {
        $listOfTasks.html("");
        let counterTasks = 0;
     
        const $tasksLeft = $(`
        <span> tasks left</span>
        `)
        tasks.forEach(task => {
            if (task.name && task.name !== " ") {
                counterTasks += 1
                const $singleTask = $(`
                <li data-index="${task.id}" class="singleTask">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                            <label class="form-check-label" for="defaultCheck1">
                            ${task.name}
                                <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true" data-id="${task.id}">&times;</span>
                                </button>
                            </label>
                        </div>
                    </li>
                `
            )
            $listOfTasks.append($singleTask);
            $totalTasksCounterSpan.text(counterTasks)
            $totalTasksCounterSpan.append($tasksLeft)
            }

        });
    }

    const getTaskName = () => $inputTask.val();

    const resetTaskName = () => $inputTask.val("");

    // const createSingleTask = (event, task) => {
    //     let taskValue = $inputTask.val();
    //     let arrayOfTasks = [];
    //     const $tasksLeft = $(`
    //     <span> tasks left</span>
    //     `)

    //     if ($inputTask.val() && $inputTask.val()[0] !== " ") {
    //         let $singleTask = $(`
    //         <li data-index="${counterTasks}" class="singleTask">
    //                 <div class="form-check">
    //                     <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
    //                     <label class="form-check-label" for="defaultCheck1">
    //                     ${taskValue}
    //                         <button type="button" class="close" aria-label="Close">
    //                             <span aria-hidden="true" data-id="${task.id}">&times;</span>
    //                         </button>
    //                     </label>
    //                 </div>
    //             </li>
    //         `)
    //         if (event.keyCode === 13) {
    //             $listOfTasks.append($singleTask);
    //             $inputTask.val("")
    //             counterTasks += 1
    //             $totalTasksCounterSpan.text(counterTasks)
    //             $totalTasksCounterSpan.append($tasksLeft)
    //         }
    //         if ($("#defaultCheck1").is(':checked')) {
    //             counterCheckedTasks += 1;
    //         }

    //         return $singleTask
    //     }

    // }

    const displayDeleteBtn = (event, taskId) => {
        const deleteBtn = $(".close");
            deleteBtn.show()
    }

    const hideDeleteBtn = () => {
        const deleteBtn = $(".close");
        deleteBtn.hide()
    }

    const deleteTask = (event) => {
        $(event.target).closest('.singleTask').remove();
        counterTasks -= 1;
        const $tasksLeft = $(`
        <span> tasks left</span>
        `)
        $totalTasksCounterSpan.text(counterTasks)
        $totalTasksCounterSpan.append($tasksLeft)
        return;
    }

    // const getCheckedTasks = () => {
    //     let countCheckedTasks = 0;
    //     for(let i = 0; i < $listOfTasks.children().length; i++ ) {
    //         if($listOfTasks.children()[i].closest(".form-check-input").is(":checked")) {
    //             countCheckedTasks +=1
    //         }
    //     } 
    //     console.log(countCheckedTasks)
    //     return countCheckedTasks
    // }


    return {
        // createSingleTask,
        displayDeleteBtn,
        hideDeleteBtn,
        deleteTask,
        renderTasks,
        getTaskName,
        resetTaskName
        // getCheckedTasks
    }
})();
