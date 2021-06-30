"use strict";
const list = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' },
];
const addUsername = (arr) => {
    const date = new Date();
    return arr.map((e) => {
        e.username = e.firstName.toLocaleLowerCase() + e.lastName[0].toLocaleLowerCase() + (date.getFullYear() - e.age);
        return e;
    });
};
console.log(addUsername(list));
