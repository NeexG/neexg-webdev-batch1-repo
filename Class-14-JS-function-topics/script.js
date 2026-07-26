const users = [
    {
        name: "Prangon",
        bloodGroup: "AB+",

    },
    {
        name: "Siam",
        bloodGroup: "B+",

    },
    {
        name: "Rakibul",
        bloodGroup: "A+",

    },
];

// simple function syntax
// function name(){
//     return;
// }

// function add(x, y) {
//     console.log(x + y);
// }

// function doCalculation(x, y, funcname) {
//     switch (funcname) {
//         case "add":
//             return x + y;
//         case "sub":
//             return x - y;
//         case "mul":
//             return x * y;
//         case "div":
//             return x / y;
//     }
// }

// console.log(doCalculation(10, 5, "add"));
// console.log(doCalculation(50, 5, "sub"));
// console.log(doCalculation(100, 30, "mul"));
// console.log(doCalculation(100, 5, "div"));

// const result = doCalculation(10, 5, "add");
// console.log(result);

// default param function
// function doCalculation(x = 0, y = 0, funcname = "add") {
//     switch (funcname) {
//         case "add":
//             return x + y;
//         case "sub":
//             return x - y;
//         case "mul":
//             return x * y;
//         case "div":
//             return x / y;
//     }
// }

// console.log(doCalculation(10, 10));

// function testDefaultParam(x = 10, y = 10) {
//     console.log(x + y);
// }

// // testDefaultParam(60, 20);

console.log(bloodFinder1(users));

function bloodFinder1(users, bloodGroup = "A+") {
    const found = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].bloodGroup == bloodGroup) {
            found.push(users[i]);
        }
    }
    return found;
}

// const bloodFinder2 = (users, bloodGroup = "A+") => {
//     const found = [];
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].bloodGroup == bloodGroup) {
//             found.push(users[i]);
//         }
//     }
//     return found;
// }

// console.log(bloodFinder2(users));

// const test = "output";
// console.log(test);

// IFFE syntax
// (function (users, bloodGroup = "A+") {
//     const found = [];
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].bloodGroup == bloodGroup) {
//             found.push(users[i]);
//         }
//     }
//     console.log(found)
// })(users, "B+");

// function doSum(x, y) {
function doSum(...z) {
    // let sum = x + y;
    let sum = 0;
    for (const arg of z) {
        sum += arg;
    }
    console.log(sum)
};

doSum(2, 5, 7, 6, 10, 89, 348, 43, 43);