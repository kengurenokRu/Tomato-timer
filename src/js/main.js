
import { ImportantTask, StandardTask, UnimportantTask } from "./task";

const tasks = [];

let count = 0;
const imp = ['default', 'important', 'so-so']
document.querySelector('.button-importance').addEventListener('click', ({ target }) => {
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
});


const form = document.querySelector('.task-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let task = '';
  const imp = document.querySelector('.button-importance');
  if (imp.classList.contains('important')) {
    task = new ImportantTask(form["task-name"].value);
  }
  else if (imp.classList.contains('so-so')) {
    task = new UnimportantTask(form["task-name"].value);
  }
  else {
    task = new StandardTask(form["task-name"].value);
  }
  tasks.push(task);
  form.reset();
  console.log(tasks);
});

