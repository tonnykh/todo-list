import { addToLocalStorage, getTaskFromLocalStorage } from './storage';


//add task
//delete task



// when click enter save data at local storage
function addTaskWithoutBtn() {
    const addTask = document.querySelector("#input-add-task");

    addTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            console.log(addTask.value);
            addToLocalStorage(addTask.value);
        }
    });
}

// add project without btn same as task Function





// load projects from local storage or load default projects if empty


export default addTaskWithoutBtn

