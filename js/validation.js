(() => {
  var phoneElement = document.querySelector("input[type='tel']");

  var im = new Inputmask("+7(999) 999-99-99");
  im.mask(phoneElement);

  const validation = new window.JustValidate('.contacts__form', {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid var(--error)',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
    },
    focusInvalidField: true,
    lockForm: true,

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
    }


  });

  validation
  .addField('.input-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя должно содержать хотя бы 3 буквы'
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя не может содержать более 30 символов'
    },
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя'
    }
  ])
  // .addField('.input-mail', [
  //   {
  //     rule: 'required',
  //     errorMessage: 'Вы не ввели e-mail',
  //   },
  //   {
  //     rule: 'email',
  //     errorMessage: 'Укажите ваш e-mail',
  //   },
  // ])
  .addField('.input-tel', [
    {
      validator: () => {
        const phone = phoneElement.inputmask.unmaskedvalue();
        const result = Number(phone) && phone.length === 10;
        return result === 0 ? false : result;
      },
      errorMessage: 'Вы не ввели телефон',
    }
  ]);
})();
