export class ControllerTomato {
    constructor(tomato) {
        this.tomato = tomato;
    }

    handleGetTime() {
        return this.tomato.getTime();
    }

    handleGetPause() {
        return this.tomato.getPause();
    }

    handleGetBigPause() {
        return this.tomato.getBigPause();
    }

    handleGetTasks() {
        return this.tomato.getBigPause();
    }

    handleAddTask(task) {
        return this.tomato.addTask(task);
    }

    handleAddActiveTask(id) {
        return this.tomato.addActiveTask(id);
    }

    handleFindTask(id) {
        return this.tomato.findTask();
    }

    handleStart() {
        return this.tomato.start();
    }

    handleIncreaseСounter(id) {
        return this.tomato.increaseСounter();
    }
}