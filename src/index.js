import './js/main.js';
import { Task } from "./js/task";
import { Tomato } from "./js/tomato";

import './scss/index.scss';


  const tasks = [];
  tasks.push(new Task("Заполнить дневник"));
  tasks.push(new Task("Выполнить уроки", 2));
  tasks.push(new Task("Купить молоко", 4));
  tasks.push(new Task("Выгулять собаку"));
  
  const tomato = new Tomato({tasks: tasks, time: 3, bigPause: 3, pause: 1});
  
  tomato.start();  
  tomato.addActiveTask(tasks[2].getId());
  tomato.start();
  tomato.addActiveTask(tasks[1].getId());
  tomato.start();
  
  const tomato2 = new Tomato({tasks: tasks});
  console.log(`Задачи: ${tomato2.getTasks()}`);
  console.log(`Время выполнения: ${tomato2.getTime()}`);
  console.log(`Большая пауза: ${tomato2.getBigPause()}`);
  console.log(`Маленькая пауза: ${tomato2.getPause()}`);
