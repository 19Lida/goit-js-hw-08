// Крок - 1;
// import throttle from 'lodash.throttle';

// // Крок-1-ключ до сховища
// const STORAGE_KEY = 'feedback-form-state';

// // Крок-1-отримуємо ссилки елементів форми
// const refs = {
//   form: document.querySelector('.feedback-form'),
//   textarea: document.querySelector('.feedback-form textarea'),
//   input: document.querySelector('.feedback-form input'),
// };
// // Крок-1 - сама форма
// let formData = {};

// //  Крок 3-ця ф-я викликається при загрузці сторінки і забирає значення з локал сторедж в текстерія
// onFormState();
// // Крок-1 вішаємо слухача подій на ссилки
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// // refs.input.addEventListener('input', throttle(onTextareaInput, 500));
// refs.input.addEventListener('input', onInputClick);

// // Крок 1-функція збереження значення інпута в локалсторедж
// function onTextareaInput(event) {
//   event.preventDefault();
//   const message = event.target.value;
//   formData.message = message;
//   // const message = JSON.stringify(formData); // stringify писати не треба,бо це ітак рядок,переводити треба масив,об"єкт
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }
// function onInputClick(event) {
//   //   event.preventDefault();
//   const email = event.target.value;
//   formData.email = email;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }

// // Крок-2 Відправляємо фотму:очищає сабміт,встановлюємо по замовчуванню поведінку,очищаємо форму
// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log(formData);

//   // очищення полів форми після відправки
//   event.currentTarget.reset();
//   //Крок останній- очищення локалсторедж після відправки смс
//   localStorage.removeItem(STORAGE_KEY);
//   formData = {};
// }
// // Крок -3 (продовження),функція перевірки стану сховища(чи є там щось?,якщо такого ключа немає,то в консоль поверне null) і отримання значення з нього
// function onFormState() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   const email = JSON.parse(savedMessage)?.email;
//   const message = JSON.parse(savedMessage)?.message;
//   formData = { email, message };

//   if (email) {
//     refs.input.value = email;
//   }

//   if (message) {
//     refs.textarea.value = message;
//   }
// }

// Крок-1
import throttle from 'lodash.throttle';

// Крок-1-ключ до сховища
const STORAGE_KEY = 'feedback-form-state';

// Крок-1-отримуємо ссилки елементів форми
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};
// Крок-1 - сама форма
let formData = {};

//  Крок 3-ця ф-я викликається при загрузці сторінки і забирає значення з локал сторедж в текстерія
onFormState();
// Крок-1 вішаємо слухача подій на ссилки
refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.input.addEventListener('input', throttle(onTextareaInput, 500));

// Крок 1-функція збереження значення інпута в локалсторедж
function onTextareaInput(event) {
  event.preventDefault();
  const name = event.target.name;
  formData[name] = event.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...formData }));
}

// Крок-2 Відправляємо фотму:очищає сабміт,встановлюємо по замовчуванню поведінку,очищаємо форму
function onFormSubmit(event) {
  event.preventDefault();
  console.log(formData);

  // очищення полів форми після відправки
  event.currentTarget.reset();
  //Крок останній- очищення локалсторедж після відправки смс
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}
// Крок -3 (продовження),функція перевірки стану сховища(чи є там щось?-без 46 лінійки,якщо такого ключа немає,то в консоль поверне null) і отримання значення з нього
function onFormState() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  const email = JSON.parse(savedMessage)?.email;
  const message = JSON.parse(savedMessage)?.message;
  formData = { email, message };

  if (email) {
    refs.input.value = email;
  }

  if (message) {
    refs.textarea.value = message;
  }
}
