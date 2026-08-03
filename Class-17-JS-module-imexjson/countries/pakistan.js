const Laptop = {
    name: "HP elitbook",
    price: 100000,
    quantity: 5,
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    image: "image link"
}

const testLaptop = (laptop) => {
    console.log("test Laptop Test");

    const { name, price, quantity, description, image } = laptop;
    console.log(`Laptop Name: ${name}, Price: ${price}, Quantity: ${quantity}, Description: ${description}, Image: ${image}`);
}

export { Laptop, testLaptop };