// mmenu js code 
document.addEventListener(
    "DOMContentLoaded", () => {
        const menu = new MmenuLight(
            document.querySelector( "#menu" ),
            "(max-width: 991px)"
        );
        const navigator = menu.navigation();
        const drawer = menu.offcanvas();
        document.querySelector( "a[href='#menu']" )
            .addEventListener( "click", ( evnt ) => {
                evnt.preventDefault();
                drawer.open();
            });
    }
);
// slider js code start 
var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});
// header sticky javascript code
// const header = document.querySelector('.sticky-header');
// let isSticky = false;
// let scrollY = window.scrollY || window.pageYOffset;
// function updateStickyState() {
//     if (window.scrollY > header.offsetTop) {
//         if (!isSticky) {
//             header.style.transform = 'translateY(-100%)';
//             isSticky = true;
//         }
//     } else {
//         if (isSticky) {
//             header.style.transform = 'translateY(0)';
//             isSticky = false;
//         }
//     }
// }
// window.addEventListener('scroll', () => {
//     const newScrollY = window.scrollY || window.pageYOffset;
    
//     if (newScrollY !== scrollY) {
//         scrollY = newScrollY;
//         updateStickyState();
//     }
// });
// updateStickyState();


// testimonial_slider js code start 
var swiper = new Swiper(".testimonial_slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  keyboard: {
  enabled: true,
  },
  breakpoints: {
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  992: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
},
});