"use strict";

const headerSwiper = new Swiper(".header-swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: false,
  grabCursor: true,

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

const kaskoSwiper = new Swiper(".kasko-swiper", {
  slidesPerView: 3,
  spaceBetween: 16,
  freeMode: true,
  grabCursor: true,
});

const partnersSwiper = new Swiper(".partners-swiper", {
  slidesPerView: 2,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,

  // Auto play
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// Payment Method
const paymentMethodItems = document.querySelectorAll(".payment_method__item");

paymentMethodItems.forEach((item) => {
  item.addEventListener("click", () => {
    paymentMethodItems.forEach((el) => {
      el.classList.remove("selected");
    });
    item.classList.add("selected");
  });
});

// Payment Method
const calculatorBtns = document.querySelectorAll(".calculator_btns__item");
const tabPanels = document.querySelectorAll(".calculator .tab-panel");

calculatorBtns.forEach((item, index, allBtns) => {
  item.addEventListener("click", () => {
    allBtns.forEach((el) => {
      el.classList.remove("active");
    });
    tabPanels.forEach((el) => {
      el.classList.add("d-none");
    });
    item.classList.add("active");
    tabPanels[index].classList.remove("d-none");
  });
});

// Show Password toggle

const showPasswodIcon = document.querySelector(".show-password");
const showPasswodInput = document.querySelector('input[type="password"]');

showPasswodIcon &&
  showPasswodIcon.addEventListener("click", (e) => {
    showPasswodInput.type =
      showPasswodInput.type === "password" ? "text" : "password";

    if (e.target.classList.value.includes("show-eye")) {
      showPasswodIcon.classList.remove("show-eye");
      showPasswodIcon.classList.add("hide-eye");
    } else {
      showPasswodIcon.classList.remove("hide-eye");
      showPasswodIcon.classList.add("show-eye");
    }
  });

if (document.getElementById("myHeader")) {
  window.onscroll = function () {
    console.log("hello");
    myFunction();
  };

  let header = document.getElementById("myHeader");
  let sticky = header.offsetTop ;

  console.log(sticky);

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
}
