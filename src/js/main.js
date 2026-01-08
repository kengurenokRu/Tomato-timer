
import { Task } from "./task";
import { Tomato } from "./tomato";

let count = 0;
const imp = ['default', 'important', 'so-so']
document.querySelector('.button-importance').addEventListener('click', ({target}) => {
  count += 1;
  if (count >= imp.length) {
    count = 0
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i])
    } else {
      target.classList.remove(imp[i])
    }
  }
})



const initTask = () => {
const tasks = [];
tasks.push(new Task("Заполнить дневник"));
tasks.push(new Task("Выполнить уроки", 2));
tasks.push(new Task("Купить молоко", 4));
tasks.push(new Task("Выгулять собаку"));

const tomato = new Tomato({tasks: tasks});

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
}

initTask();