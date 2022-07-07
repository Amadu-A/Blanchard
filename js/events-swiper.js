(() => {
  function setIndex(params) {
    const indx = document.querySelector(`.${params.killindex}`);



    let eventsSlider = new Swiper(".events__slides-container", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: "row"
      },
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // type: "fraction"
      },
      navigation: {
        nextEl: ".events__navigation-next",
        prevEl: ".events__navigation-prev"
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          grid: {
            rows: 1
          }
          // spaceBetween: 30
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          grid: {
            rows: 1
          },
          spaceBetween: 34
        },

        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 1,
            fill: "row"
          },
          spaceBetween: 27
          // pagination: {
          //   el: '.events .swiper-pagination',
          //   clickable: true,
          // },
          // a11y: {
          //   paginationBulletMessage: 'Перейти к слайду {{index}}'
          // }
        },

        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 1
          },
          spaceBetween: 50
        }
      },

      a11y: false,
      keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

      // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      slideVisibleClass: 'slide-visible',

      on: {
        init: function () {
          this.slides.forEach(slide => {
            if (!slide.classList.contains('slide-visible')) {
              // slide.tabIndex = '-1';
              slide.querySelector(".events__slide-content-link").tabIndex = '-1';
            } else {
              // slide.tabIndex = '';
              slide.querySelector(".events__slide-content-link").tabIndex = '';
            }
          });
        },
        slideChange: function () {
          this.slides.forEach(slide => {
            if (!slide.classList.contains('slide-visible')) {
              // slide.tabIndex = '-1';
              slide.querySelector(".events__slide-content-link").tabIndex = '-1';
            } else {
              // slide.tabIndex = '';
              slide.querySelector(".events__slide-content-link").tabIndex = '';
            }
          });
        }
      },



      // on: {
      //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
      //   beforeResize: function () {
      //     this.slides.forEach((el) => {
      //       el.style.marginTop = "";
      //     });
      //   }
      // }
    });
  }


  setIndex({
    killindex: "events__slide-content-link" //
  });

})();
