
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
    window.scrollY >= 10
        ? header.classList.add("active")
        : header.classList.remove("active");
});

/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    window.scrollY >= 500
        ? goTopBtn.classList.add("active")
        : goTopBtn.classList.remove("active");
});


// function drizzy()
class movie {
    constructor(title, image, year) {
        this.title = title;
        this.image = image;
        this.year = year;
    }
}

let movies = [
    new movie("The Northman", "", 2022),
    new movie("Doctor Strange in the multiverse of madness", "", 2022),
    new movie("Memory", "", 2022),
    new movie("The unbearable weight of massive talent", "", 2022),
];
let search_value;
let search_results = [];

function gh() {
    return (search_value = document.getElementById("search").value);
}

function findmovies() {
    movies.forEach((movie) => {
        const name = movie.title;
        for (let character of gh()) {
            for (let charact of name) {
                if (charact === character) {
                    console.log(charact);
                }
            }
        }
    });
}



function searchveri(result) {
    for (const item of search_results) {
        if (result === item) {
            return true;
        }
    }
}

function findmovies2() {
    movies.forEach((movie) => {
        const name = movie.title;
        const r_date = movie.year;
        if (name.includes(gh())) {
            if (searchveri(movie) != true) {
                search_results.push(movie);
                return search_results;
            }
            if (gh.includes(r_date)&&gh.length===4&&gh()[0]) {
                
            }
        }
    });
}

function generate_results(){
    search_results.forEach((item)=>{

    })
}

setInterval(gh, 100);

//function drizzy_is_vexed_here()
//function kanex()

let playBtn = document.querySelector(".play");
let closeBtn = document.querySelector(".close");
let video = document.querySelector(".video-box");
let myVideo = document.querySelector("#my-video");

playBtn.addEventListener("click", playfunction);
closeBtn.addEventListener("click", closefunction);

function playfunction() {
    video.style.visibility = "visible";
    myVideo.play();
}

function closefunction() {
    video.style.visibility = "hidden";
    myVideo.pause();
}
