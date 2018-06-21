const dataModule = (() => {
    let tasks = [];

    class Task {
        constructor(name) {
            this.id = Math.floor(Math.random() * 1000000);
            this.status = "ACTIVE";
            this.name = name;
        }
    }

    const createTask = (id, name, status) => {
        const singleTask = new Task(id, name, status)
        addTask(singleTask);
    }

    const addTask = (task) => {
        tasks.push(task);
    }

    const getTasks = () => {
        return tasks;
    }

    const deleteTask = (taskId) => {
        tasks = tasks.filter(task => task.id !== +taskId);
    }

    return {
        createTask,
        getTasks,
        deleteTask
    }

})()