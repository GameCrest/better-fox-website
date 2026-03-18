let infFox = "https://i.redd.it/n77ubzohd5051.jpg"

const options = {
    root: null,
    rootMargin: "0px",
};

let foxes = document.getElementById("foxes")

const observer = new IntersectionObserver((events) => {
    if (events[0].intersectionRatio <= 0) return;


    let newFox = document.createElement('img')

    newFox.src = infFox

    foxes.appendChild(newFox)
}, options);

observer.observe(document.getElementById("bottom"))

