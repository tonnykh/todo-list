
// when user add task, add it to a localStorage 

function addToLocalStorage(taskText) {
    let tasks = localStorage.getItem("tasks");
    let taskObj = [];
    console.log("TASKS----", tasks);

    // console.log(typeof(taskObj));

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = JSON.parse(tasks);
    }
    taskObj.push(taskText); 
    localStorage.setItem("tasks", JSON.stringify(taskObj));


    console.log(taskObj);
    console.log("TASKS----", tasks);
}


// get the last item from localStorage

function getTaskFromLocalStorage() {
    let tasks = localStorage.getItem("tasks");

    if (tasks == null){
        taskObj = [];
    } else {
        taskObj = tasks;
    }

    return taskObj.pop();
}



export { addToLocalStorage, getTaskFromLocalStorage };