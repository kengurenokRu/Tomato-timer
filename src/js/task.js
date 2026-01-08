export class Task {
    #id;
    constructor(name, counter = 0) {
        this.#id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.name = name;
        this.counter = counter;
    }

    setCounter() {
        this.counter++;
    }

    getCounter() {
        this.counter;
    }

    getId() {
        this.#id;
    }

    setName(newName) {
        this.name = newName;
    }
}
