console.log('Portfolio');
const firstName = 'Soham';
console.log(firstName);

const navMenu = document.getElementById('nav-menu'),
  menuOpen = document.getElementById('menu-open'),
  menuClose = document.getElementById('menu-close')

if (menuOpen){
  menuOpen.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}
if (menuClose){
  menuClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}
const navLink = document.querySelectorAll('.menu-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction)),




  new Glider(document.querySelector('.glider'),{
  slidesToShow: 1,
  draggable: true,
  dots: '#dots',
  loop: true,
}),

$(document).ready(function () {
  var typed = new Typed('.typing', {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1500,
    reset: false,
  });

  sr.reveal('.about-content', { delay: 100 });

  sr.reveal('.services-content', { delay: 100 });

  sr.reveal('.skills-content', { delay: 100 });

  sr.reveal('.quotes', { delay: 100 });

  sr.reveal('.contact-content', { delay: 100 });

  // VanillaTilt.init(document.querySelector('.card'), {
  //   max: 8,
  //   speed: 500,
  // });
})





