
// 1
let images = document.querySelectorAll(".img");

images.forEach(image => {
    image.onclick = e => {
        alert(image.getAttribute("src"))
    }
})


// 2
let links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("mouseover", e => {
        link.setAttribute("title", link.getAttribute("text"));
    });
    link.addEventListener("mouseout", e => {
        link.removeAttribute("title");
    });
})


// 3 + 4
let linksWIthText = document.querySelectorAll(".link-with-text");

linksWIthText.forEach(link => {

    const removeHrefInLinkText = (event) => {
        link.innerHTML = link.innerHTML.replace("(" + link.getAttribute("href")+ ")", "")
    }

    link.addEventListener("mouseout", removeHrefInLinkText);

    link.addEventListener("mouseover", e => {
        link.innerHTML = link.innerHTML + "(" + link.getAttribute("href")+ ")";

        //link.removeEventListener("mouseout", removeHrefInLinkText);
    });
})

// 5
let inputsWithHeader = document.querySelectorAll(".input-with-header");
let header = document.getElementById("demo");

inputsWithHeader.forEach(input => {
    input.addEventListener("blur", event => {
        header.innerText = event.target.value;
    })
})

// 6
let inputsWithAlert = document.querySelectorAll(".input-with-alert");

inputsWithAlert.forEach(input => {

    const alertValue = (event) => {
        alert(event.target.value);

        input.removeEventListener("click", alertValue);
    }

    input.addEventListener("click", alertValue);
})

// 7
let headersWithNumber = document.querySelectorAll(".header-with-number");

headersWithNumber.forEach(header => {
    header.addEventListener("click", event => {
        let number = parseInt(header.innerText);
        header.innerText = number * number;
    })
})

// 8
let validableInputs = document.querySelectorAll(".validable");

validableInputs.forEach(input => {
    input.addEventListener("blur", event => {
        let targetLength = parseInt(input.getAttribute("data-length")) ?? 10;
        let length = input.value.length;

        if (length < targetLength) {
            input.classList.add("success");
            input.classList.remove("error");
        }
        else {
            input.classList.remove("success");
            input.classList.add("error");
        }
    })
})

// 9
let squares = document.querySelectorAll(".square");

squares.forEach(square => {

    square.style.backgroundColor = "gold";

    square.addEventListener("click", event => {
        let previousColor = square.getAttribute("previous-color");
        let currentColor = square.style.backgroundColor;
        console.log(square.style)
        square.style.backgroundColor = previousColor;
        square.setAttribute("previous-color", currentColor);
    })
})