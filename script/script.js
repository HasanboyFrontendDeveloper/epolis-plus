"use strict";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Auto play 
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// Payment Method
const paymentMethodItem = document.querySelectorAll('.payment_method__item');


console.log(paymentMethodItem);

