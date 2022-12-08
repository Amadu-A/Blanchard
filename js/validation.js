(() => {
  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  let selector2 = document.querySelector('input[type="tel"]');
  let selector3 = document.querySelector('input[type="tel"]');

  selector2.addEventListener('input', function(){
    console.log(selector2.value)


    const re = /^\d*(\.\d+)?$/

    console.log(selector2.value.match(/[0-9]/g).length)


    console.log(selector2.value.replace(/[0-9]/g, "0"));

  });

  // const fileInput = document.querySelector('input[type="file"]');

  // fileInput.addEventListener('change', (e) => {
  // 	let files = e.currentTarget.files;
  // 	console.log(files);

  // 	if (files.length) {
  // 		fileInput.closest('label').querySelector('span').textContent = files[0].name;
  // 	} else {
  // 		fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
  // 	}

  // });

  let validateForms = function(selector, rules, messages, successModal, yaGoal) {
    new window.JustValidate(selector, {

      // errorFieldCssClass: 'is-invalid',
      // errorFieldStyle: {
      //   border: '1px solid #FF5C00',
      // },
      // errorLabelCssClass: 'is-label-invalid',
      // errorLabelStyle: {
      //   color: '#FF5C00',
      // },
      // focusInvalidField: true,
      // lockForm: true,

      rules: rules,
      messages: messages,
      submitHandler: function(form) {
        let formData = new FormData(form);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();

        // fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
      }
    });
  };

  new JustValidate('.contacts__form', {
    colorWrong: '#D11616',
    // errorLabelStyle: {
    //   color: '#D11616',
    // },
    rules: {
      name: {
        required: true,
        minLength: 4,
        maxLength: 12,
      },
      tel: {
        required: true,
        tel: true,
        function: (name, value) => {
          const phone = document.querySelector('input[type="tel"]').inputmask.unmaskedvalue()
          console.log(phone)
          return Number(phone) && phone.length === 10
        }
      },
    },

    messages: {
      name: {
        required: "Вы не ввели имя",
        minLength: "Имя должно иметь более 3 символов",
        maxLength: "Имя должно быть менее 12 символов",
      },
      tel: {
        required: "Введите телефон",
        tel: "Неверный формат номера",
      },
    },

  }, '.thanks-popup', 'send goal');

})();
