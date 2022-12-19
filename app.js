const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if (direction == 'next') {
        index++;
        if (index == totalImages) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalImages - 1;
        } else {
            index--;
        }
    }

    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
    }
    images[index].classList.add('main');
}


const prev2 = document.querySelector('.prev2');
const next2 = document.querySelector('.next2');
const images2 = document.querySelector('.carousel2').children;
const totalImages2 = images2.length;
let index2 = 0;

prev2.addEventListener('click', () => {
    nextImage2('next2');
})

next2.addEventListener('click', () => {
    nextImage2('prev2');
})

function nextImage2(direction) {
    if (direction == 'next2') {
        index2++;
        if (index2 == totalImages2) {
            index2 = 0;
        }
    } else {
        if (index2 == 0) {
            index2 = totalImages2 - 1;
        } else {
            index2--;
        }
    }

    for (let i = 0; i < images2.length; i++) {
        images2[i].classList.remove('main');
    }
    images2[index2].classList.add('main');
}



const prev3 = document.querySelector('.prev3');
const next3 = document.querySelector('.next3');
const images3 = document.querySelector('.carousel3').children;
const totalImages3 = images3.length;
let index3 = 0;

prev3.addEventListener('click', () => {
    nextImage3('next3');
})

next3.addEventListener('click', () => {
    nextImage3('prev3');
})

function nextImage3(direction) {
    if (direction == 'next3') {
        index3++;
        if (index3 == totalImages3) {
            index3 = 0;
        }
    } else {
        if (index3 == 0) {
            index3 = totalImages3 - 1;
        } else {
            index3--;
        }
    }

    for (let i = 0; i < images3.length; i++) {
        images3[i].classList.remove('main');
    }
    images3[index3].classList.add('main');
}

