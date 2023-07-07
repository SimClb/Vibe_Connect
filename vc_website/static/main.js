
// burger menu:

let burger = document.getElementById('burger');
let count = 0;

function burgerMenu() {
    if (count % 2 != 0) {
        document.getElementById('menu').style.right = '0px';
        burger.classList.add('cross');
    }
    else {
        document.getElementById('menu').style.right = '-150%';
        burger.classList.remove('cross');
    }
    count += 1;
}

