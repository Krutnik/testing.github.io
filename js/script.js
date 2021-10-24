let bigImage = document.querySelector('.big-img');
let newImg = document.querySelector('#newImg');

function show() {
    if(bigImage.querySelector('img')) {
        console.log('yes');
        newImg.setAttribute('src', './img/nature-1.jpg');
        newImg.setAttribute('alt', 'nature');
        newImg.setAttribute('data-nature', "1");
        newImg.classList.add('img-start');
    } else {
        console.log('no');
    }
}
show();

function check() {
    if (newImg.getAttribute('data-nature') == 1) {
        imgOne.classList.add('borderRed');
    } else {
        imgOne.classList.remove('borderRed');
    }
}
check();
