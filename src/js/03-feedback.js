import throttle from "lodash.throttle";

// ключ до сховища
const STORAGE_KEY = 'feedback-form-state';

// отримуємо доступ до елементів форми
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('feedback-form textarea'),
    input: document.querySelector('feedback-form input'),
};

// додаємо значення
let formData ={};
// додаємо функціонал
onFormState();
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput,500));

// функція збереження поточних значень
function onTextareaInput(event) {
    event.preventDefault();
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}
// функція перевірки стану сховища
function onFormState() {
    const messageStoregeSave = localStorage.getItem(STORAGE_KEY);
    const parseStoregeMessage = JSON.parse(messageStoregeSave);
    if (messageStoregeSave) {
        (refs.textarea.value = parseStoregeMessage.message || "");
        (refs.input.value = parseStoregeMessage.email || "");
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