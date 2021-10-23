let linkImgOne = document.getElementById('linkImgOne');
let linkImgTwo = document.getElementById('linkImgTwo');
let linkImgThree = document.getElementById('linkImgThree');
let linkImgFour = document.getElementById('linkImgFour');
let linkImgFive = document.getElementById('linkImgFive');
let linkVideo = document.getElementById('linkVideo');

linkImgOne.onclick = function() {
    newImg.setAttribute('src', '/img/nature-1.jpg');
    newImg.setAttribute('data-nature', "1");
    imgOne.classList.add('borderRed');
    imgTwo.classList.remove('borderRed');
    imgThree.classList.remove('borderRed');
    imgFour.classList.remove('borderRed');
    imgFive.classList.remove('borderRed');

    showHidden()
}

linkImgTwo.onclick = function () {
    newImg.setAttribute('src', '/img/nature-2.jpg');
    newImg.setAttribute('data-nature', "2");
    imgTwo.classList.add('borderRed');
    imgOne.classList.remove('borderRed');
    imgThree.classList.remove('borderRed');
    imgFour.classList.remove('borderRed');
    imgFive.classList.remove('borderRed');

    showHidden()
}

linkImgThree.onclick = function () {
    newImg.setAttribute('src', '/img/nature-3.jpg');
    newImg.setAttribute('data-nature', "3");
    imgThree.classList.add('borderRed');
    imgOne.classList.remove('borderRed');
    imgTwo.classList.remove('borderRed');
    imgFour.classList.remove('borderRed');
    imgFive.classList.remove('borderRed');

    showHidden()
}

linkImgFour.onclick = function () {
    newImg.setAttribute('src', '/img/nature-4.jpg');
    newImg.setAttribute('data-nature', "4");
    imgFour.classList.add('borderRed');
    imgOne.classList.remove('borderRed');
    imgTwo.classList.remove('borderRed');
    imgThree.classList.remove('borderRed');
    imgFive.classList.remove('borderRed');

    showHidden()
}

linkImgFive.onclick = function () {
    newImg.setAttribute('src', '/img/nature-5.jpg');
    newImg.setAttribute('data-nature', "5");
    imgFive.classList.add('borderRed');
    imgOne.classList.remove('borderRed');
    imgTwo.classList.remove('borderRed');
    imgThree.classList.remove('borderRed');
    imgFour.classList.remove('borderRed');

    showHidden()
}

linkVideo.onclick = function () {
    newImg.classList.add('hidden');
    newImg.setAttribute('src', '/img/nature-5.jpg');
    newImg.setAttribute('data-nature', "6");
    newVideo.classList.remove('hidden');
    newVideo.setAttribute('src', '/video/nature.mp4');
    videoOne.classList.add('borderRed');
    imgFive.classList.remove('borderRed');
    imgOne.classList.remove('borderRed');
    imgTwo.classList.remove('borderRed');
    imgThree.classList.remove('borderRed');
    imgFour.classList.remove('borderRed');
}

function showHidden() {
    if(newImg.classList.contains('hidden') == true) {
        newImg.classList.remove('hidden');
    }
    if (newVideo.classList.contains('hidden') == false) {
        newVideo.classList.add('hidden');
        videoOne.classList.remove('borderRed');
    }
}