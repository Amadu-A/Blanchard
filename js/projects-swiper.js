(() => {
  let projectsSlider = new Swiper(".projects__slides-container", {
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".projects .projects__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev"
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        grid: {
          rows: 1
        }
      },

      768: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 34
      },

      1024: {
        slidesPerView: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 50
      },

      1920: {
        slidesPerView: 3,
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
