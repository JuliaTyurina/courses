let header = document.querySelector('.header');
let burger = document.querySelector('.burger');
let menuLink = document.querySelectorAll('.nav__link');

burger.addEventListener('click', function () {

  header.classList.toggle("open");

  document.body.classList.toggle('stop-scroll');
})

menuLink.forEach(function(el) {
  el.addEventListener('click', function(){

    header.classList.remove('open');

    document.body.classList.remove('stop-scroll')
  })

});
