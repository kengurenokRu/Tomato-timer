import { el, setChildren, mount } from "redom";

export class RenderTomato {

  constructor(root/*, controller*/) {
    this.root = root;
   // this.controller = controller;

    this.mainContainer = el('div.container', { class: 'main__container' });

    const window = el('div.pomodoro-form', { class: 'window' });

    const windowPanel = el('.window__panel');
    const windowPanelTitle = el('p.window__panel-title', 'Сверстать сайт');
    const windowPanelTaskText = el('p.window__panel-task-text', 'Томат 2');
    setChildren(windowPanel, [windowPanelTitle, windowPanelTaskText]);
    
    const windowBody = el('.window__body');
    const windowTimerText = el('p.window__timer-text', '25:00');
    const windowButtons = el('.window__buttons');
    const buttonPrimary = el('button.button', { class: 'button-primary' });
    const buttonSecondary = el('button.button', { class: ['button-secondary', 'hidden'] });
    setChildren(windowButtons, [buttonPrimary, buttonSecondary]);
    setChildren(windowBody, [windowTimerText, windowButtons]);

    const taskForm = el('form.task-form', { action: 'submit' });
    const inputPrimary = el('input', { type: 'text', class: ['task-name', 'input-primary'], name: 'task-name', id: 'task-name', placeholder: 'название задачи' });
    const buttonDefault = el('button', { type: 'button', class: ['button', 'button-importance', 'default'], ariaLabel: 'Указать важность' });
    const buttonSubmit = el('button', { type: 'submit', class: ['button', 'button-primary', 'task-form__add-button']}, 'Добавить');
    setChildren(taskForm, [inputPrimary, buttonDefault, buttonSubmit]);

    setChildren(window, [windowPanel, windowBody, taskForm]);

   // setChildren(this.mainContainer, [window, windowBody, taskForm]);


    const pomodoroTasks = el('.pomodoro-tasks');

    const tasks = el('.tasks');
    const tasksTitle = el('p.tasks__title', 'Задачи:');
    const tasksList = el('ul.tasks__list');
    setChildren(tasksList, [this.addTasksItem(['tasks__item', 'important'], '1', 'Сверстать сайт'),
    this.addTasksItem(['tasks__item','so-so'], '1', 'Оплатить налоги'),
    this.addTasksItem(['tasks__item','default'], '3', 'Проверить валидность')]);
    const tasksDeadline = el('p.tasks__deadline', '1&nbsp;час 30&nbsp;мин');
    setChildren(tasks, tasksTitle, tasksDeadline);


    const manual = el('.manual');
    const manualDetails = el('details.manual__details');
    const tasksHeaderTitle = el('summary.manual__details', {class: ['manual__title','tasks__header-title']}, 'Инструкция');
    const manualList = el('ol.manual__list');
    setChildren(manualList, [this.addManualItem('Напишите название задачи чтобы её&nbsp;добавить'),
    this.addManualItem('Для активации задачи, выберите её&nbsp;из&nbsp;списка'),
    this.addManualItem('Запустите таймер'),
    this.addManualItem('Работайте пока таймер не&nbsp;прозвонит'),
    this.addManualItem('Работайте пока таймер не&nbsp;прозвонит'),
    this.addManualItem('Продолжайте работать, пока задача не&nbsp;будет выполнена.'),
    this.addManualItem('Каждые 4&nbsp;периода таймера делайте длинный перерыв (15-20&nbsp;минут).')]);
    
    setChildren(manualDetails, [tasksHeaderTitle,manualList]);
    setChildren(manual, manualDetails);
    
    setChildren(pomodoroTasks, [tasks, manual]);

    setChildren(this.mainContainer, [window, pomodoroTasks]);

   // this.bindListeners();
  }

addManualItem(text)
{
  return el('li.manual__item', text);
}

  addTasksItem(classList, count, text) {
    const tasksItem = el('li', { class: classList });
    const countNumber = el('span.count-number', count);
    const button = el('button', { type: 'button', class: ['tasks__text','tasks__text_active'] }, text);
    const taskBbutton = el('button.tasks__button', { type: 'button' });
    setChildren(tasksItem, [countNumber, button, taskBbutton, this.addPopup()]);    
    return tasksItem;
  }

  addPopup() {
    const popup = el('div', { class: ['popup','popup_active'] });
    const buttonEdit = el('button', { type: 'button', class: ['popup__button','popup__edit-button'] }, 'Редактировать');
    const buttonDel = el('button', { type: 'button', class: ['popup__button','popup__delete-button'] }, 'Удалить');
    setChildren(popup, [buttonEdit, buttonDel]);
    return popup;
  }

  render() {
    mount(this.root, this.mainContainer);
  }
}


//const tomato = new Tomato();
//const controllerTomato = new ControllerTomato(tomato);

//const renderTomato = new RenderTomato(document.getElementById('main')/*, controllerTomato*/);
//renderTomato.render();