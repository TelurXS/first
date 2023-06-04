
const board = $("#board");
const card = $("#selected-card");

const CARDS_NUMBER = 25;

const images = ["canguru.jpg", "dog.jpg", "eeguana.webp", "elephant.webp", "fenec.webp", "fox.jpg", "le_monk.webp", "lion.jpg",
    "meerkat.webp", "parrot.webp", "red-panda.avif", "sheepjpg.jpg", "tiger.jpg"];


const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
}

const random = (min, max) => {
    return parseInt((max - min) * Math.random() + min);
}

const generateBoard = () => {
    for (let i = 1; i <= CARDS_NUMBER; i++) {
        board.append(generateCard())
    }
}

const generateCard = () => {
    let image = images[random(0, images.length - 1)]
    let element = $(`<div class="animal-card">
                           <img src="./img/${image}" class="animal-card-image">
                       </div>`);
    element.droppable({
        drop: function (event) {
            console.dir(event);
        }
    })

    return element;
}

$(document).ready(() => {
    card.draggable({ helper: "clone", opacity: 0.5 });
    generateBoard()
})
