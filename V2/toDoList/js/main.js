const mainModule = ((data, ui) => {
    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $allTasksBtn = $("#allTasksBtn");
    const $activeTasksBtn = $("#activeTasksBtn");
    const $completedTasksBtn = $("#completedTasksBtn");
    const deleteBtn = $(".close");

    const createNewTask = () => {
        const name = ui.getTaskName();
        data.createTask(name);
        

        renderTasks();
        ui.resetTaskName();
        console.log(name)
    }

    const renderTasks = () => {
        const tasks = data.getTasks();
        ui.renderTasks(tasks)
        console.log(tasks)
    }

    const removeTask = (event) => {
        let counterTasks;
        const taskId = event.target.getAttribute('data-id');
        data.deleteTask(taskId, () => {
            counterTasks += 1
            renderTasks()
        });
    }

    const initApp = () => {
        $('#inputTask').on("keyup", (e) => e.keyCode === 13 && createNewTask(e.target.value));
        $(document).on("click", '.close', removeTask)
        $(document).on("mouseover", '.singleTask', ui.displayDeleteBtn)
        $(document).on("mouseout", '.singleTask', ui.hideDeleteBtn)
    }

    initApp()
    return {
        initApp
    }
})(dataModule, uiModule)