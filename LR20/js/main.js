
const generateLayout = () => {
    let element = $(`<div class="container">
                        <div class="row p-3">
                            <div id="display" class="btn btn-secondary">0</div>
                        </div>
                        <div id="buttons-holder" class="row"></div>
                    </div>`);

    root.append(element);
}

const generateButton = (data) => {
    let element = $(`<div class="col-3 mt-3 d-flex align-items-center justify-content-center">
                        <button class="btn btn-${data.color}">${data.text}</button>
                    </div>`);

    element.on("click", data.click)

    return element;
}

const generateButtons = (buttons) => {
    buttons.forEach(data => {
        let element = generateButton(data);
        buttonsHolder.append(element);
    });
}

const appendDisplay = (value) => {
    displayValue += value;
    display.text(displayValue);
}

const clearDisplay = () => {
    displayValue = "0";
    display.text(displayValue);
}

const calculatePercent = () => {
    displayValue = parseFloat(displayValue) / 100;
    display.text(displayValue);
}

const calculate = () => {
    displayValue = eval(displayValue);
    display.text(displayValue);
}

const negate = () => {
    displayValue = -parseFloat(displayValue);
    display.text(displayValue);
}

const root = $("#root");

generateLayout();

const buttonsHolder = $("#buttons-holder");
const display = $("#display");
let displayValue = "";

const buttons = [
    { text: "C", click: () => {clearDisplay()}, color: "primary" },
    { text: "+/-", click: () => {negate()}, color: "primary" },
    { text: "%", click: () => {calculatePercent()}, color: "primary" },
    { text: "/", click: () => {appendDisplay("/")}, color: "warning" },
    { text: "7", click: () => {appendDisplay("7")}, color: "secondary" },
    { text: "8", click: () => {appendDisplay("8")}, color: "secondary" },
    { text: "9", click: () => {appendDisplay("9")}, color: "secondary" },
    { text: "*", click: () => {appendDisplay("*")}, color: "warning" },
    { text: "4", click: () => {appendDisplay("4")}, color: "secondary" },
    { text: "5", click: () => {appendDisplay("5")}, color: "secondary" },
    { text: "6", click: () => {appendDisplay("6")}, color: "secondary" },
    { text: "-", click: () => {appendDisplay("-")}, color: "warning" },
    { text: "1", click: () => {appendDisplay("1")}, color: "secondary" },
    { text: "2", click: () => {appendDisplay("2")}, color: "secondary" },
    { text: "3", click: () => {appendDisplay("3")}, color: "secondary" },
    { text: "+", click: () => {appendDisplay("+")}, color: "warning" },
    { text: "0", click: () => {appendDisplay("0")}, color: "secondary" },
    { text: "00", click: () => {appendDisplay("00")}, color: "secondary" },
    { text: ".", click: () => {appendDisplay(".")}, color: "secondary" },
    { text: "=", click: () => {calculate()}, color: "warning" },


]
generateButtons(buttons)