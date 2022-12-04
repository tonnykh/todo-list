import { addToLocalStorage, getLocalStorageDataInArray, deleteTaskFromStorage } from './storage';

import { format } from 'date-fns'








// function controlEnterKey() {

// }

// function enterKey() {
//     const addTask = document.querySelector("#input-add-task");
//     addTask.addEventListener("keypress", function(event) {
//         if (event.key === "Enter" && addTask.value != "") {
//             addTask();
//         }
//     });
// }


// function addTask() {
//     addToLocalStorage(task.value);
// }



// when "enter" push only the newly added
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

        }
    });
}

// add project without btn same as task Functio

function showAllTaskFromLocalStorage() {
    let tasksArray = getLocalStorageDataInArray();

    // let html = "";
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
        // console.log("okokk");
        element.id = `task-${index}`;
        // element.for = `task-${index}`;
        // console.log("input---", element.id);
    });

    Array.from(labels).forEach(function(element, index) {
        // console.log("okokk");
        element.removeAttribute("for");
        element.setAttribute("for", `task-${index}`);
        // console.log("label---", element.for);
    })
}





// deleteTaskIcons.forEach(deleteTask);

// function deleteTask(item) {
//     console.log(item);

//     item.addEventListener('click', function() {
//         console.log("delete");
//             item.parentElement.parentElement.remove();
//     })
// }

function deleteTask() {
    let deleteTaskIcons = document.querySelectorAll(".delete-icon");

    deleteTaskIcons.forEach((item) => {
        item.addEventListener("click", () => {
            console.log("click");
            item.parentElement.remove();

            // console.log((item.previousElementSibling.textContent).trim());

            let removeTaskIndex = getLocalStorageDataInArray().indexOf(item.previousElementSibling.textContent.trim());

            // console.log(removeTaskIndex);

            deleteTaskFromStorage(removeTaskIndex);
            
            
        });
    })
}


export {  deleteTask, displayNewTask,  makeTaskIdInOrder, showAllTaskFromLocalStorage };