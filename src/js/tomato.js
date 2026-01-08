export class Tomato {
    #time = 25;
    #activeTask = null;
    #pause = 5;
    #bigPause = 15;
    #tasks = [];

    constructor(fields) {
        if ('time' in fields)
            this.#time = fields.time;
        if ('pause' in fields)
            this.#pause = fields.pause;
        if ('bigPause' in fields)
            this.#bigPause = fields.bigPause;
        if ('tasks' in fields)
            this.#tasks = fields.tasks;
    }

    getTime() {
        return this.#time;
    }
    getPause() {
        return this.#pause;
    }
    getBigPause() {
        return this.#bigPause;
    }
    getTasks() {
        return JSON.stringify(this.#tasks);
    }

    addTask(task) {
        this.#tasks.push(task);
    }

    addActiveTask(id) {
        this.#activeTask = id;
    }

    findTask(id) {
        for (let i = 0; i < this.#tasks.length; i++)
            if (this.#tasks[i].getId() == id) return this.#tasks[i];
        return null;
    }

    start() {
        if (this.#activeTask) {
            const timerId = setTimeout(() => {
                clearTimeout(timerId);
                console.log('Таймер задачи завершен');
                this.increaseСounter(this.#activeTask);
                const task = this.findTask(this.#activeTask);
                console.log(task);
                if (task.getCounter() % 3 === 0) {
                    const bigTimerId = setTimeout(() => {
                        console.log('Большой таймер отдыха');
                        clearTimeout(bigTimerId);
                    }, this.#tasks.bigPause * 1000);
                }
                else {
                    const miniTimerId = setTimeout(() => {
                        console.log('Маленький таймер отдыха');
                        clearTimeout(miniTimerId);
                    }, this.#tasks.pause * 1000);
                }
            }, this.#time * 1000);
        }
        else {
            console.error("Нет активной задачи");
        }
    }

    increaseСounter(id) {
        this.findTask(id).setCounter();
    }
}