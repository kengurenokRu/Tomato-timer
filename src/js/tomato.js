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
        return this.#tasks;
    }

    addTask(task) {
        this.#tasks.push(task);
    }

    addActiveTask(id) {
        this.#activeTask = id;
    }

    start() {
        try {
            const timerId = setTimeout(() => {
                console.log('Таймер задачи завершен');
                this.increaseСounter(this.#activeTask);
                const task = this.#tasks.findIndex(item => item.id == this.#activeTask);
                if (task.getCounter() % 3 === 0)
                    setTimeout(() => {
                        console.log('Большой таймер отдыха');
                    }, this.tasks.bigPause * 1000);
                else setTimeout(() => {
                    console.log('Маленький таймер отдыха');
                }, this.tasks.pause * 1000);
            }, this.#time*1000);
        }
        catch {
            console.error("Нет активной задачи");
        }
    }

    increaseСounter(id) {
        this.#tasks.findIndex(item => item.id == id).setCounter();
    }
}