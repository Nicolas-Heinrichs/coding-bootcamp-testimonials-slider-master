const next = document.getElementById('next');
const prev = document.getElementById('prev');
const slide2 = document.querySelector('.slide2');
const slide1 = document.querySelector('.slide1');

next.addEventListener('click', () => {
    slide2.classList.toggle('next'),
 slide1.classList.toggle('show');
    })
prev.addEventListener('click', () => {
    slide2.classList.toggle('prev'),
    slide1.classList.toggle('show');
})