const mainModule = ((data, ui) => {
    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $allTasksBtn = $("#allTasksBtn");
    const $activeTasksBtn = $("#activeTasksBtn");
    const $completedTasksBtn = $("#completedTasksBtn");
    const deleteBtn = $(".close");

    let counterClick = 0;
    const initApp = () => {
        const $singleTask = $(".singleTask")
        $(document).on("keypress", ui.createSingleTask);
        $(document).on("keypress", ui.countCLicks);
        $(document).on("mouseover", ".singleTask", ui.displayDeleteBtn);
        $(document).on("mouseout", ".singleTask", ui.hideDeleteBtn);
        $(document).on("click", ".close", ui.deleteTask)
    }

    initApp()
    return {
        initApp
    }
})(dataModule, uiModule)