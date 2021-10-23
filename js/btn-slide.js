let btnSlideLeft = document.getElementById('btnLeft');
let btnSlideRight = document.getElementById('btnRight');

let imgOne = document.querySelector('#imgOne');
let imgTwo = document.querySelector('#imgTwo');
let imgThree = document.querySelector('#imgThree');
let imgFour = document.querySelector('#imgFour');
let imgFive = document.querySelector('#imgFive');

let newVideo = document.querySelector('#newVideo');
let videoOne = document.querySelector('#videoOne');

btnSlideLeft.onclick = function () {
    if (newImg.getAttribute('src') == '/img/nature-1.jpg' && newImg.getAttribute('data-nature') == 1) {
        newImg.setAttribute('data-nature', "6");
        newImg.classList.add('hidden');
        newVideo.classList.remove('hidden');
        videoOne.classList.add('borderRed');
        newVideo.setAttribute('src', '/video/nature.mp4');
    } else if (newImg.getAttribute('src') == '/img/nature-1.jpg' && newImg.getAttribute('data-nature') == 6) {
        newVideo.classList.add('hidden');
        videoOne.classList.remove('borderRed');
        newVideo.removeAttribute('src');
        newImg.classList.remove('hidden');
        newImg.setAttribute('src', '/img/nature-5.jpg');
        newImg.setAttribute('data-nature', "5");
    } else if (newImg.getAttribute('src') == '/img/nature-5.jpg' && newImg.getAttribute('data-nature') == 5) {
        newImg.setAttribute('src', '/img/nature-4.jpg');
        newImg.setAttribute('data-nature', "4");
    } else if (newImg.getAttribute('src') == '/img/nature-4.jpg' && newImg.getAttribute('data-nature') == 4) {
        newImg.setAttribute('src', '/img/nature-3.jpg');
        newImg.setAttribute('data-nature', "3");
    } else if (newImg.getAttribute('src') == '/img/nature-3.jpg' && newImg.getAttribute('data-nature') == 3) {
        newImg.setAttribute('src', '/img/nature-2.jpg');
        newImg.setAttribute('data-nature', "2");
    } else if (newImg.getAttribute('src') == '/img/nature-2.jpg' && newImg.getAttribute('data-nature') == 2) {
        newImg.setAttribute('src', '/img/nature-1.jpg');
        newImg.setAttribute('data-nature', "1");
    }

    function check() {
        if (newImg.getAttribute('data-nature') == 1) {
            imgOne.classList.add('borderRed');
        } else {
            imgOne.classList.remove('borderRed');
        }
    }
    check();

    function checkTwo() {
        if (newImg.getAttribute('data-nature') == 2) {
            imgTwo.classList.add('borderRed');
        } else {
            imgTwo.classList.remove('borderRed');
        }
    }
    checkTwo();

    function checkThree() {
        if (newImg.getAttribute('data-nature') == 3) {
            imgThree.classList.add('borderRed');
        } else {
            imgThree.classList.remove('borderRed');
        }
    }
    checkThree();

    function checkFour() {
        if (newImg.getAttribute('data-nature') == 4) {
            imgFour.classList.add('borderRed');
        } else {
            imgFour.classList.remove('borderRed');
        }
    }
    checkFour();

    function checkFive() {
        if (newImg.getAttribute('data-nature') == 5) {
            imgFive.classList.add('borderRed');
        } else {
            imgFive.classList.remove('borderRed');
        }
    }
    checkFive();
}

btnSlideRight.onclick = function () {
    if (newImg.getAttribute('src') == '/img/nature-1.jpg' && newImg.getAttribute('data-nature') == 1) {
        newImg.setAttribute('src', '/img/nature-2.jpg');
        newImg.setAttribute('data-nature', "2");
    } else if (newImg.getAttribute('src') == '/img/nature-2.jpg' && newImg.getAttribute('data-nature') == 2) {
        newImg.setAttribute('src', '/img/nature-3.jpg');
        newImg.setAttribute('data-nature', "3");
    } else if (newImg.getAttribute('src') == '/img/nature-3.jpg' && newImg.getAttribute('data-nature') == 3) {
        newImg.setAttribute('src', '/img/nature-4.jpg');
        newImg.setAttribute('data-nature', "4");
    } else if (newImg.getAttribute('src') == '/img/nature-4.jpg' && newImg.getAttribute('data-nature') == 4) {
        newImg.setAttribute('src', '/img/nature-5.jpg');
        newImg.setAttribute('data-nature', "5");
    } else if (newImg.getAttribute('src') == '/img/nature-5.jpg' && newImg.getAttribute('data-nature') == 5) {
        newImg.setAttribute('data-nature', "6");
        newImg.classList.add('hidden');
        newVideo.classList.remove('hidden');
        videoOne.classList.add('borderRed');
        newVideo.setAttribute('src', '/video/nature.mp4');
    } else if (newImg.getAttribute('src') == '/img/nature-5.jpg' && newImg.getAttribute('data-nature') == 6) {
        newVideo.classList.add('hidden');
        videoOne.classList.remove('borderRed');
        newVideo.removeAttribute('src');
        newImg.classList.remove('hidden');
        newImg.setAttribute('src', '/img/nature-1.jpg');
        newImg.setAttribute('data-nature', "1");
    }

    function check() {
        if (newImg.getAttribute('data-nature') == 1) {
            imgOne.classList.add('borderRed');
        } else {
            imgOne.classList.remove('borderRed');
        }
    }
    check();

    function checkTwo() {
        if (newImg.getAttribute('data-nature') == 2) {
            imgTwo.classList.add('borderRed');
        } else {
            imgTwo.classList.remove('borderRed');
        }
    }
    checkTwo();

    function checkThree() {
        if (newImg.getAttribute('data-nature') == 3) {
            imgThree.classList.add('borderRed');
        } else {
            imgThree.classList.remove('borderRed');
        }
    }
    checkThree();

    function checkFour() {
        if (newImg.getAttribute('data-nature') == 4) {
            imgFour.classList.add('borderRed');
        } else {
            imgFour.classList.remove('borderRed');
        }
    }
    checkFour();

    function checkFive() {
        if (newImg.getAttribute('data-nature') == 5) {
            imgFive.classList.add('borderRed');
        } else {
            imgFive.classList.remove('borderRed');
        }
    }
    checkFive();
}