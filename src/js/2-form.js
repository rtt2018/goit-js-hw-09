let formData = { email: '', message: '' };

const key = 'feedback-form-state';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const getForm = document.querySelector('.feedback-form');

getForm.addEventListener('input', saveAndrestoreData);

function saveAndrestoreData(event) {
  if (event.target.name === 'email') {
    mailValidation(event);
    formData.email = event.target.value.trim();
  }
  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }
  localStorage.setItem(key, JSON.stringify(formData));
}

// --------------------Валідація мейлу-------------------------------
function mailValidation(eventValidation) {
  if (emailRegex.test(eventValidation.target.value)) {
    eventValidation.target.setCustomValidity('');
  } else {
    eventValidation.target.setCustomValidity(
      'Введіть коректний email, наприклад usermail@mail.domen. Адреса має бути введена латиницею, містити символ @, після якого щонайменше 1 символ, потім . після якої щонайменше 2 символи'
    );
  }
  eventValidation.target.reportValidity();
}

// ----------------Відновлення даних при переавантаженні-------------------
window.addEventListener('load', restoreData);

function restoreData() {
  const getForm = document.querySelector('.feedback-form');
  const savedData = localStorage.getItem(key);
  if (savedData) {
    formData = JSON.parse(savedData);
    const { email, message } = formData;
    getForm.elements.email.value = email;
    getForm.elements.message.value = message;
  }
}

//----------------Обробка субміту--------------------

getForm.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();

  if (
    event.target.elements.email.value.trim() === '' ||
    event.target.elements.message.value.trim() === ''
  ) {
    alert("'All form fields must be filled in'");
    return;
  }

  if (emailRegex.test(event.target.elements.email.value)) {
    event.target.elements.email.setCustomValidity('');
  } else {
    event.target.elements.email.setCustomValidity(
      'Введіть коректний email, наприклад usermail@mail.domen. Адреса має бути введена латиницею, містити символ @, після якого щонайменше 1 символ, потім . після якої щонайменше 2 символи'
    );
    return;
  }

  console.log(formData);

  localStorage.removeItem(key);
  //localStorage.clear();
  event.target.reset();
  formData.email = '';
  formData.message = '';
}
