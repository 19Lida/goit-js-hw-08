import throttle from 'lodash.throttle';

// ключ до сховища
const STORAGE_KEY = 'feedback-form-state';

// отримуємо доступ до елементів форми
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('feedback-form textarea'),
  input: document.querySelector('feedback-form input'),
};

// додаємо значення
let formData = {};
// додаємо функціонал
onFormState();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// функція збереження поточних значень
function onTextareaInput(event) {
  event.preventDefault();
  formData[event.target.name] = event.target.value;
  const message = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, message);
}
// функція перевірки стану сховища
function onFormState() {
  const data = localStorage.getItem(STORAGE_KEY);
  const formData = JSON.parse(data);
  if (formData) {
    refs.textarea.value = formData.message || '';
    refs.input.value = formData.email || '';
  }
}
// очищає сабміт,встановлюємо по замовчуванню поведінку,очищаємо форму,очищаємо сховище
function onFormSubmit(event) {
  event.preventDefault();
  // очищення форми після відправки
  event.currentTarget.reset();
  // очищення локалсторедж після відправки смс
  localStorage.removeItem(STORAGE_KEY);
}
console.log(formData);
