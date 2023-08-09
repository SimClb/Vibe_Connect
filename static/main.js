// navbar 
function scrollFunction() {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 100) {
        document.getElementById("backgroundNav").classList.add("background_nav__show");
    } else {
        document.getElementById("backgroundNav").classList.remove("background_nav__show");
    }
}

let ticking = false;
window.addEventListener('scroll', function (e) {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            scrollFunction();
            ticking = false;
        });
        ticking = true;
    }
});

// burger menu:

let burger = document.getElementById('burger');
let count = 0;

function burgerMenu() {
    if (count % 2 != 0) {
        document.getElementById('menu').style.right = '-25px';
        burger.classList.add('cross');
    }
    else {
        document.getElementById('menu').style.right = '-150%';
        burger.classList.remove('cross');
    }
    count += 1;
}

// dropdown menu mobile

let angle = document.getElementById('angleDownMobile');
let ul = document.getElementById('ulMenuMobile');
let counterMobile = 0;

function dropDownMenu() {
    if (counterMobile % 2 != 0) {
        angle.classList.add('angleDownMobile');
        ul.classList.add('showUlMobile');
    }
    else {
        angle.classList.remove('angleDownMobile');
        ul.classList.remove('showUlMobile');
    }
    counterMobile += 1;
}


function removeMenu() {
    document.getElementById('menu').style.right = '-150%';
    burger.classList.remove('cross');
    count += 1;

    if (counterMobile % 2 == 0) {

        angle.classList.remove('angleDownMobile');
        ul.classList.remove('showUlMobile');

        counterMobile += 1;
    }
}

// btn show 

let silverBtn = document.getElementById('silver');
let simpleBtn = document.getElementById('simple');
let mainBtn = document.getElementById('main');

let silvSpeech = document.getElementById('silBSpeech');
let simpSpeech = document.getElementById('simBSpeech');
let mainSpeech = document.getElementById('mainBSpeech');

let silverPrise = document.getElementById('silverPrise');
let simplePrise = document.getElementById('simplePrise');
let mainPrise = document.getElementById('mainPrise');

function silver() {
    
    silverBtn.classList.add('active');
    silvSpeech.classList.add('active');
    silverPrise.classList.add('active');

    simpleBtn.classList.remove('active');
    simpSpeech.classList.remove('active'); 
    simplePrise.classList.remove('active');

    mainBtn.classList.remove('active');
    mainSpeech.classList.remove('active');
    mainPrise.classList.remove('active');


}

function main() {

    mainBtn.classList.add('active');
    mainSpeech.classList.add('active');
    mainPrise.classList.add('active');

    simpleBtn.classList.remove('active');
    simpSpeech.classList.remove('active');
    simplePrise.classList.remove('active');

    silverBtn.classList.remove('active');
    silvSpeech.classList.remove('active');
    silverPrise.classList.remove('active');

}

function simple() {

    simpleBtn.classList.add('active');
    simpSpeech.classList.add('active');
    simplePrise.classList.add('active');

    silverBtn.classList.remove('active');
    silvSpeech.classList.remove('active');
    silverPrise.classList.remove('active');

    mainBtn.classList.remove('active');
    mainSpeech.classList.remove('active');
    mainPrise.classList.remove('active');

}