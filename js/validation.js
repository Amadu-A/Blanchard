(() => {
  let selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7 (999) 999-99-99');
  im.mask(selector);

  let selector2 = document.querySelector('input[type="tel"]');

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

  let validateForms = function(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
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
  }

  validateForms('.contacts__form', { tel: {required: true, tel: true}, name: {required: true} }, '.thanks-popup', 'send goal');

  // const validation = new window.JustValidate('.contacts__form', {
  //   errorFieldCssClass: 'is-invalid',
  //   errorFieldStyle: {
  //     border: '1px solid var(--error)',
  //   },
  //   errorLabelCssClass: 'is-label-invalid',
  //   errorLabelStyle: {
  //     color: 'var(--error)',
  //   },
  //   focusInvalidField: true,
  //   lockForm: true,

  //   submitHandler: function(form) {
  //     let formData = new FormData(form);
  //     let xhr = new XMLHttpRequest();
  //     xhr.onreadystatechange = function() {
  //       if (xhr.readyState === 4) {
  //         if (xhr.status === 200) {
  //           console.log('Отправлено');
  //         }
  //       }
  //     }
  //     xhr.open('POST', 'mail.php', true);
  //     xhr.send(formData);
  //     form.reset();
  //   }


  // });

  // validation
  // .addField('.input-name', [
  //   {
  //     rule: 'minLength',
  //     value: 3,
  //     errorMessage: 'Имя должно содержать хотя бы 3 буквы'
  //   },
  //   {
  //     rule: 'maxLength',
  //     value: 30,
  //     errorMessage: 'Имя не может содержать более 30 символов'
  //   },
  //   {
  //     rule: 'required',
  //     errorMessage: 'Вы не ввели имя'
  //   }
  // ])
  // .addField('.input-tel', [
  //   {
  //     validator: () => {
  //       const phone = phoneElement.inputmask.unmaskedvalue();
  //       const result = Number(phone) && phone.length === 10;
  //       return result === 0 ? false : result;
  //     },
  //     errorMessage: 'Вы не ввели телефон',
  //   }
  // ]);
})();
