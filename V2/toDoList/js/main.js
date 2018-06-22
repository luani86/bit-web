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
        const taskId = event.target.getAttribute('data-id');
        // renderTasks();
        data.deleteTask(taskId);
        
    }

    const initApp = () => {
        $('#inputTask').on("keyup", (e) => e.keyCode === 13 && createNewTask(e.target.value));
        $(document).on("click", '.close', removeTask)
    }

    initApp()
    return {
        initApp
    }
})(dataModule, uiModule)