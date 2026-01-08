export class Task {
    #id;
    constructor(name, counter = 0) {
        console.log(name);
        console.log(counter);

        this.#id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.name = name;
        this.counter = counter;
    }

    setCounter() {
        this.counter++;
    }

    getCounter() {
        return this.counter;
    }

    getId() {
        return this.#id;
    }

    setName(newName) {
        this.name = newName;
    }
}
