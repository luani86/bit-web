const mainModule = ((data, ui) => {
    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $allTasksBtn = $("#allTasksBtn");
    const $activeTasksBtn = $("#activeTasksBtn");
    const $completedTasksBtn = $("#completedTasksBtn");

    let counterClick = 0;
const initApp = () => {
const $singleTask = $(".singleTask")
$(document).on("keypress", ui.createSingleTask);
$(document).on("keypress", ui.countCLicks);
$(document).on("mouseover", $(".singleTask"), ui.displayDeleteBtn);
$(document).on("mouseout", $(".singleTask"), ui.hideDeleteBtn);

}
initApp()
return {
    initApp
}
})(dataModule, uiModule)