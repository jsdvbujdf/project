'use strict'

class Person {
    constructor(name, age, ...mark) {
        this.name = name;
        this.age = age;
        this.mark = mark;
    }

    printInfo() {
            this.mark.forEach((item, i) => {
                console.log(i);
            });
        }
}

const first = new Person('Narvik', 19, 3, 4, 5, 5);
first.printInfo();