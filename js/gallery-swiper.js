(() => {
  let gallerySlider = new Swiper(".gallery__slides-container", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 20,
    pagination: {
      el: ".gallery .gallery__pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".gallery__nav-next",
      prevEl: ".gallery__nav-prev"
    },

    breakpoints: {
      580: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 38
      },

      780: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1
        },
        spaceBetween: 34
      },

      1360: {
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


  let swiperSlides = document.querySelector(".gallery__container").querySelectorAll(".swiper-slide");
  let modal = document.querySelector(".swiper-section-modal");
  let modalBtn = modal.querySelector(".close");
  let html = document.documentElement;
  //сохраним текущую прокрутку:
  // let scrollPosition = window.pageYOffset;

  swiperSlides.forEach(el => {
    el.addEventListener("click", function() {
      let img = this.querySelector("img");
      let link = img.getAttribute("src");

      let content = this.querySelector("div");
      let name = content.getAttribute("data-content");
      let scrollPosition = window.pageYOffset;
      html.classList.add("hystmodal__opened");

      var cont_div1 = document.getElementById(name);
      var cont_div2 = document.getElementById("empty");
      cont_div2.innerHTML = cont_div1.innerHTML;

      console.log(modal.querySelector("img"));
      animation(modal, "modal-active", "play");
      modal.querySelector("img").setAttribute("src", link);
      modal.querySelector(".gallery__slide-modal-window").setAttribute("data-window", name);

      //блокировка страницы
      html.classList.add("hystmodal__opened");
    })
  })

  modalBtn.addEventListener("click", function() {
    animation(modal, "modal-active", "reverse");
    //разблокировка страницы
    html.classList.remove("hystmodal__opened");
    window.scrollTo(0, scrollPosition);
  });

  window.onclick = function (event) {
    if (event.target.hasAttribute('data-modal')) {
      animation(modal, "modal-active", "reverse");
      event.target.style.display = "none";
        //разблокировка страницы
      html.classList.remove("hystmodal__opened");
      window.scrollTo(0, scrollPosition);
    }
  };


  function animation(el, Class, flag) {
    if (flag === "play") {
      el.style.display = "flex";
      setTimeout(function() {
        el.classList.add(Class);
      }, 50)
    } else if (flag === "reverse") {
      el.classList.remove(Class);
      setTimeout(function() {
        el.style.display = "none";
      }, 700)
    }
  };
})();
