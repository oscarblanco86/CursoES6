// //Declarando
// class User {};

// //instancia de una clase
// const newUser = new User();

class user {
    //metodos
    greeting() {
        return 'Hello';
    }
};

const oscarmb86 = new user();
console.log(oscarmb86.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//Constructor

class user {
    //constructor
    constructor() {
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hola';
    }
}

const david = new user();

//this

class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('ana');
console.log(ana.greeting());

// Setters Getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak} ${this.name}`;
    }
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user('David',19);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);