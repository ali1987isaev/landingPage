const isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

const form = document.querySelector('[data-form-email]');
const email = document.querySelector('[data-email-input]');
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');

isMobile.any()
  ? $('.gallery__images, .instagram__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000})
  : $('.gallery__images, .instagram__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000});

document.querySelectorAll('.slick-arrow').forEach(arrow => arrow.remove());

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


