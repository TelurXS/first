
let images = document.querySelectorAll(".img");

images.forEach(image => {
    image.onclick = e => {
        alert(image.getAttribute("src"))
    }
})

let links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("mouseover", e => {
        link.setAttribute("title", link.getAttribute("text"));
    });
    link.addEventListener("mouseout", e => {
        link.removeAttribute("title");
    });
})

let linksWIthText = document.querySelectorAll(".link-with-text");

linksWIthText.forEach(link => {

    const removeHrefInLinkText = (event) => {
        link.innerHTML = link.innerHTML.replace("(" + link.getAttribute("href")+ ")", "")
    }

    link.addEventListener("mouseout", removeHrefInLinkText);

    link.addEventListener("mouseover", e => {
        link.innerHTML = link.innerHTML + "(" + link.getAttribute("href")+ ")";

        link.removeEventListener("mouseout", removeHrefInLinkText);
    });
})