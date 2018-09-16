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
        /**
         * The first name
         * @readonly
         * @type {string}
         */
        this.firstName = firstName;

        /**
         * The last name
         * @readonly
         * @type {string}
         */
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
        c: (x) => x ** x,
        d: {
            d1: 'abc',
            d2: [
                'some text',
                'more text'
            ]
        },
        e: (q) => (q > Math.exp(q) ? {} : []),
        f: (x, y, z) => x || (y && (x || z))
    };

    logger.log(obj);
}

module.exports = {
    // Shorthand syntax for object literal
    person,

    // This is an async function!
    load: async (file) => {
        const data = await logger.cache(file);

        return data.length;
    },
    foo: (obj, ...stuff) => {
        const {first, second} = obj;

        if (first > second) {
            return [...first, ...second, ...stuff];
        }

        return [...second, ...first];
    },
    abc: (n) => {
        let q = 0;
        for (let i = 1; i < n; i++) {
            if (i > Math.E) {
                q *= i;
            }
        }

        return q % n;
    }
};
