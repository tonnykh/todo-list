// when user add task, add it to a localStorage 

function addToLocalStorage(taskText) {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }
    taskObj.push(taskText); 
    localStorage.setItem("tasks", JSON.stringify(taskObj));
}


function getLocalStorageDataInArray() {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }
    return taskObj;
}


function deleteTaskFromStorage(index) {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }

    taskObj.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(taskObj));
}


export { addToLocalStorage, getLocalStorageDataInArray, deleteTaskFromStorage };