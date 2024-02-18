class Key {
    private readonly signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
    }
}

class Person {
    constructor(
        private key: Key,
    ) {
    }

    getKey() {
        return this.key;
    }
}

abstract class House {
    protected door: boolean = false;
    private tenants: Person[] = [];

    constructor(protected readonly key: Key) {
    }

    public comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
        } else {
            console.log('Door is closed');
        }
    }

    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(key: Key) {
        this.door = key.getSignature() === this.key.getSignature();
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};