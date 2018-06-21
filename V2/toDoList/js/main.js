const mainModule = ((data, ui) => {
    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
    const $plusBtn = $("#plusBtn");
    let counterClick = 0;
const initApp = () => {
const $singleTask = $(".singleTask")
$(document).on("keypress", ui.createSingleTask);
$(document).on("keypress", ui.countCLicks);

}
initApp()
return {
    initApp
}
})(dataModule, uiModule)