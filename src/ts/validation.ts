document.addEventListener('DOMContentLoaded', () => {
  const inputs = Array.from(document.querySelectorAll('.field__input')) as HTMLInputElement[];
  (document.querySelector('.field__button') as HTMLButtonElement).disabled = true;
  document.getElementById('phone')?.addEventListener('input', applyPhoneMask);
  document.getElementById('phone')?.addEventListener('focus', applyPhoneMask);

  inputs.forEach((input) => {
    switch (input.id) {
      case 'subject':
      case 'name':
      case 'phone':
        input.required = true;
        break;
    }

    input.addEventListener('input', submitButton);
    input.addEventListener('blur', validate);
  });

  function validate(inputEvent: Event) {
    const input = inputEvent.target as HTMLInputElement;
    const inpValue = input.value;

    const isEmpty = input.required && !inpValue;

    if (isEmpty || inpValue === '+7(') {
      input.className = 'field__input input--error body-1--normal';
      const label = document.querySelector(`label[for=${input.id}]`);
      if (label) {
        label.className = 'field__label--error body-3--normal';
      }
    } else {
      input.className = 'field__input input body-1--normal';
      const label = document.querySelector(`label[for=${input.id}]`);
      if (label) {
        label.className = 'field__label body-3--normal';
      }
    }
  }

  function submitButton() {
    const disabled = inputs.some((input) => !input.value);
    console.log(`${disabled}`);
    (document.querySelector('.field__button') as HTMLButtonElement).disabled = disabled;
  }

  function applyPhoneMask() {
    let phoneNumber = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    phoneNumber = phoneNumber.replace(/\D/g, '');

    if (phoneNumber.length === 0) {
      phoneNumber = '+7(' + phoneNumber;
    } else if (phoneNumber.length <= 4) {
      phoneNumber = '+7(' + phoneNumber.substring(1);
    } else if (phoneNumber.length <= 7) {
      phoneNumber = '+7(' + phoneNumber.substring(1, 4) + ') ' + phoneNumber.substring(4);
    } else if (phoneNumber.length <= 11) {
      phoneNumber =
        '+7(' + phoneNumber.substring(1, 4) + ') ' + phoneNumber.substring(4, 7) + '-' + phoneNumber.substring(7);
    } else {
      phoneNumber =
        '+7(' +
        phoneNumber.substring(1, 4) +
        ') ' +
        phoneNumber.substring(4, 7) +
        '-' +
        phoneNumber.substring(7, 9) +
        '-' +
        phoneNumber.substring(9, 11);
    }

    (document.getElementById('phone') as HTMLInputElement).value = phoneNumber;
  }
});
