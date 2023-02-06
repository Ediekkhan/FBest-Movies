// 'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

    navElemArr[i].addEventListener("click", function () {

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("active");

    });

}


/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

    window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});


/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

    window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");

});


//Chisoms code from here

class movie {
    constructor(title, image, year) {
        this.title = title;
        this.image = image;
        this.year = year;
    }
}

let movies = [
    new movie(
        'The Northman',
        '',
        2022
    ),
    new movie(
        'Doctor Strange in the multiverse of madness',
        '',
        2022
    ),
    new movie(
        'Memory',
        '',
        2022
    ),
    new movie(
        'The unbearable weight of massive talent',
        '',
        2022
    ),
];
let search_value;


function gh() {
    return search_value = document.getElementById('search').value;
}

function findmovies() {
    movies.forEach((movie) => {
        const name = movie.title;
        let count = 0;
        name.forEach((character) => {
            gh().forEach((charact) => {
                if (charact === character) {
                    console.log(charact);
                }
            })
        })
    })
}

setInterval(gh, 100);


