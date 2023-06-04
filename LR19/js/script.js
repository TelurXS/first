
const board = $("#board");
const playableCardHolder = $("#selected-card");
const counter = $("#counter");

const CARDS_NUMBER = 25;

const images = ["babuin.jpg", "blob.jpg", "camel.jpg", "canguru.jpg", "deer.jpg", "dog.jpg", "dolphin.jpg", "eeguana.webp",
    "elephant.webp", "fenec.webp", "fox.jpg", "hameleon.jpg", "hippo.jpg", "husky.jpg", "jiraph.jpg", "le_monk.webp", "limmor.jpg",
    "lion.jpg", "meerkat.webp", "monkey.jpg", "panda.jpg", "parrot.webp", "penguin.jpg", "pig.jpg", "rabbit.jpg", "red-panda.avif",
    "sheep.jpg", "tiger.jpg", "wolf.jpg", "zebra.jpg"];

let count = 0;
let currentCard = "";
let selectedImages = [];


const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index > -1) {
        array.splice(index, 1);
    }
}

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
    return array;
}

const random = (min, max) => {
    return parseInt((max - min) * Math.random() + min);
}

const generateBoard = (selectedImages) => {
    board.empty();
    selectedImages.forEach(element => {
        board.append(generateCard(element))
    })
}

const generatePlayableHolder = (image) => {
    currentCard = image;
    playableCardHolder.empty();
    playableCardHolder.append(generatePlayableCard(image))
}

const generateCard = (image) => {
    let element = $(`<div class="animal-card" card-value="${image}">
                           <img src="./img/${image}" class="animal-card-image">
                       </div>`);
    element.droppable({
        drop: function (event, ui) {
            let value = $(event.target).attr("card-value")
            let draggableValue = $(ui.draggable).attr("card-value")

            if (draggableValue === undefined)
                return;

            if (value === currentCard) {
                element.remove()
                removeFromArray(selectedImages, currentCard);
                addCount(1);

                if (count >= CARDS_NUMBER) {
                    showDialog("You Win!", "Congratulations!");
                }
                else {
                    regeneratePlayableCard();
                }

            }
            else {
               playableCardHolder.empty();
               showDialog("You lose!", "Press Ok to restart")
            }
        }
    })

    return element;
}

const generatePlayableCard = (image) => {
    let element = $(`<div class="animal-card" card-value="${image}">
                           <img src="./img/${image}" class="animal-card-image">
                       </div>`);
    element.draggable({ helper: "clone", opacity: 0.5 });

    return element;
}

const generateRandomImagesArray = (count) => {
    let result = [];

    while (result.length < count) {
        let image = images[random(0, images.length)];

        if (!result.includes(image)) {
            result.push(image);
        }
    }

    return result;
}

const showDialog = (title, message) => {
    let element = $(`<div id="dialog" title="${title}">
                        <p>${message}</p>
                    </div>`)

    element.dialog({
        open: function(event, ui) {
            //hide close button.
            $(this).parent().children().children('.ui-dialog-titlebar-close').hide();
        },
        buttons: [
            {
                text: "Ok",
                click: function() {
                    $( this ).dialog( "close" );
                    restart();
                }
            }
            ]});
}

const addCount = (value) => {
    count += value;
    counter.text(count);
}

const resetCounter = () => {
    counter.text(count);
}

const regenerateGame = () => {
    selectedImages = generateRandomImagesArray(CARDS_NUMBER);
    generateBoard(selectedImages);
    regeneratePlayableCard()
}

const regeneratePlayableCard = () => {
    let playableImage = selectedImages[random(0, selectedImages.length)];
    generatePlayableHolder(playableImage);
}

const restart = () => {
    currentCard = "";
    count = 0;
    selectedImages = [];
    regenerateGame();
    resetCounter();
}

$(document).ready(() => {
    restart()
})
