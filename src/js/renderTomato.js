import { el, setChildren, mount } from "redom";
import { ImportantTask, StandardTask, UnimportantTask } from "./task";

export class RenderTomato {
  constructor(root, controller) {
    this.root = root;
    this.controller = controller;
    this.count = 0;
    this.mainContainer = el('div.container', { class: 'main__container' });

    this.window = el('div.pomodoro-form', { class: 'window' });

    this.windowPanel = el('.window__panel');
    this.windowPanelTitle = el('p.window__panel-title', 'Сверстать сайт');
    this.windowPanelTaskText = el('p.window__panel-task-text', 'Томат 2');
    setChildren(this.windowPanel, [this.windowPanelTitle, this.windowPanelTaskText]);

    this.windowBody = el('.window__body');
    this.windowTimerText = el('p.window__timer-text', '25:00');
    this.windowButtons = el('.window__buttons');
    this.buttonPrimary = el('button.button', { class: 'button-primary' }, 'Старт');
    this.buttonSecondary = el('button');
    this.buttonSecondary.className = 'button button-secondary hidden';
    setChildren(this.windowButtons, [this.buttonPrimary, this.buttonSecondary]);
    setChildren(this.windowBody, [this.windowTimerText, this.windowButtons]);

    this.taskForm = el('form.task-form', { action: 'submit' });
    this.inputPrimary = el('input', { type: 'text', name: 'task-name', id: 'task-name', placeholder: 'название задачи' });
    this.inputPrimary.className = 'task-name input-primary';
    this.buttonDefault = el('button', { type: 'button', ariaLabel: 'Указать важность' });
    this.buttonDefault.className = 'button button-importance default';
    this.buttonSubmit = el('button', { type: 'submit' }, 'Добавить');
    this.buttonSubmit.className = 'button button-primary task-form__add-button';
    setChildren(this.taskForm, [this.inputPrimary, this.buttonDefault, this.buttonSubmit]);

    setChildren(this.window, [this.windowPanel, this.windowBody, this.taskForm]);

    this.pomodoroTasks = el('.pomodoro-tasks');

    this.tasks = el('.tasks');
    this.tasksTitle = el('p.tasks__title', 'Задачи:');
    this.tasksList = el('ul.tasks__list');
    /*setChildren(this.tasksList, [this.addTasksItem('tasks__item important', '1', 'Сверстать сайт'),
    this.addTasksItem('tasks__item so-so', '1', 'Оплатить налоги'),
    this.addTasksItem('tasks__item default', '3', 'Проверить валидность')]);*/
    this.tasksDeadline = el('p.tasks__deadline', '1\u00A0час 30\u00A0мин');
    setChildren(this.tasks, this.tasksTitle, this.tasksList, this.tasksDeadline);


    this.manual = el('.manual');
    this.manualDetails = el('details.manual__details');
    this.tasksHeaderTitle = el('summary', 'Инструкция');
    this.tasksHeaderTitle.className = 'manual__details manual__title tasks__header-title';
    this.manualList = el('ol.manual__list');
    setChildren(this.manualList, [el('li.manual__item', 'Напишите название задачи чтобы её\u00A0добавить'),
    el('li.manual__item', 'Для активации задачи, выберите её\u00A0из\u00A0списка'),
    el('li.manual__item', 'Запустите таймер'),
    el('li.manual__item', 'Работайте пока таймер не\u00A0прозвонит'),
    el('li.manual__item', 'Работайте пока таймер не\u00A0прозвонит'),
    el('li.manual__item', 'Продолжайте работать, пока задача не\u00A0будет выполнена.'),
    el('li.manual__item', 'Каждые 4\u00A0периода таймера делайте длинный перерыв (15-20\u00A0минут).')]);

    setChildren(this.manualDetails, [this.tasksHeaderTitle, this.manualList]);
    setChildren(this.manual, this.manualDetails);

    setChildren(this.pomodoroTasks, [this.tasks, this.manual]);

    setChildren(this.mainContainer, [this.window, this.pomodoroTasks]);

    this.bindListeners();
  }

  addTasksItem(classList, count, text, id) {
    this.tasksItem = el('li', { id: id });
    this.tasksItem.className = classList;
    this.countNumber = el('span.count-number', count);
    this.button = el('button', { type: 'button' }, text);
    this.button.className = 'tasks__text tasks__text_active';
    this.taskBbutton = el('button.tasks__button', { type: 'button' });
    setChildren(this.tasksItem, [this.countNumber, this.button, this.taskBbutton]);
    return this.tasksItem;
  }

  addPopup() {
    this.popup = el('div');
    this.popup.className = 'popup popup_active';
    this.buttonEdit = el('button', { type: 'button', }, 'Редактировать');
    this.buttonEdit.className = 'popup__button popup__edit-button';
    this.buttonDel = el('button', { type: 'button' }, 'Удалить');
    this.buttonDel.className = 'popup__button popup__delete-button';
    setChildren(this.popup, [this.buttonEdit, this.buttonDel]);
    return this.popup;
  }

  renderTask(task) {
    mount(this.tasksList, this.addTasksItem(`tasks__item ${task.getImportance()}`, task.getCount(), task.getText(), task.getId()));
  };

  renderActiveTask(task) {
    this.windowPanelTitle.textContent = task.getText();
    this.windowPanelTaskText.textContent = `Томат ${task.getCount()}`;    
  };

  bindListeners() {
    this.buttonDefault.addEventListener('click', ({ target }) => {
      const imp = ['default', 'important', 'so-so']
      this.count += 1;
      if (this.count >= imp.length) {
        this.count = 0
      }
      for (let i = 0; i < imp.length; i++) {
        if (this.count === i) {
          target.classList.add(imp[i])
        } else {
          target.classList.remove(imp[i])
        }
      }
    });

    this.taskForm.addEventListener('submit', (event) => {
      event.preventDefault();
      let task = '';
      const imp = document.querySelector('.button-importance');
      if (imp.classList.contains('important')) {
        task = new ImportantTask(this.taskForm["task-name"].value);
      }
      else if (imp.classList.contains('so-so')) {
        task = new UnimportantTask(this.taskForm["task-name"].value);
      }
      else {
        task = new StandardTask(this.taskForm["task-name"].value);
      }
      this.controller.handleAddTask(task);
      this.taskForm.reset();

      this.renderTask(task);
    });

    this.tasksList.addEventListener('click', (event) => {
      const id = event.target.closest('.tasks__item').id;
      this.controller.handleAddActiveTask(id);
      const task = this.controller.handleFindTask(id);
      this.renderActiveTask(task);
    });
  }

  render() {
    mount(this.root, this.mainContainer);
  }
}




//this.renderTomato = new RenderTomato(document.getElementById('main')/*, controllerTomato*/);
//renderTomato.render();