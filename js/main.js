if (document.querySelector(".landingSwiper")) {
  var swiper = new Swiper(".landingSwiper", {
    slidesPerView: 1,
      loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

if (document.querySelector(".swiper-news")) {
  var swiper = new Swiper(".swiper-news", {
    spaceBetween: 30,
    effect: "fade",
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
   
  });
}

if (document.querySelector(".swiper-events")) {
  var swiper = new Swiper(".swiper-events", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      991.98: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  });
}