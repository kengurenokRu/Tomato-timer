export class Task {
        constructor (name, counter = 0) {
        this.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.name = name;
        this.counter = counter;
    }

    setCounter (newCounter) {
        this.counter = newCounter;
    }

    setName (newName) {
        this.name = newName;
    }
}

