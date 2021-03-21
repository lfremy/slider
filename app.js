const images = document.querySelectorAll('img');
const slideNumber = images.length
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
let count = 0;

function nextSlide() {
    images[count].classList.remove('active');
    
    if(count < slideNumber -1){
        count++
    } else {
        count = 0;
    }

    images[count].classList.add('active');
}

next.addEventListener('click', nextSlide);

function previousSlide () {
    images[count].classList.remove('active');
    if(count >0){
        count--;
    } else {
        count = slideNumber -1;
    }

    images[count].classList.add('active');
}

previous.addEventListener('click', previousSlide);
    