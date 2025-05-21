const openButton = document.getElementById('menu-open-button');
const closeButton = document.getElementById('menu-close-button');
const navMenu = document.querySelector('.nav-menu');
const blurOverlay = document.querySelector('.menu-blur-overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Open menu
openButton.addEventListener('click', () => {
  navMenu.classList.add('open');
  blurOverlay.classList.add('active');
});

// Close menu (on close button)
closeButton.addEventListener('click', () => {
  navMenu.classList.remove('open');
  blurOverlay.classList.remove('active');
});

// Close menu (on clicking nav links)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    blurOverlay.classList.remove('active');
  });
});

// Close menu (on clicking blur background)
blurOverlay.addEventListener('click', () => {
  navMenu.classList.remove('open');
  blurOverlay.classList.remove('active');
});


// swiper js initialization

const swiper = new Swiper('.slider-wrapper', {
  // // Optional parameters
  // direction: 'vertical',
  loop: true,
  grabCursor:true,
  spaceBetween: 25,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },

    640: {
      slidesPerView: 2
    },

    1000: {
      slidesPerView: 3
    },
  }

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});



const swipper = new Swiper('.mySwiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  reakpoints: {
    0: {
      slidesPerView: 1
    },

    640: {
      slidesPerView: 2
    },

    1000: {
      slidesPerView: 3
    },
  }
});
