class Task {
    #id;
    constructor(text, count = 0) {
        const proto = Object.getPrototypeOf(this);
        if (proto.constructor === Task) {
            throw new Error('Abstract class');
        }
        this.#id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.text = text;
        this.count = count;
    }

    setCounter() {
        this.count++;
    }

    getCount() {
        return this.count;
    }

    getId() {
        return this.#id;
    }

    setText(newText) {
        this.text = newText;
    }

    getText() {
        return this.text;
    }
}

export class ImportantTask extends Task {
    importance = 'important';
    constructor(text, count = 0) {
        super(text, count);
    }

    getImportance() {
        return this.importance;
    }
};

export class StandardTask extends Task {
    importance = 'default';
    constructor(text, count = 0) {
        super(text, count);
    }

    getImportance() {
        return this.importance;
    }
};

export class UnimportantTask extends Task {
    importance = 'unimportant';
    constructor(text, count = 0) {
        super(text, count);
    }

    getImportance() {
        return this.importance;
    }
};