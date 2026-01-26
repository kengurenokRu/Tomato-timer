export class ControllerTomato {
    constructor(tomato) {
        this.tomato = tomato;
    }

   /* handleGetTime() {
        return this.tomato.getTime();
    }*/

    handleGetTimeString() {
        return this.tomato.getTimeString();
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

    handleGetActiveTask() {
    return this.tomato.getActiveTasks();
    }

    handleFindTask(id) {
        return this.tomato.findTask(id);
    }

    handleStart(timer) {
        return this.tomato.start(timer);
    }

    handleStop() {
        return this.tomato.stop();
    }

    handleIncreaseСounter(id) {
        return this.tomato.increaseСounter();
    }
}