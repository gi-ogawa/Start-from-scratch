const btn =
document.getElementById("menuBtn");
const menu =
document.getElementById("menu");

btn.addEventListener("click",() =>
{
  menu.classList.toggle("show");
});

const modal = document.querySelector('.js-modal'),
      open = document.querySelector('.js-modal-open'),
      close = document.querySelector('.js-modal-close');

function modalOpen(){
  modal.classList.add('is-active');
}
open.addEventListener('click',modalOpen);


function modalClose(){
  modal.classList.remove('is-active');
  
}
close.addEventListener('click',modalClose);

function modalOut(e){
  if(e.target == modal){
    modal.classList.remove('is-active');
  }
}
addEventListener('click',modalOut);


const images = document.querySelectorAll('img');
const navContainer = document.querySelector('.nav-container');
const totalImages = images.length
let imageIndex = 0;
let interval;
const button = document.createElement('button');
button.classList.add('nav-btn');
navContainer.appendChild(button);
for (let i = 0; i < totalImages; i++){
  const button = document.createElement('button');
  button.classList.add('nav-btn');
  navContainer.appendChild(button);
}

const buttons = document.querySelectorAll('.nav-btn');
buttons.forEach(() => {

});

buttons.forEach((button,index) => {
  button.addEventListener('click',() => {
    imageIndex = index;
    updateSlider();
  });
});

function updateSlider() {
  images.forEach(image => {
    image.classList.remove('image-active');
  });

  buttons.forEach(button => {
    button.classList.remove('btn-active');
  });

  images[imageIndex].classList.add('image-active');
  buttons[imageIndex].classList.add('btn-active');
}

function nextImage(){
  imageIndex++;
  if (imageIndex > totalImages - 1){
    imageIndex = 0;
  }
  updateSlider();
}

function autoPlay(){
  interval = setInterval(nextImage, 3000);
}

function resetInterval(){
  clearInterval(interval);
  autoPlay();
}

buttons.forEach((button,index) => {
  button.addEventListener('click',() => {
    imageIndex = index;
    updateSlider();
    resetInterval();
  });
});

updateSlider();
autoPlay();