import './style.css';
import task from './modules/task';
import project from './modules/project';

import { addToLocalStorage, getLocalStorageDataInArray } from './modules/storage';

import {  deleteTask, displayNewTask, makeTaskIdInOrder, showAllTaskFromLocalStorage } from './modules/ui';



// addToLocalStorage();
// addTaskToLocalStorage();

displayNewTask();
showAllTaskFromLocalStorage();

deleteTask();

// getLocalStorageDataInArray();
// showNewAddedTask();
// makeTaskIdInOrder();
// project();