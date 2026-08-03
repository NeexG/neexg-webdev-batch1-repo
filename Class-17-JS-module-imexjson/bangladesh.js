import { Laptop, testLaptop } from "./countries/pakistan.js";
import { Bike } from "./countries/nepal.js";

testLaptop(Laptop);
console.log(Bike)

fetch("./data.json")
    // fetch("https://jsonplaceholder.typicode.com/todos/150")
    .then(res => res.json())
    .then(data => console.log(data));