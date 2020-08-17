$('.gallery__images, .instagram__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});

document.querySelectorAll('.slick-arrow').forEach(arrow => arrow.remove());


const form = document.querySelector('[data-form-email]');
const email = document.querySelector('[data-email-input]');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', e=> {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
})

form.addEventListener('submit', e=> {
  e.preventDefault();
  console.log(email.value);
  form.reset()
})


