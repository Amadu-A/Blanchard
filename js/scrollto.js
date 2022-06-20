// $('.scrollto a').on('click', function() {

//   let href = $(this).attr('href');

//   $('html, body').animate({
//       scrollTop: $(href).offset().top
//   }, {
//       duration: 3070,   // по умолчанию «400»
//       easing: "linear" // по умолчанию «swing»
//   });

//   return false;
// });



// $('a[href^="#"').on('click', function() {

//   let href = $(this).attr('href');

//   $('html, body').animate({
//       scrollTop: $(href).offset().top
//   });
//   return false;
// });


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};


