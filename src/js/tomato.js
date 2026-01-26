export const Tomato = (() => {
    let _instance;

    class Tomato {
        #time = 0.5;
        #activeTask = null;
        #pause = 0.1;
        #bigPause = 0.3;
        #tasks = [];
        #timerId;
        #miniTimerId;
        #bigTimerId;
        #timer;
        #deadline;
        #idTimer;

        constructor(fields) {
            if (_instance) return _instance;
            _instance = this;
            if (fields) {
                if ('time' in fields)
                    this.#time = fields.time;
                if ('pause' in fields)
                    this.#pause = fields.pause;
                if ('bigPause' in fields)
                    this.#bigPause = fields.bigPause;
                if ('tasks' in fields)
                    this.#tasks = fields.tasks;
            }
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

        getActiveTasks() {
            return this.#activeTask;
        }

        addTask(task) {
            this.#tasks.push(task);
        }

        addActiveTask(id) {
            this.#activeTask = id;
            this.#deadline = this.#time * 60 * 1000;
        }

        findTask(id) {
            for (let i = 0; i < this.#tasks.length; i++)
                if (this.#tasks[i].getId() == id) return this.#tasks[i];
            return null;
        }

        getTimeString() {
            const time = this.getTime(this.#time * 60 * 1000);
            return `${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
        }

        getTime = (timeText = null) => {
            let time;
            if (!timeText)
                time = this.#deadline;
            else
                time = timeText;
            this.#deadline -= 1000;
            const seconds = Math.floor(time / 1000 % 60);
            const minutes = Math.floor(time / (1000 * 60) % 60);
            return { time, minutes, seconds };
        };

        startTimer = () => {
            const time = this.getTime(this.#deadline);
            this.#idTimer = setTimeout(this.startTimer, 1000);            
            if (time.time < 0) {
                clearTimeout(this.#idTimer);
            } else
                this.#timer.textContent = `${time.minutes.toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`;
        }

        start(timer = null) {
            if (this.#activeTask) {
                if (timer)
                this.#timer = timer;   
                this.startTimer();
                this.#timerId = setTimeout(() => {
                    clearTimeout(this.#timerId);
                    console.log('Таймер задачи завершен');                    
                    clearTimeout(this.#idTimer);
                    this.increaseСounter(this.#activeTask);
                    const task = this.findTask(this.#activeTask);
                    if (task.getCount() % 3 === 0) {
                        this.#deadline = this.#bigPause * 60 * 1000;
                        this.startTimer();
                        this.#bigTimerId = setTimeout(() => {
                            console.log('Большой таймер отдыха');                            
                            clearTimeout(this.#bigTimerId);
                            clearTimeout(this.#idTimer);
                            this.#deadline = this.#time * 60 * 1000;
                            this.start();
                        }, this.#bigPause * 60 * 1000);
                    }
                    else {
                        this.#deadline = this.#pause * 60 * 1000;
                        this.startTimer();
                        this.#miniTimerId = setTimeout(() => {
                            console.log('Маленький таймер отдыха завершен');                            
                            clearTimeout(this.#miniTimerId);
                            clearTimeout(this.#idTimer);
                            this.#deadline = this.#time * 60 * 1000;
                            this.start();
                        }, this.#pause * 60 * 1000);
                    }
                }, this.#time * 60 * 1000);
                return true;
            }
            else {
                console.error("Нет активной задачи");
                return false;
            }
        }

        stop() {
            if (this.#activeTask) {
                clearTimeout(this.#miniTimerId);
                clearTimeout(this.#miniTimerId);
                clearTimeout(this.#bigTimerId);
                clearTimeout(this.#idTimer);
                return true;
            }
            else {
                console.error("Нет активной задачи");
                return false;
            }
        }

        increaseСounter(id) {
            this.findTask(id).setCounter();
        }
    }
    return Tomato;
})();