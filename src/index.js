import './style.css';
import task from './modules/task';
import project from './modules/project';
import addTaskWithoutBtn from './modules/ui';

import { addToLocalStorage, getTaskFromLocalStorage } from './modules/storage';

addTaskWithoutBtn();

project();

const task1 = task("sleep");
const task2 = task("eat");

console.log("from index.js....task name--", task1.name);

console.log("from index.js....task name--", task2.name);

// addToLocalStorage("uuuuuhh");


