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
