"use strict";
// 1.
const numbers = [1,-4,5,16,26,-3,97,123,-13,45,54,62];

const positiveNumbers = numbers.filter((num) => num > 0);
console.log(positiveNumbers);

const totalPositiveNumbers = positiveNumbers.reduce((total, currentValue) => {
    return total + currentValue;
},0);
console.log(totalPositiveNumbers);

// 2.
// >>>>>>>>>>>>> ეს ლოგიკა მოვიპოვე გუგლში გავაანალიზე და გამოვიყენე. არის კიდევ უფრო კარგად გასარჩევი 


const stringArray = ["vashli","banani","qoqosi","ananasi","vashli","banani","vashli","qoqosi","ananasi","qoqosi","qoqosi","ananasi"];

const countedStrings = stringArray.reduce((allStrings,string) => {
    const curr = allStrings[string] || 0;
    return {
        ...allStrings,
        [string]: curr + 1,
    };
}, {});
console.log(countedStrings);


// 4.

function addAsync (a , b) {
    return new Promise((resolve,reject) => {
        if(typeof a && typeof b == "number"){
            resolve(a * b);
        }else{
            reject("Parametrs are undefined");
        }
    });
};

addAsync(132,33)
  .then((value) => console.log(value))
  .catch((error) => console.log(error))


addAsync(234,15)
  .then((value) => console.log(value))
  .catch((error) => console.log(error))

addAsync(132,"dava")
  .then((value) => console.log(value))
  .catch((error) => console.log(error)) 
