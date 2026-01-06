import './js/main.js';
import {Task} from './js/task.js';

import './scss/index.scss';

const task = new Task('заправить кровать');
console.log(task);
task.setCounter(/*55*/);
console.log(task);
task.setName('оплатить курсы');
console.log(task);
