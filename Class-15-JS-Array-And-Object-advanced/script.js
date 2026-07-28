// JavaScript array & object CRUD operations => Create, Read, Update, Delete

// const user = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 29,
//     isStudent: false,
//     courses: ["Math", "Science", "History"],
//     address: {
//         street: "123 Main St",
//         city: "New York",
//         zipCode: "10001"
//     }
// }

// console.log(user['firstName'], user.lastName); // read

// user.firstName = "Rakibul"; // update
// user.lastName = "Hasan"; // update

// console.log(JSON.parse(JSON.stringify(user))); // copy instace
// user.lastEducation = "SSC"; // create

// console.log(JSON.parse(JSON.stringify(user))); // copy instace

// delete user.isStudent; // delete operation

// // console.log(user['firstName'], user.lastName); // read using bracket and dot notation
// console.log(user);
// // console.log(user['firstName'], user.lastName);

// CRUD operation of array
const cart = [
    { id: 1, name: "Laptop", price: 50000, quantity: 2 },
    { id: 2, name: "Mouse", price: 1500, quantity: 3 },
    { id: 3, name: "Keyboard", price: 3000, quantity: 3 },
    { id: 4, name: "Monitor", price: 15000, quantity: 1 }
];

// console.log("total items", cart.length, cart);

// console.log(cart[0]);
// console.log(cart[1]);
// console.log(cart[2]);
// console.log(cart[3]);

// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i]);
// }

// cart.map(item => console.log(item));

// cart.forEach(item => console.log(item));

// cart[1].price = 999;

// console.log("Before: ", JSON.parse(JSON.stringify(cart)));

// cart.push({ id: 5, name: "Webcam", price: 2500, quantity: 1 }); // create
// console.log("After Push: ", JSON.parse(JSON.stringify(cart)));

// cart.pop(); // delete
// console.log("After Pop: ", JSON.parse(JSON.stringify(cart)));

// cart.pop(); // delete
// console.log("After Pop: ", JSON.parse(JSON.stringify(cart)));

// cart.pop(); // delete
// console.log("After Pop: ", JSON.parse(JSON.stringify(cart)));

// cart.push({ id: 5, name: "Webcam", price: 2500, quantity: 1 }); // create
// console.log("After Push: ", JSON.parse(JSON.stringify(cart)));

// cart.shift(); // delete
// console.log("After Shift: ", JSON.parse(JSON.stringify(cart)));

// cart.unshift({ id: 6, name: "Headphone", price: 1500, quantity: 3 }); // create
// console.log("After Unshift: ", JSON.parse(JSON.stringify(cart)));

// const products = [
//     { id: 1, name: "Laptop", price: 50000, quantity: 2, category: "electronics" },
//     { id: 2, name: "Napa", price: 1500, quantity: 3, category: "medicine" },
//     { id: 3, name: "Gas Tablet", price: 1500, quantity: 3, category: "medicine" },
//     { id: 4, name: "Rice", price: 3000, quantity: 3, category: "food" },
//     { id: 5, name: "Meter Tape", price: 15000, quantity: 1, category: "tools" }
// ];

// console.log(products);
// const filteredProduts = products.filter(product => product.category === "MeDicine".toLowerCase());
// console.log(filteredProduts)

const cartValue = cart.reduce((initial, item) => {
    return initial + item.price * item.quantity;
}, 0)
console.log(cartValue);