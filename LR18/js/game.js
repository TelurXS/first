const MILLISECONDS_IN_SECONDS = 1000;
const CARDS_COUNT = 25;
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 32;
const TIME = 60;

let currentNumber = 1;
let wins = [];

const timer = {
    time: TIME,
    interval: null,
    onTick: (time) => { console.log(time) },
    onEnd: () => { console.log("End!") },
    start: function () {
        this.interval = setInterval(
            () => {
                this.time -= 1;
                this.onTick(this.time);

                if (this.time <= 0) {
                    this.stop();
                }
            },
            MILLISECONDS_IN_SECONDS);
    },
    stop: function () {
        if(this.interval == null)
            return;

        clearInterval(this.interval);
        this.onEnd();
    }
}

const range = (start, end, step = 1) => {
    const result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
}

const random = (min, max) => {
    return parseInt((max - min) * Math.random() + min);
}

const randomColor = () => {
    const colors = [ "red", "green", "blue", "black", "purple", "deeppink"];
    return colors[random(0, colors.length - 1)]
}

const generateBoard = (numbers) => {
    let board = $("#board");
    board.empty();

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        board.append(generateCard(number));
    }
}

const generateCard = (number) => {
    let element = $(`<div class='card'>${number}</div>`);
    element.attr("number", number);
    element.css({ "font-size": random(MIN_FONT_SIZE, MAX_FONT_SIZE),
                    "color": randomColor() });

    element.on("click", onCardClick);

    return element;
}

const onCardClick = (event) => {
    let target = $(event.target);
    let number = parseInt(target.attr("number"));
    
    if (number === currentNumber) {

        if (currentNumber === CARDS_COUNT) {
            endGameWithWin();
            return;
        }

        target.off("click", onCardClick);
        target.addClass("not-active");
        currentNumber++;
    }
    else {
        endGameWithLose();
    }
}

const writeConclusion = (value) => {
    $("#conclusion").text(value);
}

const markAllCardAsNotActive = () => {
    let cards = $(".card");
    cards.off("click", onCardClick);
    cards.addClass("not-active");
}

const restart = () => {
    timer.stop();
    timer.time = TIME;
    writeConclusion("");
    let numbers = shuffle(range(1, CARDS_COUNT));
    generateBoard(numbers);
    currentNumber = 1;
    timer.start();
}

const endGameWithLose = (stopTimer = true) => {
    if (stopTimer)
        timer.stop();
    markAllCardAsNotActive();
    writeConclusion("You lose! Press 'Restart button to play again.'")
}

const endGameWithWin = () => {
    timer.stop();
    markAllCardAsNotActive();
    writeConclusion("You win! Congratulations!");
    wins.push(timer.time);
    redrawWinsTable();
}

const redrawWinsTable = () => {
    let tbody = $("#wins");
    tbody.empty();
    let max = Math.max(...wins);
    wins.forEach((element, index) => {
        if (element === max) {
            tbody.append($(`<tr class="best"><td>Game ${index}</td><td>${element}</td></tr>`));
        }
        else {
            tbody.append($(`<tr><td>Game ${index}</td><td>${element}</td></tr>`));
        }
    })
}

$(document).ready( () => {
    const label = $("#timer");
    timer.onTick = (time) => { label.text(time) };
    timer.onEnd = () => { endGameWithLose(false) }

    restart();
    $("#restart").on("click", restart);
})