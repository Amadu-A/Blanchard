(() => {
  let eventsSlider = new Swiper(".events__slides-container", {
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".events .events__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".events__navigation-next",
      prevEl: ".events__navigation-prev"
    },

    breakpoints: {
      // 580: {
      //   slidesPerView: 2,
      //   grid: {
      //     rows: 1
      //   },
      //   spaceBetween: 30
      // },

      1360: {
        slidesPerView: 3,
        grid: {
          rows: 1,
          fill: "row"
        },
        pagination: {
          el: '.events .swiper-pagination',
          clickable: true,
        },
        a11y: {
          paginationBulletMessage: 'Перейти к слайду {{index}}'
        },
        spaceBetween: 27
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
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      },
      slideChange: function () {
        this.slides.forEach(slide => {
          if (!slide.classList.contains('slide-visible')) {
            slide.tabIndex = '-1';
          } else {
            slide.tabIndex = '';
          }
        });
      }
    }

    // on: {
    //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
    //   beforeResize: function () {
    //     this.slides.forEach((el) => {
    //       el.style.marginTop = "";
    //     });
    //   }
    // }
  });

})();
