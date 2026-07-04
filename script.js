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
let currentLang = "tr";

const translations = {
    tr: {
        title: "Kelime Öğren",
        button: "Yeni Kelime"
    },
    en: {
        title: "Learn Words",
        button: "New Word"
    },
    de: {
        title: "Wörter lernen",
        button: "Neues Wort"
    },
    fr: {
        title: "Apprendre les mots",
        button: "Nouveau mot"
    },
    ar: {
        title: "تعلم الكلمات",
        button: "كلمة جديدة"
    }
};

function setLang(lang){
    currentLang = lang;

    document.querySelector(".title").textContent = translations[lang].title;
    document.querySelector(".btn").textContent = translations[lang].button;

    // burası ileride JSON dil değişimi için
    console.log("Dil değişti:", lang);
}
