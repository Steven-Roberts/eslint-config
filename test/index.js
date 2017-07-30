'use strict';

const logger = require('logger');

/**
 * Class representing a person
 */
class Person {

    /**
     * Constructs a person with a name
     * @param {string} firstName - The first name of the person
     * @param {string} lastName - The last name of the person
     */
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    /**
     * Sets the age of the person in years
     * @param {number} age - The age in years
     */
    setAge (age) {
        this.age = age;
    }

    /**
     * Gets the full name of the person
     * @returns {string} The full name
     */
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

}

const person = new Person('Bob', 'McDonald');

let a = Math.random();

a += Date.now();

person.setAge(a);

if (a > Math.PI) {
    const obj = {
        a: 'hi',
        b: [Math.E, Math.cos(1), null],
        c: (x) => x ** x
    };

    logger.log(obj);
}

module.exports = {
    person,
    load: async (file) => {
        const data = await logger.cache(file);

        return data.length;
    }
};
