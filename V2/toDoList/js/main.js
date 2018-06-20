const mainModule = ((data, ui) => {
    const $container = $(".container");
    const $inputTask = $("#inputTask");
    const $listOfTasks = $(".listOfTasks");
const initApp = () => {
$(document).on("keypress", ui.createSingleTask)
}
initApp()
return {
    initApp
}
})(dataModule, uiModule)