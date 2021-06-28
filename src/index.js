import * as basicLightbox from 'basiclightbox';
// zadanie 1
class StringBuilder {
    constructor(baseString=""){
        this.value = baseString;
    }
    append(str) {
        this.value = this.value + str;
        return this;
    }
    prepend(str) {
        this.value = str + this.value;
        return this;
    }
    pad(str) {
        this.value = str + this.value + str;
        return this;
    }
}

let builder = new StringBuilder(".");
builder
.append('^')
.prepend('^')
.pad('=');
console.log(builder);

//zadanie 2

const createBoxes = (amount) => {
    const boxes = document.getElementById('boxes');
    const random_rgba = () => {
        var o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
    let hw = 30;
    for (let i = 0; i < amount; i++) {
        let div = document.createElement('div');
        div.style.width = `${hw}px`;
        div.style.height = `${hw}px`;
        div.style.backgroundColor = random_rgba();
        boxes.appendChild(div);
        hw = hw + 10
    }
    return boxes
}

const destroyBoxes = () => {
    boxes = document.querySelector('#boxes');
    boxes.parentNode.removeChild(boxes);
}

const create = document.querySelector("button[data-action=create]");
const destroy = document.querySelector("button[data-action=destroy]");

create.addEventListener('click', () => {
    input = document.querySelector(".js-input");
    createBoxes(input.value);
});

destroy.addEventListener('click', () => {
    destroyBoxes();
});

// zadanie 3

const key = '19010606-6dd2e6ded2aa307732f1e4435';

const fetchPhotos = (value) => {
    let results = document.querySelector(".results");
    let ul = document.createElement("ul");
    const instance = basicLightbox.create(`
    <div class="modal">
        <img source=${hit.largeImageURL}/>
    </div>
`)
    results.innerHTML = "";
    fetch(`https://pixabay.com/api/?key=${key}&q=${value}&image_type=photo`)
        .then(response => response.json())
        .then(data => data.hits.map((hit) => {
            console.log(hit);
            let element = document.createElement("li");
            element.innerHTML = `<a href=${hit.largeImageURL}><img src=${hit.webformatURL} data-source=${hit.largeImageURL} alt="opis"/></a>`;
            ul.appendChild(element);
            element.addEventListener("click", (e) => {
                e.preventDefault();
                instance.show();
            })
        }))
        .catch(function (err) {
            console.warn('Something went wrong.', err);
        });
        results.appendChild(ul);
};

const searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = document.querySelector("input[name='query']");
    console.log(input.value);
    fetchPhotos(input.value);
});
