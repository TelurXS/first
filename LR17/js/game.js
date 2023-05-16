

const randomRange = (min, max) => {
    return parseInt(((max - min) * Math.random()) + min);
}

const getRangeMessage = (input, number) => {
    let difference = Math.abs(number - input);

    if (difference > 0 && difference < 5)
        return "Дуже гаряче";
    if (difference < 10)
        return "Гаряче";
    if (difference < 20)
        return "Тепло";
    if (difference < 40)
        return "Холодно";
    if (difference < 100)
        return "Дуже холодно";
}

let count = 0;
let number = randomRange(0, 100);

console.log("(Debug) number is: " + number)

while (true) {
    count++;

    let input = parseInt(prompt("Input your number: "));
    let result = getRangeMessage(input, number);
    let now = new Date();

    console.log(now.toLocaleDateString() + " " + now.toLocaleTimeString() + " Input: " + input + " Count: " + count + " Result:" + result)

    if (input === number) {
        let restart = confirm("You win, number is " + number + ". Total count: " + count);
        if (restart)
            location.reload();
        break;
    }
    else {
        alert("Result: " + result + ". Try another one")
    }

}
