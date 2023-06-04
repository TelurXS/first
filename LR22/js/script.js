
const seconds = (total) => {
    return total % 60;
}
console.log("seconds: " + seconds(143))

const perimeter = (side, count) => {
    return side * count;
}
console.log("perimeter: " + perimeter())

const printTo = (n) => {
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
            continue;
        }

        if (i % 3 === 0) {
            console.log("fizz");
            continue;
        }

        if (i % 5 === 0) {
            console.log("buzz");
            continue;
        }

        console.log(i)
    }
}
printTo(20);

const calculate = (a, b, c) => {
    return (a + b + c) / 3;
}
console.log("avarage: " + calculate(2, 6, 3))

const isDivisibleWithIf = (n, x, y) => {
    if (n < 0 || x < 0 || y < 0)
        return false;

    if (n % x === 0 && n % y === 0)
        return true;

    return false;
}

const isDivisibleWithTO = (n, x, y) => {
    if (n < 0 || x < 0 || y < 0)
        return false;

    return (n % x === 0 && n % y === 0) ? true : false;
}

const isDivisible = (n, x, y) => {
    if (n < 0 || x < 0 || y < 0)
        return false;

    return (n % x === 0 && n % y === 0);
}
console.log("Is divisible: " + isDivisible(60, 5, 3));

// 6
let array = [1, 3, 5, 6, 2, 8, 3, 6, 2, 8];
let sum = 0;

console.log(array)

console.log("Max: " + Math.max(...array));
console.log("Min: " + Math.min(...array));
array.forEach(element => { sum += element; })

console.log("Sum: " + sum);
console.log("Avarage: " + sum / array.length);

array.forEach(element => { if (element % 2) console.log(element)})

// 7

let matrix = [
                        [-1, 4, 6, 3, -4],
                        [6, 2, 4, -6, 1],
                        [-2, 2, 4, 5, 2],
                        [1, 1, -2, -4, 4],
                        [4, -2, 3, 5, 4],
                    ]

for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
        if (x === y) {
            let element = matrix[y][x];

            if (element < 0) {
                matrix[y][x] = 0;
            }
            if (element > 0) {
                matrix[y][x] = 1;
            }
        }
    }
}

console.log(matrix)

// 8

const add = (x, y) => { return x + y; }
const remove = (x, y) => { return x - y; }
const multiply = (x, y) => { return x * y; }
const divide = (x, y) => {
    if (y === 0)
        return "Error";

    return x / y;
}

const calculator = () => {
    while (true) {
        let input = prompt("Input action: ");
        let x = parseFloat(prompt("Input X:"))
        let y = parseFloat(prompt("Input Y:"))
        let result = 0;

        switch (input) {
            case "add": result = add(x, y); break;
            case "rem": result = remove(x, y); break;
            case "mul": result = multiply(x, y); break;
            case "div": result = divide(x, y); break;
            case "e": return;
            default: alert("Wrong action");
        }

        alert("Result: " + result);
    }
}

//calculator();


// 10

let array2 = [2, "Text", 5, true, 3, "Test"];

const reverseAndPow = (array) => {
    let result = array.reverse();

    result.forEach((element, index) => {
        if (typeof element === "number") {
            result[index] = element * element;
        }
    })

    return result;
}

console.log(reverseAndPow(array2));

// 11

let array3 = [1, 2, 2, 4, 3, 3, 5, 6, 4, 2, 4, 7, 2];

const getDistinct = (array) => {

    let result = [];

    array.forEach(element => {
        if (!result.includes(element)) {
            result.push(element);
        }
    })

    return result;
}

console.log(getDistinct(array3));