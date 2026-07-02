const button = document.querySelector(".btn");
const spanish = document.querySelector(".eskelime");
const turkish = document.querySelector(".trkelime");

let words = [];

// JSON dosyasını oku
fetch("ispanyolca.json")
    .then(response => response.json())
    .then(data => {
        words = data;
    });

button.addEventListener("click", function () {

    const randomIndex = Math.floor(Math.random() * words.length);

    spanish.textContent = words[randomIndex].word;
    turkish.textContent = words[randomIndex].mean;

});