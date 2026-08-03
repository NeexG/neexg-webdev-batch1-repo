const user = {
    firstName: "John",
    lastName: "Doe",
    age: 29,
    isStudent: false,
    courses: ["Math", "Science", "History"],
    address: {
        street: {
            street1: "streeet 1 address",
            street2: "streeet 2 address",
        },
        city: "New York",
        zipCode: "10001"
    }
}

//Normal way to concantenate string
// const paragraph = "Hello My name is " + user.firstName + user.lastName + ". I am " + user.age + " years old." + " My home address is: " + user.address.street + user.address.city + user.address.zipCode;

// object destructured way
const { firstName, lastName, age, address } = user;
const { city, street, zipCode } = address;
const { street1, street2 } = street;

const paragraph = "Hello My name is " + firstName + lastName + ". I am " + age + " years old." + " My home address is: " + street1 + " " + street2 + " " + city + " " + zipCode;
console.log(paragraph);

// Template literals
const paragraph2 = `Hello my name is ${firstName} ${lastName}.
I am ${age} years old.
My home address is: ${street1},
${street2}, 
${city},
${zipCode}.`;
console.log(paragraph2);

// example of rest operators
function doSum(...z) {
    // let sum = x + y;
    let sum = 0;
    for (const arg of z) {
        sum += arg;
    }
    console.log(sum)
};

doSum(2, 5, 7, 6, 10, 89, 348, 43, 43);

