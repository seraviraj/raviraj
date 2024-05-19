/* ================ toggle icon Navbar ====================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}


/* ================ Scroll Sections actie link ====================== */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  /* ================ sticky navbar ====================== */
  // let header = document.querySelector('header');
  // header.classList.toggle('sticky', window.scrollY > 100 );

  /* ================ remove toggle icon and Navbar when clicke navbar link (scroll) ====================== */

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

};

/* ================ swiper ================================= */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* ================ Scroll Reveal ============================ */

  ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .service-container, .projects-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1', { origin: 'left'});
ScrollReveal().reveal('.home-content p', { origin: 'right'});

  /* ================ Type Reveal ============================ */
  const typed = new Typed('.multiple-text',{
    strings: ['Full Stack Developer', 'Front End Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  })