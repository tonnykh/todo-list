import { addToLocalStorage, getLocalStorageDataInArray, deleteTaskFromStorage } from './storage';


function displayNewTask() {
    const addTask = document.querySelector("#input-add-task");

    addTask.addEventListener("keypress", function(event) {
        if (event.key === "Enter" && addTask.value != "") {
            addToLocalStorage(addTask.value);

            let newTask = getLocalStorageDataInArray().pop();

            let html = `
                    <input type="checkbox" id="task-1">
                    <label for="task-1">
                        <span class="custom-checkbox"></span>
                        ${newTask}
                    </label>
                    <i class="fa-solid fa-xmark delete-icon"></i>
                `;

            let ul = document.querySelector(".task-lists");

            let li = document.createElement("li");
            li.classList.add("task");
            li.innerHTML = html;
    
            ul.prepend(li);

            makeTaskIdInOrder();

            addTask.value = "";

            deleteTask();
        };
    });
}


function showAllTaskFromLocalStorage() {
    let tasksArray = getLocalStorageDataInArray();

    tasksArray.forEach(function(element, index) {
    let html = `
            <input type="checkbox" id="task-1">
            <label for="task-1">
                <span class="custom-checkbox"></span>
                ${element}
            </label>
            <i class="fa-solid fa-xmark delete-icon" ></i>
        `;

    let ul = document.querySelector(".task-lists");

    let li = document.createElement("li");
    li.classList.add("task");
    li.innerHTML = html;
 
    ul.prepend(li);

    makeTaskIdInOrder();
    })
}


function makeTaskIdInOrder() {
    let inputs = document.querySelectorAll(".task-lists li input");
    let labels = document.querySelectorAll(".task-lists li label");

    Array.from(inputs).forEach(function(element, index) {
        element.id = `task-${index}`;
    });

    Array.from(labels).forEach(function(element, index) {
        element.removeAttribute("for");
        element.setAttribute("for", `task-${index}`);
    })
}


function deleteTask() {
    let deleteTaskIcons = document.querySelectorAll(".delete-icon");

    deleteTaskIcons.forEach((item) => {
        item.addEventListener("click", () => {
            item.parentElement.remove();
            let removeTaskIndex = getLocalStorageDataInArray().indexOf(item.previousElementSibling.textContent.trim());

            deleteTaskFromStorage(removeTaskIndex);            
        });
    })
}


export { deleteTask, displayNewTask,  makeTaskIdInOrder, showAllTaskFromLocalStorage };