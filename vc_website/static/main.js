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


