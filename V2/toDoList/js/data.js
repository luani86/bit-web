const dataModule = (() => {
   
class Task {
    constructor(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
    // task collection
        // task 1
        // task 2

    const createTask = (id, name, status) => {
        const singleTask = new Task(id, name, status)
        return singleTask
    }

    const updateTaskList = (task) => {
        let taskList = [];
    }

    return {
        createTask
    }

})()